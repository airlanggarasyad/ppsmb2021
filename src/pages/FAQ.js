import React, {useState}from 'react';
import {QuestionItems} from './QuestionItems';
import styled from "styled-components";
import mainBG from "../assets/img/main-bg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUnderline} from '@fortawesome/free-solid-svg-icons';

export default function FAQ(){
        const [input, setInput] = useState("");
        return(
            <Container>
                <div className='top'>
                    <div>Breadcrumbs</div>
                    <div>Logo</div>
                </div>
                <div className='title'>
                    <h1 className="ppsmb-darkblue">Pertanyaan Umum</h1>
                    <div>Search Bar</div>
                </div>

                <div className='content'>
                    <div className='choose-category' >
                        {QuestionItems.map((item,index) => {
                            return(
                                <div key={index}>
                                    <p className="ppsmb-red">{item.category}</p>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className="category">
                        {QuestionItems.map((item,index) => {
                                    return (
                                        <div key={index}>
                                            <h2 className="ppsmb-red">{item.category}</h2>
                                            
                                                {item.question.map(question => {
                                                    return(
                                                        <div>
                                                            <p className="ppsmb-darkblue">{question.title}, {question.answer}></p>
                                                            <div className="line"></div>
                                                        </div>
                                                
                                                    )
                                                    
                                                })}
                                            
                                          
                                        </div>
                                    )
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

    .top{
        width: 100vw;
        display: flex;
        justify-content: space-between;
    }

    .title{
        text-align: center;
        
    }

    .content{
        width: 100vw;
        display: flex;
        justify-content: flex-start;
        /* background-color: aquamarine; */
        margin-top: 20px;

        .choose-category{
            margin-left: 10%;
            width: 10%;
            /* background-color: red; */
            p{
                line-height: 30px;
                &:hover{
                    font-weight: bold;
                }
            }
        }

        .category{
            margin: 0 10% 10% 4%;
            width: 70%;
            div{
                margin-bottom: 5%;
                background-color: var(--color-white);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 0 25px 0 25px;
                border-radius: 20px;
                h2{
                    margin-bottom: 0;
                }
                div{
                    margin: 0;
                    width: 100%;
                    p{
                        margin: 10px 0px;
                    }
                    .line{
                        height: 2px;
                        width: 100%;
                        background-color: var(--color-red);
                        margin: 0 0 10px 0;
                    }
                }
                
                
            }

        }


        
    }
`
