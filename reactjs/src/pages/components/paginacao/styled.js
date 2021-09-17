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
        padding: 0.3em;
    }

    .numero-pagina {
        background-color: #282828;
        color: #F0AC54;
        font: 1em MontserratBold;
        border-radius: 0.2em;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0.4em;
        margin: 2em;
        text-align: center;
      
    }

`

export { StyledPaginacao }