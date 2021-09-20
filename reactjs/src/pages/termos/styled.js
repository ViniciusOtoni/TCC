import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
  

   

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
        font-size: 48px;
    }

    h2 {
        font-size: 36px;
    }

    .textos{
        color: white;

        margin-left: 2.5em;
    }

    .barra {

        width: 95%;
        border: 2px solid white;
        margin: 4em 0em
    }

    .Secondh2 {
        font-size: 36px;
        width: 1150px;

        margin-bottom: 5em;
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
`

export { Container };