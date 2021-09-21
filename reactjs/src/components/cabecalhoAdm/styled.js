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

    .agp {
        display: flex;
        flex-direction: row;
    }

    .pedidos {
        display: ${props => props.nulo === 'true'  ? 'none' : 'block' };
    }


    .game {
        color: #F0AC54;
        font-family: MontserratBold;
        font-size: 2em;
        margin-top: .8em;
    }

    .pesquisar button{
       background-color: #F0AC54;
       border: none;
       width: 4em;
       height: 2.4em;
       background-image: url('/assets/images/Vector (8).svg');
       background-repeat: no-repeat;
       background-position-x: center;
       background-position-y: center;
       margin-top: .3em;
        
    }

    
   

`

export { StyledCabecalhoAdm }