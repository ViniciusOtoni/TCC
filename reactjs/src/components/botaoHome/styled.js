import styled from "styled-components";

const StyledButtonHome = styled.div `

    text-align: center;
    color: #F0AC54;
    border: 4px solid #F0AC54;
    background-color: rgba(0,0,0,0);
    width: 7.8em;
    height: 2em;
    border-radius: 1.7em;
    font: 1.2em MontserratBold;
    
    &:hover{
        background-color: #F0AC54;
        color: white;
        transition: .5s;
        cursor: pointer;
    }
`

export { StyledButtonHome }