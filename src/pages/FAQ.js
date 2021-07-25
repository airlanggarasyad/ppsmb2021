import React, { useState, useEffect } from 'react';
import { QuestionItems } from './QuestionItems';
import styled from "styled-components";
import mainBG from '../assets/img/pattern-bg-white.webp'
import Breadcrumbs from '../components/Breadcrumbs'
import UpperRight from "../assets/img/corner-bulk2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Lightspeed from 'react-reveal/LightSpeed';
import Pulse from 'react-reveal/Pulse';


export default function FAQ() {
    const [input, setInput] = useState("");
    const [chosenCategory, setChosenCategory] = useState("Semua");

    if (chosenCategory != "Semua") {
        var questions = QuestionItems.filter(item => item.category == chosenCategory);
    } else {
        questions = QuestionItems;
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    return (
        <Container>
            <div className='top'>
                <div className='breadcumb'>
                    <Breadcrumbs 
                        navigations={["Beranda", "FAQ"]}
                    ></Breadcrumbs>
                </div>
                <img src={UpperRight} alt="" srcset="" className="upper-right" />
            </div>
            <Fade >
                <div className='title'>
                    <h2 className="ppsmb-darkblue">Pertanyaan yang Sering Diajukan</h2>
                    <div className="search-bar">
                        <input type="search" placeholder="Cari pertanyaanmu di sini..." onChange={handleChange} value={input} className="ppsmb-darkblue" />
                    </div>
                </div>


                <div className='content'>
                    <div className='choose-category' >
                        <p className={((chosenCategory == 'Semua') ? "ppsmb-red" : "ppsmb-black")} onClick={() => setChosenCategory("Semua")}>Semua</p>
                        {QuestionItems.map((item, index) => {
                            return (
                                <div key={index} >
                                    <p className={((chosenCategory == item.category) ? "ppsmb-red" : "ppsmb-black")} onClick={() => setChosenCategory(item.category)}>{item.category} </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="questions">
                        {questions.map(item => {
                            return (
                                <Fade spy={chosenCategory} >
                                    <Kategori item={item} input={input} chosenCategory={chosenCategory} />
                                </Fade>
                            )

                        })}
                    </div>
                </div>
            </Fade>

        </Container>

    )

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 0 10vmin 10vmin 10vmin;
    background-image: url(${mainBG});
    background-repeat: repeat;
    background-size: 15%;

    p{
        font-size: calc(0.5rem + 1.4vmin);
    }

    .top{
        width: 100vw;
        display: flex;
        /* height: 16vh; */
        position: relative;
        top: 0;

        .breadcumb{
            padding: 10vmin 0 0 10vmin;
        }

        .upper-right {
            position: absolute;
            right: 0;
            width: 25vmin;
            pointer-events: none;
        }
    }

    .title{
        padding: 5vmin;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            font-size: calc(0.5rem + 3.5vmin);
            margin: 4vmin;
        }

        .search-bar{
            width: 50%;
            input{
                font-family: 'Kollektif Regular';
                padding: 10px;
                font-size: calc(0.5rem + 1vmin);
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
        width: 100%;
        display: flex;
        justify-content: center;

        .choose-category{
            display: flex;
            flex-direction: column;
            width: 25%;
            padding: 2vmin;
            p{
                cursor: pointer;
                display: inline-block;
                width: auto;
                line-height: 3vmin;
                &:hover{
                    color: var(--color-red);
                }
            }
        }


        .questions{
            display: flex;
            width: 75%;
            flex-direction: column;
            .per-category{
                margin-bottom: 5vmin;
                padding: 3vmin;
                background-color: var(--color-white);
                display: block;
                border-radius: 20px;
                h4{
                    margin: 0;
                }
                p{
                    margin-bottom: 5px;
                    cursor: pointer;
                }
                .qs:hover{
                        color: var(--color-red);
                    }
                .line{
                    height: 2px;
                    background-color: var(--color-red);
                }
                .accordion-item{
                    margin: 10px;
                    display: flex;
                    align-items: flex-start;
                    .chevron{
                        padding-right: 5px;
                    }

                    p{
                        margin: 0;
                    }

                }
                
                
            }

        }
         
    }
    @media (max-width: 768px){
        .title{
            .search-bar{
                width: 100%;
            }
        }
        
        .content{
            flex-direction: column;
            .choose-category{
                justify-content: space-around;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
                p{
                    padding: 0 2vmin;
                }
            }

            .questions{
                width: 100%;
            }
        }
        
    }    

   
`
const Kategori = ({ item, input, chosenCategory }) => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        setIsShown(false)
        item.question.map((question, index) => {
            if (question.title.toString().toLowerCase().includes(input.toLowerCase())) {
                setIsShown(true)
            }
        })
    }, [input, item])
    return (
        <>
            {isShown &&
                <div className="per-category">
                    <h4 className="ppsmb-red">{item.category}</h4>
                    {item.question.map((question, index) => {
                        return (
                            <Accordion key={index} chosenCategory={chosenCategory} title={question.title} content={question.answer}
                                show={question.title.toString().toLowerCase().includes(input.toLowerCase())} />
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
    }, [chosenCategory]);
    useEffect(() => {
        console.log(show)
    }, [show]);
    return (
        <>
            {show &&
                <div onClick={() => setIsActive(!isActive)} class="accordion" key={key}>
                    <p className={((isActive) ? 'ppsmb-red qs' : 'ppsmb-black qs')} >{title}</p>
                    <Fade spy={isActive}>
                        {isActive && 
                        <div className='accordion-item ppsmb-black'>
                            <div className='chevron'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            <div>
                                {content}
                            </div>
                        </div>}

                    </Fade>
                    <div className="line"></div>
                </div>
            }
        </>


    );
};
