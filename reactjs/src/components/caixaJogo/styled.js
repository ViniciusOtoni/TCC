import styled from "styled-components";

const StyledJogo = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #282828;
    justify-content: center;
    align-items: center;
    width: 20em;
    margin: 1em;
    margin-left: 2.97em;
    height: 25em;
    


    .row1 {
        display: flex;
        flex-direction: row;
        
    }

    .nome-jogo {
        color: white;
        width: 10em;
        text-align: center;
        padding-bottom: 0em;
        font: 1.2em MontserratBold;
    }


    .preco {
        color: white;
       
        padding-bottom: 0.2em;
        font: 1.5em MontserratBold;
        }

    .imagem-jogo img {
        width: 11em;
        height: 11em;
    }

    .imagem-jogo {
        padding-bottom: 0em;
    }

     

`

export { StyledJogo }