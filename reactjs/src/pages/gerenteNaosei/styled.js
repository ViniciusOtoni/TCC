import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .principal {
        align-self: center;
        color: white;
        width: 95%;
    }

    .titulos {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }

   .table {
       margin: 3em 0em;
   }

    .Linha-1, .Linha-2 {
        display: flex;
        flex-direction: row;
        color: white;
    }

    .Linha-1 {
        padding: 1.2em;
        background-color: #282828;
        justify-content: space-between;
    }

    .Linha-2 {
        padding: 1.2em;
        background-color: #333333;
        justify-content: space-between;
    }

    .voltar {
        color: white;
        padding: 1em;
        border: none;
        background-color: #D9534F;
    }

    .bottom-menu {
        display: flex;
        flex-direction: row;

        margin: 6em 0em;


    }

    .navigation {
        display: flex;
        flex-direction: row;

        align-self: center;
        color: #F0AC54;
    }

    .back {
        background-color: #282828;
        padding: .6em;

        border-radius: 5px;
        margin-right: 1em;
    }

    .page {
        background-color: #282828;
        padding: .6em 1em;
        border-radius: 5px;

        margin: 0em .4em;
    }

    .next {
        background-color: #282828;
        padding: .6em 1em;
        border-radius: 5px;
        margin-left: 1em;
    }
`

export { Container };