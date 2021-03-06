import styled from "styled-components";

const StyledCabecalhoAdm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.nulo === "false"
      ? "space-around"
      : props.bNulo === "false"
      ? "none"
      : "space-between"};
  padding-left: 1em;
  padding-top: 1em;

  .column {
    display: flex;
    flex-direction: column;
    display: ${(props) => (props.nulo === "true" ? "none" : "block")};
    padding-right: 5em;
  }

  .PE {
    width: 8.3em;
    display: ${(props) => (props.bNulo === true ? "none" : "block")};
  }

  .logo {
    padding-top: 1em;
  }

  .agp-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .in {
    border-radius: 0em;
    width: 30em;
  }

  .agp {
    display: flex;
    flex-direction: row;
  }

  .pedidos {
    display: ${(props) =>
      props.nulob === true
        ? "none"
        : props.nulo === "true"
        ? "none"
        : props.bNulo === "true"
        ? "none"
        : "break"};
  }

  .input {
    display: ${(props) =>
      props.nulob === true
        ? "none"
        : props.nulo === "true"
        ? "none"
        : props.bNulo === "true"
        ? "none"
        : "block"};
  }

  .pesquisar {
    display: ${(props) =>
      props.nulob === true
        ? "none"
        : props.nulo === "true"
        ? "none"
        : props.bNulo === "true"
        ? "none"
        : "block"};
  }

  .pesquisar > button > img {
    width: 2em;
  }

  .game {
    color: #f0ac54;
    font-family: MontserratBold;
    font-size: 2em;
    margin-top: 0.8em;
  }

  .pesquisar button {
    background-color: #f0ac54;
    border: none;
    width: 4em;
    height: 2.4em;

    display: ${(props) => (props.nulob === true ? "none" : "block")};
    display: ${(props) => (props.nulo === "true" ? "none" : "block")};
    display: ${(props) => (props.bNulo === "true" ? "none" : "block")};
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0em;
    padding: 0em;

    .agp {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0em;
      padding: 0em;
    }

    .logo {
      padding-top: 2em;
    }

    .input {
    }

    .agp-input {
      display: flex;
      flex-direction: row;
      justify-content: normal;
    }

    .NV {
      width: 85%;
      margin-left: 2em;
    }

    .NV {
      display: ${(props) => (props.nulo === "true" ? "none" : "block")};
    }

    .PE {
      width: 87%;
      margin-left: 1.8em;
      margin-top: 1em;
    }

    .in {
      width: 20em;
    }

    .pedidos {
      width: 100%;
    }

    .column {
      display: flex;
      flex-direction: column;
      margin: 0em;
      padding: 0em;
      width: 100%;
    }

    a {
      text-decoration: none;
    }
  }
`;
export { StyledCabecalhoAdm };
