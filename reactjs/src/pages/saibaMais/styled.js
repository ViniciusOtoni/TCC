import styled from 'styled-components'

const Container = styled.div`
    background-color: #333333;

    main {
        width: 1240px;
        margin: auto;
    }

    .textos {
        display: flex;
        flex-direction: column;
        
        
        text-align: center;

        color: white;
      
    }

    h1 {
        margin-top: 3em;
        font-size: 48px;
        font-family: MontserratBold;
        width: 900px;
        align-self: center;
    }

    p {
        font-family: Medio;
        font-size: 26px;
        width: 830px;
        align-self: center;
    }

    .ultimoP {
        margin-bottom: 5em;
    }

    @media(max-width: 425px) {
        main {
            width: 100%;
            margin: auto;
        }

        .textos {
            padding: 0em 1.2em;
        }

        h1, p {
            width: 100%;
            margin: 2em 0em;
        }

        h1 {
            font-size: 22px;
        }

        p {
            font-size: 18px;
        }
    }
`


export { Container };