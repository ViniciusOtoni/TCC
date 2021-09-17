import styled from "styled-components";

const StyledEscolhaEntrega = styled.div `

    display: flex;
    flex-direction: column;
    height: 89.93vh;

    

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 10em;
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        
    }

    .column-acao {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        
    }

    .titulo {
        color: #ffffff;
        font-size: 1.5em;
        font-family: MontserratBold;
        padding-top: 1.4em;
        padding-left: 3.6em;
        margin-bottom: 2em;
    }

    .title-column {
        color: #F0AC54;
        font-size: 1.3em;
        font-family: MontserratBold;
    }
    
    .pedido {
        font: 1em MontserratBold;
        color: #ffffff;
        margin-top: 4em;
    }

    .verificar-botao button {
        border: none;
        color: #ffffff;
        background-color: #5CB85C;
        font: 1em MontserratBold;
        width: 6em;
        height: 2em;
        margin-top: 4em;
        border-radius: 0.2em;
        text-align: center;
    }
`

export { StyledEscolhaEntrega }