import styled from "styled-components";

const StyledCarrinho = styled.div `
    
    background-color: #333333;
     height:  100vh;
    
    

    .agrupamento-carrinho {
        display: flex;
        flex-direction: row;
        background-color:  #282828;
        border-radius: 1em;
        width: 95%;
        margin-left: 2em;
        align-items: center;
        padding: 4em;

    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .hr {
        border: solid 0.7px #C4C4C4;
        margin-right: 6.3em;
        margin-left: 4.3em;
        width: auto;
    }

    .logo img {
        width: 20em;
        height: 20em;
    }

    .logo {
        margin-left: 4em;
    }

    .titulo {
        color: #F0AC54;
        font-size: 64px;
        margin-top: 2em;
        margin-left: .7em;
        margin-bottom: 1em;
    }

    .texto {
        font-size: 64px;
        color: #ffffff;
        width: 9.4em;
        margin-left: 3em;
      
    }

    .botao  {
        margin-left: 7em;
        bottom: 26.5%;
        position: absolute;
        font-size: 26px;
        display: flex;
        align-items: center;
         justify-content: center;
         padding-top: .8em;
         padding-bottom: .8em;
         
         
    }

    
`

export { StyledCarrinho }