import styled from "styled-components";

const StyledEntregaItem = styled.div`
  .pc {
    width: 1240px;
    margin: auto;
  }

  .cell {
    display: none;
  }

  .agp-cima {
    display: flex;
    flex-direction: column;
    margin-top: 7em;
  }

  .row-cima {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .carregamento {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2em;
    margin-right: 1em;
  }

  .definicao1 {
    text-align: center;
    color: ${props => props.conditions === "Saiu para entrega" || props.conditions === 'Entregue' || props.conditions === 'A caminho'  ? "green" : "white"};
    font-family: MontserratBold;
    width: 9em;
    padding-top: 0.4em;
    padding-bottom: 1em;
  }

  .definicao2 {
    text-align: center;
    color: ${props => props.conditions  === 'A caminho' || props.conditions === "Entregue" ? "green" : "white"};
    font-family: MontserratBold;
    padding-top: 0.4em;
    padding-bottom: 1em;
  }

  .definicao3 {
    text-align: center;
    color: ${props => props.conditions === 'Entregue' ? "green" : "white"};
    font-family: MontserratBold;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .limite1 {
    background-image: url(${props => props.conditions === 'Saiu para entrega' || props.conditions === 'Entregue' || props.conditions === 'A caminho' ? '/assets/images/icon-check-green.svg' : '/assets/images/icon-check.svg'});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
  }

  .limite2 {
    background-image: url(${props => props.conditions === 'A caminho' || props.conditions === 'Entregue' ? '/assets/images/icon-check-green.svg' : '/assets/images/icon-check.svg'});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
  }

  .limite3 {
    background-image: url(${props =>  props.conditions === 'Entregue' ? '/assets/images/icon-check-green.svg' : '/assets/images/icon-check.svg'});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
  }

  .load-bar {
    background-color: #ffffff;
    border-radius: 2em;
    width: auto;
    height: 2em;
  }

  .icon img {
    width: 8em;
    height: 8em;
  }

  .agp-baixo {
    display: flex;
    flex-direction: column;
  }

  .status {
    display: flex;
    flex-direction: column;
    margin-top: 5em;
  }

  .row-status {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: .5em 0em;
  }
  .titulo {
    font-size: 29px;
    color: #ffffff;
    font-family: MontserratBold;
    padding-bottom: 1em;
  }

  .botao-check1, .botao-check2, .botao-check3, button  {
    border-radius: 50%;
   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    width: 2em;
    height: 2em;
    text-decoration: none;
    border: none;
    background-color: #ffffff;
    
  
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
  }

  .botao-check1 button {
    background-image: url(${props => props.conditions === 'Saiu para entrega' || props.conditions === 'A caminho' || props.conditions === 'Entregue' ? '/assets/images/checkzinho.svg' : ''});
  }

  
  .botao-check2 button {
    background-image:  url(${props => props.conditions === 'A caminho' || props.conditions === 'Entregue' ? '/assets/images/checkzinho.svg' : ''});
  }

  
  .botao-check3 button {
    background-image: url(${props => props.conditions === 'Entregue' ? '/assets/images/checkzinho.svg' : ''});
  }

  .texto-status {
    color: #ffffff;
    font-size: 16px;
    font-family: MontserratBold;
    width: 12em;
    padding-left: 1em;
  }

  .horario-status {
    color: #ffffff;
    font-size: 16px;
    font-family: MontserratBold;
  }

  .voltar button {
    background-color: #d9534f;
    color: #ffffff;
    border: none;
    font-size: 15px;
    font-family: MontserratBold;
    width: 9em;
    height: 2em;
    border-radius: 0.3em;
    text-align: center;
  }

  .voltar {
    margin-top: 7em;
    padding-bottom: 2.84em;
  }

  @media (max-width: 425px) {
    .pc {
      display: none;
    }
    .cell {
      display: block;
    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      position: relative;
    }

    .column {
      display: flex;
      flex-direction: column;
      margin-top: 2em;
    }

    .icon1 img {
      width: 4.3em;
      height: 5em;
      padding-bottom: 1em;
  
    }

    .icon2 img {
      width: 4.3;
      height: 5em;
      padding-bottom: 1em;
    }

    .icon3 img {
      width: 4.3;
      height: 5em;
      padding-bottom: 1em;
      padding-right: 1em;
    }

    .limite1 img {
      width: auto;
      height: 3em;
    }

    .limite1 {
      position: absolute;
      right: 3em;
    }

    .limite2 img {
      width: auto;
      height: 3em;
    }

    .limite2 {
      position: absolute;
      right: 3em;
    }

    .limite3 {
      position: absolute;
      right: 3em;
    }

    .limite3 img {
      width: auto;
      height: 3em;
    }

    .limite1 {
      background-size: auto 1.3em;
      margin-top: 2.8em;
    }

    .limite2 {
      background-size: auto 1.3em;
      margin-top: 2.8em;
    }

    .limite3 {
      background-size: auto 1.3em;
      margin-top: 2.8em;
    }

    .load-bar {
      width: 70%;
      margin-left: 4em;
    }

    .agp-baixo {
      padding: 0.9em;
    }

    .voltar {
      width: 100%;
      display: flex;
    }

    .voltar button {
      width: 100%;
      height: 3.2em;
    }
  }
`;

export { StyledEntregaItem };
