import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: column;

    background-color: #333333;
    height: 100vh;

    .cabecalho {
        display: flex;
        flex-direction: row;

        padding: 2em;
        color: #F0AC54;
    }

    .cabecalho-barra {
        border: 1px solid #F0AC54;
        width: 90%;
        margin-left: 4em;
        margin-bottom: 2em;
    }

    .sub-main {
        display: flex;
        flex-direction: row;
    }

    .esquerda-grupo-input {
        display: flex;
        flex-direction: column;

        margin-left: 4em;
    }

    .text-input {
        font-size: 22px;
        line-height: 60px;
        

        color: white;
    }

    hr {
        margin: 1em 2em;
        height: 34em;
    }

    .direita-grupo-input {
        display: flex;
        flex-direction: column;
    }

    .credit-card {
        display: flex;
        flex-direction: column;
    }

    .credit-card button {
        width: 300px;
        height: 30px;

        background: #F3F3F3;

        border: none;
        text-align: left;
        align-items: center;

    }

    .img-button {
        width: 1.5em;
        height: 1em;

       margin-left: 10.6em;
        
    }

    .img-button2 {
        width: 1.5em;
        height: 1em;

        margin-left: 11em;
    }

    .cartoes {
        display: flex;
        flex-direction: row;

        align-items: center;
        margin-top: 3em;
        margin-bottom: 3em;
    }

    .cartao {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        margin: 0em .8em;
       
    }

    .cartao img {
        width: 50px;
    }

    .cartao-bolinha {
        background-color: #F0AC54;
        border: 3px solid white;
        border-radius: 50%;
        width: 20px;
        height: 20px
    }

    .cartao-bolinha2 {
        background-color: white;
        border: 3px solid white;
        border-radius: 50%;
        width: 20px;
        height: 20px
    }

    .input-esquerda-grupo {
        height: 40px;
        width: 320px;
    }
    
    .img-cartao-2 {
        margin-bottom: 1em;
    }

    .img-cartao-3 {
        margin-bottom: 1em;
    }
    
    .img-cartao-5 {
        margin-bottom: .5em;
    }

    .Last-information-inputs {
        display: flex;
        flex-direction: row;
    }

    .Last-information-inputs1 {
        display: flex;
        flex-direction: column;
        
        color: white;
        margin-right: 2em;
    }

    .Last-information-inputs2 {
        display: flex;
        flex-direction: column;

        color: white;
    }

    .last-information-text1 {
        line-height: 36px;
    }

    .input-lastInfo-text1 {
        width: 300px;
        height: 40px;
        border-radius: 1em;
    }

    .last-input-lastInfo-text1 {
        margin-top: 10em;
    }
  
    .last-information-text1-last {
        margin-top: 3em;
        line-height: 40px;
    }

    .verde-botao {
        background-color: #34D231;
        height: 40px;
        border-radius: 1em;

        border: none;
        color: white;

        margin-top: 6.5em;

    }

    .parcelas-section {
        background-color: #ffffff;
        color: #808080;
        padding: 0.6em;
        border-radius: .4em;
        border: none;
        outline: none;
        font-family: MontserratBold;
    }
`

export { Container };