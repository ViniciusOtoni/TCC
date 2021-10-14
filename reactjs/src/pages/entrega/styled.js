import styled  from "styled-components";

const StyledEntrega = styled.div `

background-color: #333333;
     height:  100vh;
    
    main {
        width: 1240px;
        margin: auto;
    }

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
        font-family: MontserratBold;
    }

    .texto {
        font-size: 44px;
        color: #ffffff;
        margin-left: 3.8em;
        text-align: center;
        font-family: MontserratBold;
    }

.button {
    margin-left: 8.4em;
    margin-top: 1.4em;
    text-decoration: none;
}

.style {
    height: 3em;
    width:27em;
    padding-top:0.7em;
}

@media(max-width:425px) {
    main {
        width: 100%;
    }

    .agrupamento-carrinho {
        width: 100%;
        margin: 0em;
        padding: 0em;
        position: relative;
        padding-bottom: 5em;
        height: 100%;
    }

    .logo {
        margin: 0em;
        padding: 0em;
    }

    .logo img {
        width: auto;
        height: 8em;
        padding: 1em;
    }

    .texto {
        padding: 0em;
        margin: 0em;
        font-size: 1em;
        text-align: center;
        align-self: center;
        display: flex;
    }

    .column {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .style {
    height: 3em;
    padding-bottom: .7em;
    text-align: center;
    width: 90%;
}

.button {
    margin: 0em;
    padding: 0em;
    position: absolute;
    bottom: 0em;
    width: 90%;
    left: 2em;
    padding-bottom: 1em;
}

.titulo {
    font-size: 1.4em;
    margin: 0em;
    padding: 0em;
    text-align: center;
    margin-bottom: .3em;
    margin-top: 2em;
}
 
}
    

`

export { StyledEntrega }