import styled from "styled-components";

const StyledPaginacao = styled.div`
  .pc {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
  }

  .button-mudar button {
    background-color: #282828;
    color: #f0ac54;
    font: 1em MontserratBold;
    border: none;
    border-radius: 0.2em;
    padding: 0.5em;
    margin: 0em 0.8em;
    cursor: pointer;
    user-select: none;
  }

  .button-mudar > button:hover {
    background-color: #202020;
  }

  .cell {
    display: none;
  }

  .numero-pagina {
    background-color: #282828;
    color: #f1b262;
    font: 1em Medio;
    border-radius: 0.2em;
    width: 2em;
    height: 2em;
    margin: 1em;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    user-select: none;
  }

  .numero-pagina:nth-child(${(props) => props.paginaAtual + 1}) {
    font-weight: bold;
  }

  .numero-pagina:hover {
    background-color: #202020;
  }

  @media (max-width: 425px) {
    .pc {
      display: none;
    }

    .cell {
      display: block;
    }

    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export { StyledPaginacao };
