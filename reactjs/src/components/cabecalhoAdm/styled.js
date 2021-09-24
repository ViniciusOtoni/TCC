import styled from "styled-components";


const StyledCabecalhoAdm = styled.div `


    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.nulo === 'false' ? 'space-around' : props.bNulo === 'false' ? 'none' : 'space-between'};
    padding-left: 1em;
    padding-top: 1em;
    

    .column {
        display: flex;
        flex-direction: column;
        display: ${props => props.nulo === 'true'  ? 'none' : 'block' };  
        padding-right: 5em;
    }

    .PE {
        width: 8.3em;
        display: ${props => props.bNulo === true ? 'none' : 'block'};
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
    
       display: ${props => props.nulob === true  ? 'none' : 'block' };  
       display: ${props => props.nulo === 'true'  ? 'none' : 'block' }; 
       display: ${props => props.bNulo === 'true'  ? 'none' : 'block' }; 
    } 

 


    @media(max-width:375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0em;
        padding: 0em;
       

        

        .agp {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: 0em;
            padding: 0em;
        }

        .logo {
            padding-top: 2em;
        }
        
        .input {
           
        }

       

        .agp-input {
            
            display: flex;
            flex-direction: row;
            justify-content: normal;
        }

        

    .NV {
        width: 85%;
        margin-left: 2em;
    }


       

        .PE {
            width: 87%;
            margin-left: 1.8em;
            margin-top: 1em;
        }

        .in {
            width: 20em;
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
    justify-content: ${props => props.nulo === 'true' ? 'none' : 'space-around'};
    padding-left: 1em;
    padding-top: 1em;

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
       display: ${props => props.nulob === true  ? 'none' : 'block' };  
       display: ${props => props.nulo === 'true'  ? 'none' : 'block' };   
    } 



` 
export { StyledCabecalhoAdm }