import styled from 'styled-components'

const Container = styled.div`
    background-color: #333333;

    .textos {
        display: flex;
        flex-direction: column;
        
        
        text-align: center;

        color: white;
      
    }

    h1 {
        margin-top: 3em;
        font-size: 48px;

        width: 900px;
        align-self: center;
    }

    p {
      
        font-size: 26px;
        width: 830px;
        align-self: center;
    }

    .ultimoP {
        margin-bottom: 5em;
    }
`


export { Container };