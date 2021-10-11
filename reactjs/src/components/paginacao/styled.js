import styled from "styled-components";

const StyledPaginacao = styled.div `

    .pc {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    }

   

    .button-mudar button {
        background-color: #282828;
        color: #F0AC54;
        font: 1em MontserratBold;
        border: none;
        border-radius: 0.2em;
        padding: 0.5em;
        margin: 0em .8em;
    }

    .cell {
            display: none;
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
        @media(max-width:425px) {
            
            .pc {
                display: none;
            }

            .cell {
                display: block;
            }

            display: flex;
            flex-direction: column;

            .row {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }

            
        }
    

`

export { StyledPaginacao }