import styled from 'styled-components';

import { Cor } from './index.js';

const StyledCabecalho = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    color: ${props => Cor(props.color)};
  
    margin: auto;
     & * {z-index : 11;}

    .logo-cabecalho  img {
        width: 6em;
        height: 5em;
        padding-top: 0.4em;
    }
    
    .logo-cabecalho {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 3em;
    }

    .titulo {
        font-family: MontserratBold;
        font-size: 2em;
        color: #F0AC54;
    }

    .pesquisa{
        width: 50%;
    }

    .pesquisa input {
        border-radius: 5em;
        width: 100%;
        height: 3em;
        text-decoration: none;
        border: 2px solid #ffffff;
        background-color: rgba(0,0,0,0);
        margin-right: 0em;
        color: #ffffff;
        background-image: url('/assets/images/lupa.svg');
        background-repeat: no-repeat;
        background-position: left;
        background-position-x: 1em;
        padding-left: 3.2em;
        outline: none;
        position: relative;
    
    }

    .input::placeholder {
        color: white;
        font-size: 1em;
        
        
    }

    .input:focus::-webkit-input-placeholder {
        color: transparent;
     }

    .login {
        color: #F0AC54;
        font-size: 2em;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        font-family: MontserratBold;
   
        
    }

    .carrinho img {
        width: 1.5em;
        height: 1.5em;
    }
    .carrinho {
        padding-top: 0.4em;
        padding-left: 2em;
        margin-right: 3em;
        position: relative;
        
    }
`


export { StyledCabecalho }
