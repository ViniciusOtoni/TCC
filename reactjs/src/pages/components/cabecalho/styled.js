import styled from 'styled-components';

import '../../index.css';

const StyledCabecalho = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    

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
        color: #F0AC54;
        font-size: 2em;
    }

    .pesquisa input {
        border-radius: 5em;
        width: 72em;
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
    z-index: 11;
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
    z-index: 11;
        
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
    z-index: 11;
    }
`


export { StyledCabecalho }
