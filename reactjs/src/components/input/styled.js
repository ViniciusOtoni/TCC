import styled from "styled-components";

const StyledInput = styled.input `
    background-color: #ffffff;
    color: #808080;
    padding: 0.6em;
    border-radius: .4em;
    border: none;
    outline: none;
    font-family: MontserratBold;
    cursor: pointer;
    
    ::placeholder {
        color: #808080;
        font-size: 1em;
        font-family: MontserratBold;
    }
    
    :focus::-webkit-input-placeholder {
        color: transparent;
     }
`

export{ StyledInput }