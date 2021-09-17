import styled from 'styled-components';

import '../../index.css';



const StyledCabecalho = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    
  
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
        color: ${props => props.corLetra === 'branco' ? '#ffffff' : '#F0AC54'};
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
        font-family: MontserratBold; 
    
    }

    .input::placeholder {
        color: white;
       
        font-family: MontserratBold; 
        
    }

    .input:focus::-webkit-input-placeholder {
        color: transparent;
     }

    .login {
        color: ${props => props.corLetra === 'branco' ? '#ffffff' : '#F0AC54'};
        font-size: 2em;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        font-family: MontserratBold;
   
        
    }

    
    .carrinho {
        padding-top: 0.4em;
        padding-left: 0em;
        margin-right: 3.4em;
        position: relative;
        content: url(${props => props.corLetra === 'branco' ? '/assets/images/cBranco.svg' : '/assets/images/carrinho.svg'});
        width: 5em;
        height: 5em;
    }

    .entrega {
        color: #ffffff;
        font-size: 2em;
        font-family: MontserratBold;
    }
`


export { StyledCabecalho }
