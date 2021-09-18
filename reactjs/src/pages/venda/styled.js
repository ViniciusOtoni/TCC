import styled from "styled-components";

const StyledVenada = styled.div `
    display: flex;
    flex-direction: column;
  

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
`

export { StyledVenada }