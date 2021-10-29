import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
  

   main {
       width: 1240px;
       margin: auto;
   }

    .nomeEmpresa {
        color: #F0AC54;
        font-weight: bolder;
    }

    .cabecalho {
        display: flex;
        flex-direction: row;

        margin: 2em
    }

    h1 {
        font-size: 38px;
        font-family: MontserratBold;
    }

    h2 {
        font-size: 19px;
        font-family: Medio;
    }

    .textos{
        color: white;
        margin-left: 2.5em;
    }

    .textos div {
        font-family: Medio;
    }

    .barra {

        width: 95%;
        border: 2px solid white;
        margin: 4em 0em
    }

    .Secondh2 {
        font-size: 19px;
        width: 1150px;
        font-family: Medio;
        margin-bottom: 2em;
    }

    .Thirdh2 {
        width: 1100px;
        margin: 2em 0em;
    }

    .Fourthh2 {
        width: 1080px;
    }

    .fifthh2 {
        width: 1140px;

        margin-bottom: 5em;
    }

    @media(max-width:425px) {
        main {
            width: 100%;
        }

        .Secondh2 {
            width: 100%;
            font-size: 1em;
            padding: 0em;
            margin: 0em;
        }

        .Thirdh2 {
            width: 100%;
            font-size: 1em;
            padding: 0em;
            margin: 0em;
        }

        .Fourthh2 {
            width: 100%;
            font-size: 1em;
            padding: 0em;
            margin: 0em;
        }

        .fifthh2 {
            width: 100%; 
            font-size: 1em;
            padding: 0em;
            margin: 0em;
            
        }

        .textos {
            margin: 1em;
            text-align: center;
          
        }
    }
`

export { Container };