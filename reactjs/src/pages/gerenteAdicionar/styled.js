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

    .alternating {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 3.5em;

        background-color: #282828;
    }

    .alternating > div {
        font-family: Medio;
        color: white;
        margin-left: 1em;
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


   .input-input {
       width: 22em;
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
        padding-right: 13.8em;
    }
    .topico2 {
        padding-right: 8.6em;
    }
    .topico3 {
        padding-right: 11.8em;
    }
    .topico4 {
        padding-right: 14.2em;
    }
    .topico5 {
        padding-right: 7.8em;
    }
    .topico6 {
        padding-right: 6.5em;
    }
    .topico7 {
        padding-right: 8em;
    }
    .topico8 {
        padding-right: 6.1em;
    }
    .topico9 {
        padding-right: 6.7em;
    }
    .topico10 {
        padding-right: 12.6em;
    }

    .new {
        display: flex;
        justify-content: right ;
    }


    @media(max-width: 425px){
        padding: 0em;
        
        main {
            width: 100%;
            margin: auto;
        }

        .alternating {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
           
           
           
            background-color: transparent;
        }

        .input-input {
            width: 100%;
            
        }

        .input {
            background-color: #333333;
            padding: 1em 1em !important;
           
          
        }

        .alternating > div {
            margin-left: 0px;
            width: 100%;
            padding: 0em 0em;
        }

        .topico1, .topico2, .topico3, .topico4, .topico5, .topico6, .topico7, .topico8, .topico9, .topico10  {
            background-color: #282828;
            
            padding: 1em 1em !important;
       
            
        }

        .line {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 3em 0em;

            background-color: transparent;
           
        }
        
        .line > div {
            padding: 0em;
            margin: 0em;

            width: 100%;
        }
       
        .topico2 {
           margin-top: .8em !important;
        }

        .topico3 {
            margin-top: 1.5em !important;
        }

        .topico4 {
            margin-top: 2.4em !important;
        }
       
        .topico5 {
          margin-top: 3em !important;
        }

        .topico6 {
            margin-top: 3.6em !important;
        }

        .topico7{
            margin-top: 4.3em !important;
        }

        .topico8 {
            margin-top: 5em !important;
        }

        .topico9 {
            margin-top: 5.8em !important;
        }

        .topico10{
            margin-top: 6.5em !important;
        }

        .footer {
            justify-content: center;
            margin-top: 10em;
        }
    } 
   

`

export { StyledGerenteAlterar }