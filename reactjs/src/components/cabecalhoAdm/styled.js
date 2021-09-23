import styled from "styled-components";


const StyledCabecalhoAdm = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.nulo === 'true' ? 'none' : 'space-around'};
    padding-left: 1em;
    padding-top: 1em;

    .column {
        display: flex;
        flex-direction: column;
        display: ${props => props.nulo === 'true'  ? 'none' : 'block' };  
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
        display: ${props => props.nulob === true ? 'none' : props.nulo === 'true' ? 'none' : props.bNulo === true ? 'none' : 'break' };
      
    }

    

    .input {
    display:  ${props => props.nulob === true ? 'none' : props.nulo === 'true' ? 'none' : 'block' };
   }

 .pesquisar {
    display:  ${props => props.nulob === true ? 'none' : props.nulo === 'true' ? 'none' : 'block' };
   }

   

    .game {
        color: #F0AC54;
        font-family: MontserratBold;
        font-size: 2em;
        margin-top: .8em;
    }
    
    .pesquisar button {
       background-color: #F0AC54;
       border: none;
       width: 4em;
       height: 2.4em;
       background-image: url('/assets/images/Vector (8).svg');
       background-repeat: no-repeat;
       background-position-x: center;
       background-position-y: center;
       display: ${props => props.nulob === true  ? 'none' : 'block'};  
       display: ${props => props.nulo === 'true'  ? 'none' : 'block'};   
    }

    @media(max-width:375px) {
       
       
    }
` 
export { StyledCabecalhoAdm }