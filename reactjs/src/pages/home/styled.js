import styled  from "styled-components";



const StyledConteudo = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #333333;
    position: relative;
    & * {z-index : 11;}
  

    main  {
    width: 1340px;
    margin: auto;

    }

    .bolota {
        max-width: 1440px;
        margin: auto;
    }

    .texto-melhor {
     color: white;
     font-size: 3.4em;
     text-align: center;

    }

    .saiba-mais {
        margin-top: 3em;
        
    }
    

    .agp-melhor {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 6em;
    }

    .logo img {
        width: 30em;
        height: 30em;
    }
    .bolota {
        position:absolute;
        top: -33em;
        right: 0em;
        z-index: -1;
        
        overflow: hidden;
        width: 60%;
        height: 100%;
    }
  

    
  

    .row {
        display: flex;
        flex-direction: row;
        margin-top: 8em;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6em;
    }

    .agp-jogo {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 4em;
    }

    .titulo {
        font-family: ExtraBold;
        font-size: 48px;
        color: white;

        padding-left: 1em;
       
    }

   .barra { 
       border: 3px solid #F0AC54;
        width: 19em;
        margin-left: 3em;
        margin-bottom: 4em;
   }

   .faixa3 {
       display: flex;
       flex-direction: column;
       justify-content: space-evenly;
       align-self: center;
       margin-top: 7em;
   }

   .column {
       display: flex;
       flex-direction: column;
   }

   .a1 {
       margin-right: 12em;
   }

   .a2 {
       margin-right: 12em;
   }

   .row2 {
       display: flex;
       flex-direction: row;
       justify-content: center;
   }

   .a4 {
       margin-right: 12em;
   }
   

   
    
`

const Bolota = styled.div`


position: absolute;
    top: -30em;
    right: 0em;
    z-index: 11;
    overflow: hidden;
    width: 60%;
    height: 100%;
`

export { StyledConteudo, Bolota }