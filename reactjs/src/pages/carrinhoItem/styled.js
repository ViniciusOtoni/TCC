import styled from "styled-components";

const StyledCarrinhoItem = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #333333;

    .hr {
        border: solid 0.7px #C4C4C4;
        margin-right: 6.3em;
        margin-left: 4.3em;
        width: auto;
        margin-bottom: 5em;
    }

    .cabecalho {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .itens-direita {
        display: flex;
        flex-direction: row;
        
    }

    .preco {
        font-size: 64px;
        color: #F0AC54;
        margin-right: 2em;

    }
    .quantidade {
        font-size: 64px;
        color: #F0AC54;
        margin-right: 1em;

    }

    .titulo {
        font-size: 64px;
        color: #F0AC54;
        margin-left: 1em;
    }


`

export { StyledCarrinhoItem }
