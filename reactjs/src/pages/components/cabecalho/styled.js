import styled from 'styled-components';

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
        font-family: font1;
        font-size: 2em;
        color: #F0AC54;
    }

    .pesquisa input {
        border-radius: 5em;
        width: 72em;
        height: 2em;
        text-decoration: none;
        border: 2px solid #ffffff;
        background-color: rgba(0,0,0,0);
        margin-right: 0em;
        color: #ffffff;
        
    }

    .input::placeholder {
        color: white;
        font-size: 1em;
        padding-left: 1em;
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
    }

    .carrinho img {
        width: 1.5em;
        height: 1.5em;
    }
    .carrinho {
        padding-top: 0.4em;
        padding-left: 2em;
        margin-right: 3em;
    }
`


export { StyledCabecalho }
