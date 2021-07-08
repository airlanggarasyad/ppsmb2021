import React, {useState, useEffect}from 'react';
import {QuestionItems} from './QuestionItems';
import styled from "styled-components";
import mainBG from "../assets/img/main-bg.webp";
import Breadcrumbs from '../components/Breadcrumbs'
import UpperRight from "../assets/img/corner-bulk2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default function FAQ(){
        // const [isActive, setIsActive] = useState(false);
        const [input, setInput] = useState("");
        const [chosenCategory, setChosenCategory] = useState("Semua");
        const [activeCategory, setActiveCategory] = useState(false);
        

        if (chosenCategory != "Semua"){
            var questions = QuestionItems.filter(item => item.category == chosenCategory);
        }else{
            questions = QuestionItems;
        }

        const handleChange = (e) => {
            e.preventDefault();
            setInput(e.target.value);
        };

        return(
            <Container>
                <div className='top'>
                    <div>
                        <Breadcrumbs>
                        </Breadcrumbs>
                    </div>
                    <div className="corner-decoratives">
                        <img src={UpperRight} alt="" srcset="" className="upper-right"/>
                    </div>
                </div>
                <div className='title'>
                    <h1 className="ppsmb-darkblue">Pertanyaan yang Sering Diajukan</h1>
                    <div className="search-bar">
                        <input type="search" placeholder="Cari pertanyaanmu di sini..." onChange={handleChange} value={input} className="ppsmb-darkblue"/>
                    </div>
                </div>

                <div className='content'>
                    <div className='choose-category' >
                        <p className="ppsmb-red" onClick={() => setChosenCategory("Semua")}>Semua</p>
                        {QuestionItems.map((item,index) => {
                            return(                  
                                <div key={index}>
                                    <p className="ppsmb-red"  onClick={() => setChosenCategory(item.category)}>{item.category} </p>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className="questions">
                        {questions.map(item => {
                            return <Kategori item={item} input={input} chosenCategory={chosenCategory}/>
                        })}
                    </div>
                </div>

            </Container>
            
        )
        
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${mainBG});
        background-position: center;
        background-size: cover;
        overflow: hidden;
    min-height: 100vh;
    .top{
        width: 100vw;
        display: flex;
        justify-content: space-between;
        height: 14vh;

        .corner-decoratives{
            position: relative;
            .upper-right {
                position: absolute;
                top: 0;
                right: 0;
                width: calc(0.5rem + 30vmin);
                pointer-events: none;
            }
        }
    }

    .title{
        text-align: center;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: calc(0.5rem + 1.4vmin);

        .search-bar{
            margin: 1%;
            width: 50%;
            input{
                font-family: 'Kollektif Regular';
                padding: 10px;
                font-size: calc(0.5rem + 1.4vmin);
                width: 100%;
                border-radius: 7px;

                &:focus{
                    outline: none;
                }
            }
            input[type="search"]::-webkit-search-cancel-button {
                cursor: pointer;
            }

        }
    }

    .content{
        width: 80%;
        display: flex;
        justify-content: center;
        margin: 0 10% 5% 10%;

        .choose-category{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            p{
                line-height: 3vmin;
                cursor: pointer;
                &:hover{
                    font-weight: bold;
                }
            }
        }


        .questions{
            display: flex;
            flex-grow: 7;
            flex-direction: column;
            .per-category{
                margin-bottom: 1%;
                padding: 1% 3%;
                background-color: var(--color-white);
                display: block;
                border-radius: 20px;
                div{
                    margin-bottom: 2%;
                    p{
                        margin: 4px 0px;
                        cursor: pointer;
                        &:hover{
                            color: var(--color-darkblue);
                        }
                    }
                    .line{
                        height: 2px;
                        width: 100%;
                        background-color: var(--color-red);
                    }
                }
                
                
            }

        }
         
    }
    @media (max-width: 767px){
        .top{
            height: 12vh;
        }
        .title{
            .search-bar{
                width: 70%;
            }
        }
        
        .content{
            flex-direction: column;
            .choose-category{
                justify-content: space-around;
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
        
    }    

   
`
const Kategori = ({ item, input, chosenCategory }) => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        setIsShown(false)
        item.question.map((question, index) => {
            if (question.title.toLowerCase().includes(input.toLowerCase())){
                setIsShown(true)
            } 
        })
    },[input, item])
    return (
        <>
            {isShown && 
            <div className="per-category">
                <h3 className="ppsmb-red">{item.category}</h3>
                {item.question.map((question, index) => {
                    return(
                        <Accordion key={index} chosenCategory={chosenCategory} title={question.title} content={question.answer}
                            show={question.title.toLowerCase().includes(input.toLowerCase())}/>
                    )                                                   
                })}                                                                                      
            </div>
            }                   
        </>
        

    );
  };

const Accordion = ({ show, title, content, chosenCategory, key }) => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(false);
    },[chosenCategory]);
    useEffect(() => {
        console.log(show)
    },[show]);
    return (
        <>
            {show && 
                <div class="accordion" onClick={() => setIsActive(!isActive)} key={key}>
                    <p className="ppsmb-black" >{title}</p>
                    {isActive && <p><FontAwesomeIcon icon={faChevronRight}/>    {content}</p>}
                    <div className="line"></div>
                </div>    
            }
        </>
        

    );
  };
