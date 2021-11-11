import styled from "styled-components";

const Conteudo = styled.div`
  background-color: #333333;

  .pc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1240px;
    margin: auto;
    height: 40em;
  }

  .title {
    font-family: MontserratBold;
    font-size: 3em;
    color: white;
    margin-bottom: 0.5em;
    display: flex;
    align-self: flex-start;
    padding-left: 2em;
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
    width: 100%;
    margin-top: 2em;

    .align-button {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1em;
    }
    .gren {
      width: 90%;
    }
    hr {
      display: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #282828;

  height: 25em;
  border-radius: 1.5em;

  hr {
    border: 1px solid white;
    width: 90%;
    margin-bottom: -2em;
  }

  .align-content {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 18em;
    padding: 2.5em;
  }

  .align-content > div {
    margin: 0em 5em;
  }

  .content-images {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
  }

  .images {
    display: flex;
    flex-direction: column;

    margin: 3em 2em 0em 0em;
  }

  .image-main {
    width: 15em;
    height: 18em;
  }
  .images img {
    width: 6em;
    height: 5em;
    padding: 0.5em 0em;
  }

  .align-stars {
    margin-bottom: 1em;
  }

  .star {
    width: 1.5em;
    margin-right: 0.5em;
  }

  .align-button {
    display: flex;
    flex-direction: column;
  }

  .text {
    font-family: MontserratBold;
    font-size: 1em;
    color: white;
  }

  .preco {
    font-family: MontserratBold;
    font-size: 2em;
    color: white;
    margin: 0.3em 0em;
  }

  .descProduto {
    width: 90% !important;
    font-family: Medio;
    font-size: 1em;
    color: white;
    padding-left: 3em;
    padding-bottom: 1em;
  }

  
 

  .frete {
    font-family: MontserratBold;
    font-size: 1em;
    color: white;
    margin: 0.8em 0em 0.3em 0em;
  }

  @media (max-width: 425px) {
    height: auto;
    padding-top: 1em;
    padding-bottom: 1em;

    .pc {
      display: none;
    }

    .cell {
      display: block;
    }

    width: 90%;
    margin-left: 1em;

    .align-content {
      padding: 0em;
      margin: 0em;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 10em;
      margin-bottom: 10em;
    }

    .titulo {
      font-size: 2em;
      color: #ffffff;
      font-family: MontserratBold;
      padding-left: 0.4em;
    }

    .align-content > div {
      margin: 0em;
    }

    .preco {
      color: #f0ac54;
      font-size: 1.3em;
      padding-left: 0.7em;
    }
    .frete {
      text-align: center;
      padding-top: 1em;
    }

    .text {
      padding-left: 1em;
      padding-top: 1em;
      width: 12em;
    }

    .image-main {
      width: 12em;
      height: 12em;
      display: flex;
      align-self: center;
    }

    .align-stars {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 1em;
    }

    .titulo1 {
      text-align: center;
      font-size: 2em;
      color: #ffffff;
      font-family: MontserratBold;
      padding-bottom: 1em;
    }
  }
`;

export { Content, Conteudo };
