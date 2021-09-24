import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .principal {
        align-self: center;
        color: white;
        width: 95%;
    }

    main {
        width: 1240px;
        margin: auto;
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
       font-family: MontserratBold;
   }

   th {
       padding: 1em;
       text-align: left;
       font-size: 25px;
       font-family: MontserratBold;
   }

   .quantidade {
       text-align: center;
   }


   .last-item {
       text-align: center;
   }
    .voltar {
        color: white;
       
        border: none;
        border-radius: 5px;
      
    }

    .bottom-menu {
        display: flex;
        flex-direction: row;

        margin: 6em 0em;
        align-items: center;


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