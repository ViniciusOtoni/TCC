import styled from "styled-components";


const Conteudo = styled.div`
    background-color: #333333;
    


    .pc {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:  1240px; 
        margin: auto;
        height: 40em;
    }

    .title{
        font-family: MontserratBold;
        font-size: 3em;
        color: white;

        padding-right: 6em;
        margin-bottom: .5em;
    }

    .cell {
        display: none;
    }

    @media(max-width:375px) {
        .pc {
            display: none;
        }

        .cell {
            display: block;
        }
        width: 100%;
    
        .align-button {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 1em;
        }
        .gren {
            width: 90%;
            
    
        }
    }



`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #282828;

    width: 50em;
    height: 25em;
    border-radius: 1.5em;

    hr {
        border: 1px solid white;
        width: 90%;
        margin-bottom: 2em;
    }

    .align-content{
        display: flex;
        justify-content: space-around;
        flex-direction: row;

        width: 50em;
        height: 18em;
        padding: 2.5em;
    }

    .content-images{
        display: flex;
        flex-direction: row;

        margin-top: 1em;

        height: 15em;
    }

    .images{
        display: flex;
        flex-direction: column;

        margin: 3em 1em 0em 0em;
    }

    .image-main > img{
        width: 10em;
        height: 10em;
    }
    .images > img {
        width: 3em;
        height: 3em;
        padding: 0.5em 0em;

    }

    .align-stars{
        margin-bottom: 1em;
    }

    .star{
        width: 1.5em;
        margin-right: .5em;
    }

    .align-button{
        display: flex;
        flex-direction: column;
    }

    .text{
        font-family: MontserratBold;
        font-size: 1em;
        color: white;
    }

    .preco{
        font-family: MontserratBold;
        font-size: 2em;
        color: white;
        margin: .3em 0em;
    }

    .frete{
        font-family: MontserratBold;
        font-size: 1em;
        color: white;
        margin: .8em 0em .3em 0em;
    }

    @media(max-width:375px) {

        height: auto;
        .pc {
            display: none;
        }

        .cell {
            display: block;
        }

        width: 90%;
        margin-left: 1em;

        .align-content {
            padding: 0em;
            margin: 0em;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 10em;
            margin-bottom: 10em;
        }

        .titulo {
            font-size: 2em;
            color: #ffffff;
            font-family: MontserratBold;
            padding-left: .4em;
        }

        .preco {
            color:#F0AC54;
            font-size: 1.3em;
            padding-left: .7em;
        }
        .frete {
            text-align: center;
            padding-top: 1em;
        }

        .text {
            padding-left: 1em;
            padding-top: 1em;
            width: 12em;
        }

        .image-main {
            width: auto;
            height: 12em;
        }

        .align-stars {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: 1em;
        }

        .titulo1 {
            text-align: center;
            font-size: 2em;
            color: #ffffff;
            font-family: MontserratBold;
           padding-bottom: 1em;

          
        }

        
    }
`

export { Content, Conteudo }