import styled from "styled-components";

const RodaPe = styled.div`
  .pc {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }

  body {
    margin: 0px;
  }

  * {
    box-sizing: border-box;
  }

  .pc {
    display: flex;
    flex-direction: column;
  }

  .section1 {
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: #dfa04e;

    font-family: sans-serif;
    font-weight: 800;

    height: 5em;
  }

  .alinhar-texto {
    display: flex;
    flex-direction: row;
  }

  .section2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    background-color: #f0ac54;

    font-family: sans-serif;
    font-weight: 500;

    align-items: center;
  }

  .item,
  a,
  a:visited {
    font-family: Medio;
    margin: 0em 3em;
    text-decoration: none;
    color: #000;
  }

  .item-header {
    font-family: MontserratBold;
    margin: 0em 5em;
  }

  .item:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .item-image {
    font-family: Medio;
  }

  .align {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .align-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 3em;
  }

  .align-title > div {
    font-family: MontserratBold;
  }

  .title-image {
    height: 5em;
    width: 5em;
  }

  .align-itens-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 9.3em;
    margin-left: 2em;
  }

  .align-itens-image img:hover {
    cursor: pointer;
  }

  .item-image {
    margin: 0.5em 0em;
  }

  .item-image:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  hr {
    border: 0.1px solid #333333;
    width: 100%;
  }

  .section3 {
    background-color: #f0ac54;

    font-size: 0.9em;
    line-height: 1.5em;

    height: 13em;
  }

  .section3 > div {
    font-family: Medio;
    padding-left: 1.5em;
    padding-top: 1.5em;
    width: 75em;
  }
  .cell {
    display: none;
  }

  @media (max-width: 425px) {
    .pc {
      display: none;
    }

    .cell {
      display: block;
    }

    header {
      width: 100%;
      background-color: #dfa04e;
    }

    .align-title {
      display: flex;
      flex-direction: row;
      justify-content: left;
    }

    .fxa1 {
      background-color: #f0ac54;
      width: 100%;
      padding: 2em;
      display: flex;
      flex-direction: column;
    }
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .topico {
      font-family: Medio;
      padding-top: 2em;
    }

    .valor-topico {
      font-family: Medio;
      padding-top: 2em;
      padding-left: 0.4em;
    }
    .regiao img {
      padding-top: 2em;
      padding-left: 1em;
    }
    .img1 img {
      padding-top: 1em;
      padding-right: 0.5em;
    }
  }
`;

export { RodaPe };
