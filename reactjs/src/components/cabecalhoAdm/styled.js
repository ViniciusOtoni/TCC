import styled from "styled-components";


const StyledCabecalhoAdm = styled.div `



@media(max-width:375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0em;
        padding: 0em;
        width: 23em;

        background-color: red;


        .agp {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0em;
            padding: 0em;
            margin-bottom: 1em;
        }
        
        .agp-input {
            
            display: flex;
            flex-direction: row;
            justify-content: normal;
        }

        .NV {
            width: 86%;
            margin-left: 2em;
        }

        .PE {
            width: 86% !important;
            margin-left: 2em;
        }

        .in {
            width: 20em !important;
        }

        .pedidos {
            width: 100%;
        }

        .column {
            display: flex;
            flex-direction: column;
            margin: 0em;
            padding: 0em;
            width: 100%;
        }
    }






    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.nulo === 'false' ? 'space-around' : props.bNulo === 'false' ? 'none' : 'space-between'};
    padding-left: 1em;
    padding-top: 1em;
    width: 80em;

    .column {
        display: flex;
        flex-direction: column;
        display: ${props => props.nulo === 'true'  ? 'none' : 'block' };  
    }

    .PE {
        width: 8.3em;
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

    .in {
        border-radius:0em;
         width: 30em;
    }


    .agp {
        display: flex;
        flex-direction: row;
    }


    .pedidos {
        display: ${props => props.nulob === true ? 'none' : props.nulo === 'true' ? 'none' : props.bNulo === 'true' ? 'none' : 'break' };
    }

    

    .input {
    display:  ${props => props.nulob === true ? 'none' : props.nulo === 'true' ? 'none' : props.bNulo === 'true' ? 'none' : 'block' };
   }

 .pesquisar {
    display:  ${props => props.nulob === true ? 'none' : props.nulo === 'true' ? 'none' : props.bNulo === 'true' ? 'none' : 'block' };
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
       display: ${props => props.nulob === true  ? 'none' : 'block' };  
       display: ${props => props.nulo === 'true'  ? 'none' : 'block' }; 
       display: ${props => props.bNulo === 'true'  ? 'none' : 'block' }; 
    } 

    .NV {
        display: ${props => props.bNulo === 'true'  ? 'block' : 'none' }; 
        margin-right: ${props => props.bNulo === 'true' ? '2em' : 'none'};
    }

    .nv {
        margin-right: ${props => props.bNulo === 'true' ? '2em' : 'none'};
    }

    
   



` 
export { StyledCabecalhoAdm }