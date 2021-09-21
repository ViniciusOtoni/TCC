import styled from "styled-components";

const StyledPaginacao = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    .button-mudar button {
        background-color: #282828;
        color: #F0AC54;
        font: 1em MontserratBold;
        border: none;
        border-radius: 0.2em;
        padding: 0.5em;
        margin: 0em .8em;
    }

   

    .numero-pagina {
        background-color: #282828;
        color: #F0AC54;
        font: 1em MontserratBold;
        border-radius: 0.2em;
        width: 2em;
        height: 2em;
        margin: 1em;
        align-items: center;
        justify-content: center;
        display: flex;
      
    }

`

export { StyledPaginacao }