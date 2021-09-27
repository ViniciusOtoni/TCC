import styled from "styled-components";

const StyledButtonPopup = styled.button `

text-align: center;
    color: #F0AC54;
    border: 3px solid #F0AC54;
    background-color: rgba(0,0,0,0);
    width: 15em;
    height: 2.5em;
    border-radius: .6em;
    font: 1.2em MontserratBold;
    
    &:hover{
        background-color: #F0AC54;
        color: white;
        transition: .5s;
        cursor: pointer;
    }

`

export { StyledButtonPopup  }