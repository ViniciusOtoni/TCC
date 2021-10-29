import styled from "styled-components";

const StyledBoxItemCarrinho = styled.div`
  .pc {
    display: flex;
    flex-direction: row;

    background-color: #282828;
    border-radius: 0.6em;
    margin: 2em 0em;
    padding: 2em;
  }

  .foto img {
    width: 20em;
    height: 20em;
  }
  .foto {
    padding-bottom: 2em;
  }

  .column-esp {
    display: flex;
    flex-direction: column;
  }

  .nome-produto {
    color: #ffffff;
    font-size: 28px;
    width: 12em;
    padding-left: 1em;
    padding-top: 0.4em;
    font-family: MontserratBold;
    height: 7em;
  }

  .row-vendido {
    display: flex;
    flex-direction: row;
  }

  .dono {
    padding-left: 1.4em;
    color: #ffffff;
    font-size: 20px;
    padding-top: 1em;
    font-family: MontserratBold;
    width: 9em;
  }

  .nome-dono {
    padding-left: 1.4em;
    padding-top: 1em;
    font-size: 20px;
    color: #f0ac54;
    font-family: MontserratBold;
  }

  .row-input {
    display: flex;
    flex-direction: row;
  }

  .frete {
    font-size: 28px;
    color: #ffffff;
    font-family: MontserratBold;
  }

  .row-valores {
    display: flex;
    flex-direction: row;
  }

  option {
    font-family: regular;
  }

  .valores-preco {
    font-size: 30px;
    color: #ffffff;
    margin-left: 0.4em;
    font-family: MontserratBold;
  }

  .excluir {
    font-size: 18px;
    color: #ffffff;
    font-family: Medio;
  }

  .row-localizacao {
    display: flex;
    flex-direction: row;
    font-size: 28px;
    color: #ffffff;
    justify-content: space-between;
    margin-left: 4em;
  }

  .row-val {
    display: flex;
    flex-direction: row;
    margin-left: 5.3em;

    font-family: MontserratBold;
  }

  .titulo-val {
    color: #ffffff;
    font-family: MontserratBold;
    font-size: 18px;
  }

  .valor-val {
    color: #34d231;
    font-size: 18px;
    padding-left: 2em;
    font-family: MontserratBold;
  }

  .valor-val1 {
    color: #34d231;
    font-size: 18px;
    padding-left: 0.8em;
    font-family: MontserratBold;
  }

  .column-valores {
    margin-left: 3em;
  }

  .valores-preco {
    margin-left: 5em;
  }

  .excluir {
    margin-top: 0.5em;
    margin-bottom: 5em;
    cursor: pointer;
  }

  .cell {
    display: none;
  }

  @media (max-width: 425px) {
    .cell {
      display: block;
    }

    .box-preta {
      width: 90%;
      background-color: #282828;
      border-radius: 0.6em;
      margin-left: 1.3em;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2em;
    }

    .excluir {
      padding-bottom: 1em;
      margin: 0em;
      width: 100%;
    }
    .excluirB {
      width: 90% !important;
    }

    .titulo-val {
      margin-left: 0em;
      font-size: 1.5em;
      padding-left: 0.8em;
    }

    .valor-val {
      font-size: 1.4em;
      padding-left: 1em;
    }

    .pc {
      display: none;
    }

    .nome-produto {
      padding: 0em;
      height: auto;
      padding-bottom: 2em;
      text-align: center;
      padding-top: 1em;
    }

    .row-val {
      margin: 0em;
    }
  }
`;

export { StyledBoxItemCarrinho };
