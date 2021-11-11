import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #333333;

  .sub-main {
    padding-top: 3em;
  }

  .cabecalho {
    display: flex;
    flex-direction: row;

    padding: 2em;
    color: #f0ac54;
  }

  .cabecalho-barra {
    border: 1px solid #f0ac54;
    width: 90%;
    margin-left: 4em;
    margin-bottom: 2em;
  }

  .sub-main {
    display: flex;
    flex-direction: row;
    width: 1240px;
    margin: auto;
  }

  .esquerda-grupo-input {
    display: flex;
    flex-direction: column;

    margin-left: 4em;
  }

  .text-input {
    font-size: 22px;
    line-height: 60px;
    font-family: MontserratBold;

    color: white;
  }

  hr {
    margin: 0em 3em;
    max-height: 60%;
  }

  .direita-grupo-input {
    display: flex;
    flex-direction: column;
  }

  select option {
    font-family: MontserratBold;
  }

  .credit-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    padding-top: 7em;
  }

  .credit-card button {
    width: 300px;
    height: 30px;
    font-family: Medio;
    font-size: 0.8em;
    background: #f3f3f3;
    background-color: #ffffff;
    border: none;
    text-align: left;
    align-items: center;
    position: relative;
  }

  .credit-card button:hover {
    background-color: #f3f3f3;
    font-family: MontserratBold;
  }

  .credit-card .selecionado {
    background-color: #f3f3f3;
    font-family: MontserratBold;
    margin-left: -1em;
  }

  .img-button {
    width: 1.5em;
    height: 1em;
    position: absolute;
    right: 1em;
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
    margin: 0em 0.8em;
  }

  .cartao img {
    width: 50px;
  }

  .cartao-bolinha {
    background-color: #f0ac54;
    border: 3px solid white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .cartao-bolinha2 {
    background-color: white;
    border: 3px solid white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .input-esquerda-grupo {
    height: 40px;
    width: 320px;
  }

  .img-cartao-2 {
    margin-bottom: 1em;
  }

  .img-cartao-3 {
    margin-bottom: 1.2em;
  }

  .img-cartao-4 {
    margin-bottom: .7em;
  }

  .img-cartao-5 {
    margin-bottom: 0.75em;
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

  .last-information-text1-last {
    line-height: 40px;
    margin-top: 3em;
    font-family: MontserratBold;
  }

  .last-information-text1 {
    font-family: MontserratBold;
    line-height: 36px;
  }

  .input-lastInfo-text1 {
    width: 320px;
    height: 40px;
    border-radius: .5em;
  }

  .last-input-lastInfo-text1 {
    margin-top: 10em;
  }

  .last-input-information-text1-last:hover {
    outline: none;
  }

  .verde-botao {
    background-color: #34d231;
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
    border-radius: 0.4em;
    border: none;
    outline: none;
    font-family: MontserratBold;
  }

  .titulo-produto {
    color: #ffffff;
    font-size: 2em;
    font-family: MontserratBold;
  }

  .row-produto {
    display: flex;
    flex-direction: row;
    padding-top: 0.6em;
    padding-bottom: 0.5em;
    align-items: center;
  }

  .total-compra {
    font-size: 1.2em;
    color: #f0ac54;
    font-family: MontserratBold;
  }

  .preço-compra {
    font-size: 1.2em;
    color: #ffffff;
    font-family: MontserratBold;
    padding-left: 1em;
  }

  .preço-compra1 {
    font-size: .9em;
    color: #ffffff;
    font-family: MontserratBold;
    padding-left: 1em;
  }


  
.radio-container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }
  
  /* Hide the browser's default radio button */
  .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    margin-top: 1em;
  }
  
  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #EBEBEB;;
    box-shadow: 0px 0px 5px 1px rgba(141, 141, 141, 0.25);
    border-radius: 50%;
  }
  
  /* On mouse-over, add a grey background color */
  .radio-container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the radio button is checked, add a blue background */
  .radio-container input:checked ~ .checkmark {
    background-color: #EBEBEB;
  }
  
  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    
  }
  
  /* Show the indicator (dot/circle) when checked */
  .radio-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the indicator (dot/circle) */
  .radio-container .checkmark:after {
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #282828;
  }

  @media (max-width: 425px) {
    .sub-main {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .esquerda-grupo-input {
      padding: 0em;
      margin: 0em;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }

    .Last-information-inputs {
      display: flex;
      flex-direction: column;
    }
    .text-input {
      display: flex;
      align-self: flex-start;
      padding-left: 1.3em;
    }

    hr {
      height: 1px;
      margin-top: 3em;
      margin-bottom: 3em;
    }

    .credit-card {
      padding-left: 0.7em;
    }

    .cartoes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 1em;
      justify-content: center;
    }

    .cartao {
      padding: 1em;
    }

    .Last-information-inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .Last-information-inputs1 {
      display: flex;
      flex-direction: column;
      align-items: left;
      margin-right: 0em;
    }

    .Last-information-inputs2 {
      display: flex;
      flex-direction: column;
      align-items: left;
    }

    .bottom {
      margin-bottom: 2em;
      width: 100%;
    }
  }

  @media (width: 425px) {
    .text-input {
      padding-left: 2.4em;
    }
  }
`;

export { Container };
