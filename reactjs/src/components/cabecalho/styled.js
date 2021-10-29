import styled from "styled-components";

const StyledCabecalho = styled.div`
  .pc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;

    margin: auto;
    & * {
      z-index: 11;
    }
  }

  .logo-cabecalho img {
    width: 6em;
    height: 5em;
    padding-top: 0.4em;
    cursor: pointer;
  }

  .logo-cabecalho {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 3em;
  }

  .titulo {
    font-family: MontserratBold;
    font-size: 1.5em;
    color: ${(props) => (props.corLetra === "branco" ? "#ffffff" : "#F0AC54")};
    cursor: pointer;
  }

  .pesquisa {
    width: 30%;
    margin-bottom: 1em;
  }

  .pesquisa input {
    display: ${(props) => (props.corLetra === "nulo" ? "none" : "block")};
    position: relative;

    background-color: transparent;
    font-family: MontserratBold;
    color: white;

    border-radius: 5em;
    border: 2px solid #ffffff;

    width: 100%;
    height: 2.5em;

    padding: 0em 2.5em;

    text-decoration: none;
    outline: none;
    cursor: text;
  }

  .input::placeholder {
    color: white;

    font-family: MontserratBold;
  }

  .input:focus::-webkit-input-placeholder {
    color: transparent;
  }

  .lupa {
    display: ${(props) => (props.corLetra === "nulo" ? "none" : "block")};
    position: relative;
    top: 1.5em;
    left: 0.8em;
    width: 1em;
    height: 1em;

    z-index: 12;
  }

  .login {
    color: ${(props) => (props.corLetra === "branco" ? "#ffffff" : "#F0AC54")};
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    font-family: MontserratBold;
    display: ${(props) => (props.corLetra === "nulo" ? "none" : "block")};

    cursor: pointer;
  }

  .user-login {
    color: ${(props) => (props.corLetra === "branco" ? "#ffffff" : "#F0AC54")};
    display: ${(props) => (props.corLetra === "nulo" ? "none" : "block")};
    font-family: MontserratBold;
    font-size: 1.5em;
  }

  .carrinho {
    padding-top: 0.4em;
    padding-left: 0em;
    margin-right: 3.4em;
    position: relative;
    content: url(${(props) =>
      props.corLetra === "branco"
        ? "/assets/images/cBranco.svg"
        : "/assets/images/carrinho.svg"});
    width: 4em;
    height: 4em;
    display: ${(props) => (props.corLetra === "nulo" ? "none" : "block")};

    cursor: pointer;
  }

  .cell {
    display: none;
  }

  .entrega {
    color: #ffffff;
    font-size: 1.5em;
    font-family: MontserratBold;
    display: ${(props) => (props.corLetra === "branco" ? "block" : "none")};
    cursor: pointer;
  }

  hr {
    margin-left: 3.4em;
    margin-right: 3.4em;
    border-color: ${(props) =>
      props.corLetra === "nulo" ? "#F0AC54" : "#FFFFFF"};
    display: ${(props) => (props.corLetra === "branco" ? "none" : "block")};
  }

  .row-user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20em;
  }

  .user-image img {
    border-radius: 2em;
    width: 3em;
    height: 3em;
  }

  .user-image {
    padding-right: 1em;
    display: ${(props) => (props.corLetra === "nulo" ? "none" : "block")};
  }

  @media (max-width: 425px) {
    .pc {
      display: none;
    }

    .cell {
      display: block;
      flex-direction: row;
      display: flex;
      width: auto;
      font-size: 0.8em;
      align-items: center;
      margin: 0em;
      padding: 0.3em;
      justify-content: space-around;
    }

    .carrinho {
      width: auto;
      height: 2em;
      padding: 0em;
      content: url("/assets/images/carrinho.svg");
      margin-right: 1.3em;
      display: ${(props) => (props.corLetra === "nulo" ? "block" : "block")};
    }

    .entrega {
      display: ${(props) => (props.corLetra === "branco" ? "block" : "none")};
      color: #f0ac54;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .agp-direita {
      display: flex;
      flex-direction: row;
      align-self: center;
      justify-content: space-around;
    }
    .lupa img {
      height: 1.8em;
      width: auto;
    }
    .login {
      color: #f0ac54;
      display: ${(props) => (props.corLetra === "nulo" ? "block" : "block")};
    }

    .logo-cabecalho {
      padding-right: 3em;
    }

    hr {
      width: 100%;
      border-color: #f0ac54;
      margin: 0em;
      display: ${(props) => (props.corLetra === "branco" ? "block" : "block")};
    }
  }

  @media (max-width: 1440px) {
    .user-login {
      font-size: 1.1em;
    }

    .entrega {
      font-size: 1.4em;
    }
  }
`;

export { StyledCabecalho };
