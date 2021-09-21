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

   table {
        margin-top: 4em;
        width: 1200px;

        border-collapse: collapse;
    }

   

   .linha-1 {
       background-color: #282828;
       
   }

   .linha-2 {
       background-color: #333333;
   }

   td {
       text-align: left;
       padding: 1em 3.5em;
   }

   th {
       padding: 1em;
       text-align: left;
       font-size: 25px;
   }

   .quantidade {
       text-align: center;
   }


   .last-item {
       text-align: center;
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
        padding: .6em 1em;

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