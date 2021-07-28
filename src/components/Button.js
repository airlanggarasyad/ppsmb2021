import React from 'react'
import styled from "styled-components";

function Button(props) {
    return (
        <>
            <ButtonStyled color={props.color} bg={props.bg}>{props.text}</ButtonStyled>          
        </>
    )
}

export default Button

const ButtonStyled = styled.button`
  border-radius: 100px;
  border: 2px solid ${props => props.bg};

  min-width: 40px;

  padding: 5px 10px;
  align-self: center;
  float: left;

  font-size: 2.3vmin;
  font-family: "Poppins";
  font-weight: normal;
  line-height: 1;
  cursor: pointer;

  color: ${props => props.bg};
  background-color: ${props => props.color};
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    color: ${props => props.color};
    background-color: ${props => props.bg};
  }
`;
