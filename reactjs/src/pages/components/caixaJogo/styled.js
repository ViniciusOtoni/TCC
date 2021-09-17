import styled from "styled-components";

const StyledJogo = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #282828;
    justify-content: center;
    align-items: center;
    padding: 2em;
   


    .row1 {
        display: flex;
        flex-direction: row;
        
    }

    .nome-jogo {
        color: white;
        font-size: 18px;
        padding-bottom: 0em;
    }

    .preco {
        color: white;
        font-size: 36px;
        padding-bottom: 0.2em;
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