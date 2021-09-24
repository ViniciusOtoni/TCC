import styled from "styled-components";

const StyledGerenteAlterar = styled.div`

display: flex;
    flex-direction: column;
    padding: 2em;
   

    main {
        width: 1240px;
        margin: auto;
    }
   

    .content{
        display: flex;
        flex-direction: column;
       
        margin: 5em 0em;
    }

    .input {
        width: 22em;
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
        margin-bottom: 4em;
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

    .new {
        display: flex;
        justify-content: right ;
    }

    @media(max-width: 375px){
        display: flex;
        flex-direction: column;

        margin: auto;
        padding: 0px;


        main{
            width: 370px;
        }

        .line{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            margin: .2em 0em;

            height: 6em;
            width: 23em;
        }

        .alternating {
            display: flex;
            flex-direction: column;
        }

        .topico1 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico2 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico3 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico4 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico5 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico6 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico7 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico8 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico9 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }
        .topico10 {
            padding-right: 0px;
            padding: 0.8em 0em;
        }

        .input {
            width: 25em;
        }
    
        .footer{
            display: flex;
            align-items: center;
            justify-content: center;

            width: 23em;
        }
    }

`

export { StyledGerenteAlterar }