import styled from "styled-components";

const Vizualizar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    height: 100vh;

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        justify-content: right;
    }

    .align-header{
        display: flex;
        flex-direction: row;
    }

    .logo{

    }

    .title{
        font-family: MontserratBold;
        color: #F0AC54;
        font-size: 1.5em;
        margin-top: .5em;
    }

    .content{
        display: flex;
        flex-direction: column;

        margin: 5em 0em;
    }

    .line{
        display: flex;
        flex-direction: row;
        align-items: center;


        height: 2em;
    }

    .line > div {
        font-family: Medio;
        color: white;
        margin-left: 1em;
    }


    .alternating{
        background-color: #282828;
    }

    

    .button{
        padding: .7em 2.5em;
    }


    @media(max-width: 375px) {
        padding: 0px;
        
        main {
            width: 100%;
            margin: auto;

            background-color: #333333;
        }
        
        .alternating {
            padding: 1.7em 0em;

        }

      

      

        

        .line {
            padding: 1.7em 0em;
            font-size: 20px;
        }

        .header {
            display: flex;
            flex-direction: row;
            
            justify-content: center;

            
        }

        .content {
            margin: 2em 0em;
        }

        .button-header {
           width: 70%;
           padding: 1em 0em;
           border-radius: 4px;
        }

        .footer {
            display: flex;
            flex-direction: row;
            justify-content: center;

            background-color: #282828;
            padding: 2em;
        }

        .button{
            border-radius: 4px;
            padding: 1em 3.5em;
        }
       
       
    }
    
`

export { Vizualizar }