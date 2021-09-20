import styled from "styled-components";

const StyledGerenteAdicionar = styled.div`
 display: flex;
    flex-direction: column;
    padding: 2em;
    height: 100vh;

   

    .content{
        display: flex;
        flex-direction: column;
       
        margin: 5em 0em;
    }

    .input {
    }

    .line{
        display: flex;
        flex-direction: row;
        align-items: center;


        height: 3.5em;
    }

    .line > div {
        font-family: Medio;
        color: white;
        margin-left: 1em;
    }


    .alternating{
        background-color: #282828;
    }

    .footer{
        display: flex;
        flex-direction: row;
    }

    .button{
        padding: .7em 2.5em;
    }

    .criar-item {
        margin-left: 2em;
    }

    .topico1 {
        padding-right: 8em;
    }
    .topico2 {
        padding-right: 3em;
    }
    .topico3 {
        padding-right: 6.4em;
    }
    .topico4 {
        padding-right: 8.5em;
    }
    .topico5 {
        padding-right: 2.2em;
    }
    .topico6 {
        padding-right: 1em;
    }
    .topico7 {
        padding-right: 1em;
    }
    .topico8 {
        padding-right: 1em;
    }
    .topico9 {
        padding-right: 1em;
    }
    .topico10 {
        padding-right: 7em;
    }
`

export { StyledGerenteAdicionar }