import styled from "styled-components";

const StyledVenada = styled.div `
   


    .a {
         width: 1240px;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
    }

    .row-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1.9em;
        margin-bottom: 1em;
    }

    .wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 59em;
        align-self: center;
    }

    

    .ordem {
        color: #ffffff;
        font: 1.2em MontserratBold;
        padding-right: 0.7em;
    }

    .select-ordem select {
        background-color: #ffffff;
        font: 1.2em MontserratBold;
        border: none;
        text-decoration: none;
    }

    .bottom {
        margin-bottom: 1em;
        margin-top: 3em;
    }

    .pag {
        margin-top: 3em;
        margin-bottom: 3em;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    @media(max-width:375px) {
        margin: 0em;
        padding: 0em;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 100%;
        }

        .a {
            width: 100%;
            padding: 0em;
            margin: 0em;
        }

        .ordem {
            padding-left: 2em;
        }

        .row-button {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .select-ordem {
            padding-right: 2em;
        }

        .pag {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 2em;
       
        }
     
}
`

export { StyledVenada }