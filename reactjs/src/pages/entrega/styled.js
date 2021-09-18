import styled  from "styled-components";

const StyledEntrega = styled.div `

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
        justify-content: center;
        align-items: center;
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
        margin-left: 3.8em;
    }

.button {
    margin-left: 8.4em;
    margin-top: 1.4em;
}
    

`

export { StyledEntrega }