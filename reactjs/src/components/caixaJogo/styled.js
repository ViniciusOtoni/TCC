import styled from "styled-components";

const StyledJogo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282828;
  justify-content: center;
  align-items: center;
  width: 15em;
  margin: 1em;
  margin-left: 2.97em;
  height: 25em;
  position: relative;

  .row1 {
    display: flex;
    flex-direction: row;
  }

  .nome-jogo {
    color: white;
    width: 10em;
    text-align: center;
    padding-bottom: 0em;
    font: 1.2em MontserratBold;
  }

  .preco {
    color: white;

    padding-bottom: 0.2em;
    font: 1.5em MontserratBold;
  }

  .imagem-jogo img {
    width: 11em;
    height: 11em;
  }

  .imagem-jogo {
    padding-bottom: 0em;
  }

  .absolute {
    position: absolute;
    left: 2.3em;
    bottom: 1em;
  }

  .avaliacao:hover {
  }

  @media (max-width: 375px) {
    margin: 0em;
  }
`;

export { StyledJogo };
