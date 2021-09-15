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

    .box-preta {
        display: flex;
        flex-direction: row;
        background-color: #282828;
        border-radius: .6em;
        margin: 2em;
        padding: 2em;
        
    }

    .foto img {
        width: 20em;
        height: 20em;
    }

    .column-esp {
        display: flex;
        flex-direction: column;
    }

    .nome-produto {
        color: #FFFFFF;
        font-size: 38px;
        width: 13.5em;
        padding-left: 1em;
        padding-top: .4em;
    }

    .row-vendido {
        display: flex;
        flex-direction: row;
        
    }

    .dono {
        padding-left: 1.4em;
        color: #ffffff;
        font-size: 30px;
        padding-top: 1em;
        
    }

    .nome-dono {
        padding-left: 1.4em;
        padding-top: 1em;
        font-size: 30px;
        color: #F0AC54;
    }
`

export { StyledCarrinhoItem }
