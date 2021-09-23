import styled from 'styled-components'

const Container = styled.div`
    background-color: #333333;

    .textos {
        display: flex;
        flex-direction: column;
        
        
        text-align: center;

        color: white;
      
    }

    main {
        width: 1240px;
        margin: auto;
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

    @media(max-width: 375px) {
        main {
            width: 100%;
            margin: auto;
        }

        p, h1 {
            width: auto;
            
        }

        h1 {
           font-size: 20px;
           margin: 1em 1em;
        }

        .ultimoP {
            margin: 0em 2em;
        }

        p {
            text-align: center;
            font-size: 16px;
            margin: 2em 2.5em;
        }

        .lastP {
            width: 20em;
            font-family: 16px;
        }
    }
`


export { Container };