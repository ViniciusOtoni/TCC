import styled from "styled-components";


const StyledCabecalhoAdm = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .column {
        display: flex;
        flex-direction: column;
    }
    .logo {
        padding-top: 1em;
    }

    .agp-input {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .pesquisar button{
       background-color: #F0AC54;
       border: none;
       width: 4em;
       height: 2.5em;
       background-image: url('/assets/images/Vector (8).svg');
       background-repeat: no-repeat;
       background-position-x: center;
       background-position-y: center;

    }

   

`

export { StyledCabecalhoAdm }