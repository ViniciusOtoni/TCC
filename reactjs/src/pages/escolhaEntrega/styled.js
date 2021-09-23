import styled from "styled-components";

const StyledEscolhaEntrega = styled.div `

    display: flex;
    flex-direction: column;
    height: 89.93vh;

        .pc {
        width: 1240px;
        margin: auto;
    }
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
        padding-left: 3em;
        margin-bottom: 2em;
    }

    .title-column {
        color: #F0AC54;
        font-size: 1.3em;
        font-family: MontserratBold;
    }

    .pag {
        margin-top: 3em;
        margin-bottom: 3em;
        display: flex;
        flex-direction: row;
        justify-content: center;
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

    .cell {
        display: none;
    }

    

    @media(max-width:375px) {
        .cell {
            width: 100%;
            display: block;
        }

        .pc {
            display: none;
        }

      


        .row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: 0em;
            margin: 0em;
            margin-top: 3em;
        }

        .titulo {
            text-align: left;
            padding: 0em;
            margin: 0em;
            padding-top: 2em;
            padding-left: .7em;
            padding-bottom: 1em;
        }

        .column-acao {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .column {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1em;
            
        }

        .title-column {
            text-align: left;
            padding: 0em;
            margin: 0em;
        }

        .verificar-botao {
            text-align: left;
            padding: 0em;
            margin: 0em;
        }
        .pedido {
            padding: 0em;
            margin: 0em;
            padding-top: 1em;
            padding-left: .1em;
        }

        .verificar-botao {
            width: 100%
        }

        
        .verificar-botao button {
            width: 90%;
            margin-left: 1em;
        }

        
}
`

export { StyledEscolhaEntrega }