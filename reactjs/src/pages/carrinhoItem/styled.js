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
        width: 12.5em;
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

    .row-input {
        display: flex;
        flex-direction: row;

    }

    .frete {
        font-size: 28px;
        color: #ffffff;
    }

    .row-valores {
        display: flex;
        flex-direction: row;
    }

    .valores-preco {
        font-size: 30px;
        color: #ffffff;
        margin-left: .4em;
    }

    .excluir {
        font-size: 25px;
        color: #ffffff;
    }

    .row-localizacao {
        display: flex;
        flex-direction: row;
        font-size: 28px;
        color: #ffffff;
        justify-content: space-between;
        margin-left: 2.2em;
    }

    .row-val {
        display: flex;
        flex-direction: row;
        margin-left: 2.2em;
        font-size: 28px;

    }

    .titulo-val {
        color: #ffffff;
        
    }

    .valor-val {
        color: #34D231;
        font-size: 28px;
        padding-left: 2em;
    }

    .valor-val1 {
        color: #34D231;
        font-size: 28px;
        padding-left: 0.8em;
        
    }

    .column-valores {
        margin-left: 33em;
    }

    

  
   
    
    
`

export { StyledCarrinhoItem }
