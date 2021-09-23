import styled from "styled-components";

const StyledCarrinhoItem = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #333333;
   

    

    .cabecalho {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .itens-direita {
        display: flex;
        flex-direction: row;
        
    }

    .preco {
        font-size: 24px;
        color: #F0AC54;
        margin-right: 2em;
        font-family: MontserratBold;
        margin-top: 2em;
        margin-right: 5em;

    }
    .quantidade {
        font-size: 24px;
        color: #F0AC54;
        margin-right: 6.5em;
        font-family: MontserratBold;
        margin-top: 2em;
    }

    .titulo {
        font-size: 24px;
        color: #F0AC54;
        margin-left: 1em;
        font-family: MontserratBold;
        margin-top: 2em;
    }

    .box-preta {
        display: flex;
        flex-direction: row;
        background-color: #282828;
        border-radius: .6em;
        margin: 2em;
        padding: 2em;
        
    }

    .foto img {
        width: 20em;
        height: 20em;
    }
    .foto {
        padding-bottom: 2em;
    }

    .column-esp {
        display: flex;
        flex-direction: column;
    }

    .nome-produto {
        color: #FFFFFF;
        font-size: 28px;
        width: 12em;
        padding-left: 1em;
        padding-top: .4em;
        font-family: MontserratBold;
        height: 7em;
    }

    .row-vendido {
        display: flex;
        flex-direction: row;
    }

    .dono {
        padding-left: 1.4em;
        color: #ffffff;
        font-size: 20px;
        padding-top: 1em;
        font-family: MontserratBold;
        width: 9em;
    }

    .nome-dono {
        padding-left: 1.4em;
        padding-top: 1em;
        font-size: 20px;
        color: #F0AC54;
        font-family: MontserratBold;
    }

    .row-input {
        display: flex;
        flex-direction: row;
    }

    .frete {
        font-size: 28px;
        color: #ffffff;
        font-family: MontserratBold;
    }

    .row-valores {
        display: flex;
        flex-direction: row;
    }

    .valores-preco {
        font-size: 30px;
        color: #ffffff;
        margin-left: .4em;
        font-family: MontserratBold;
    }

    .excluir {
        font-size: 18px;
        color: #ffffff;
        font-family: Medio;
    }

    .row-localizacao {
        display: flex;
        flex-direction: row;
        font-size: 28px;
        color: #ffffff;
        justify-content: space-between;
        margin-left: 4em;
        
    }

    .row-val {
        display: flex;
        flex-direction: row;
        margin-left: 5.3em;
      
        font-family: MontserratBold;
    }

    .titulo-val {
        color: #ffffff;
        font-family: MontserratBold;
        font-size: 18px;
    }

    .valor-val {
        color: #34D231;
        font-size: 18px;
        padding-left: 2em;
        font-family: MontserratBold;
    }

    .valor-val1 {
        color: #34D231;
        font-size: 18px;
        padding-left: 0.8em;
        font-family: MontserratBold;
    }

    .column-valores {
        margin-left: 3em;
    }

    .bairro {
        font-family: MontserratBold;
        font-size: 18px;
        color:white;
        margin-top: .8em;
        margin-left: 6.5em;
    }

    .rua {
        font-family: MontserratBold;
        font-size: 18px;
        color:white;
        margin-top: .8em;
        margin-left: 6.5em;
    }

    .estado {
        font-family: MontserratBold;
        font-size: 18px;
        margin-right: .8em;
        margin-top: .8em;
        margin-bottom: 2em;
        color:white;
        margin-left: 6.5em;
    }

    

    .valores-preco {
        margin-left: 5em;
    }

    .excluir {
        margin-top: .5em;
        margin-bottom: 5em;
        cursor: pointer;
    }

    .frete {
        margin-right: 1em;
    }

    .titulo-val {
    margin-left: 1.4em;
    }

   .agp-realizar {
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       
   }
   
    .row-preco{
       display: flex;
       flex-direction: row;
   }

   .sub-total-baixo {
    color: #ffffff;
    font-size: 22px;
    font-family: MontserratBold;
    margin-right: 2em;
   }
   .sub-valor-final {
    color: #ffffff;
    font-size: 22px;
    font-family: MontserratBold;
    margin-right: 2em;
   }
   .total-valor-baixo{
    color: #ffffff;
    font-size: 22px;
    font-family: MontserratBold;
    margin-right: 2em;
    margin-bottom: .4em;
   }
   .total-final{
    color: #ffffff;
    font-size: 22px;
    font-family: MontserratBold;
    margin-right: 2em;    
   }

   .pc {
       width: 1240px;
       margin: auto;
   }

   .cell {
       display: none;
   }

   .green {
    margin-bottom:1em;
     margin-right: 2em;
    width: 14em;
   }
    
   @media(max-width:375px) {
       .cell {
           width: 100%;
       }
       .box-preta {
       width: 85%;
       padding: 0em;
       margin: 0em;
       display: flex;
       flex-direction: column;
       margin-left: 2em;
      
   }

   .cabecalho {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
   }

   .foto img {
       width: 15em;
       height: 15em;
   }

   .foto {
       text-align: center;
   }

   .preco {
       display: none;
   }

   .cell {
       display: block;
   }

   .pc {
       display: none;
   }

   .row-valores {
       display: flex;
       flex-direction: row;
       justify-content: left;
   }

 .excluirB {
    width: 92%;
    height: 3em;
    border-radius: .4em;
    margin-left: 1em;
    margin-top: 2em;
   }

   .excluir {
       margin-bottom: 2em;
   }

   .nome-produto {
       margin-top: 1em;
       width: 90%;
       text-align: center;
   }

   .row-val {
       display: flex;
       flex-direction: row;
       justify-content: left;
       align-items: center;
       padding: 0em;
       margin: 0em;
       
   }

   .valor-val {
       padding-left: .8em;
   }



   .row-valores {
       display: flex;
       flex-direction: row;
       align-items: center;
    justify-content: left;
       
   }

   .row-input {
       width: 100%;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: left;
       margin-top: 2.4em;
   }

   .frete {
       font-size: 1.2em;
       padding-left: 1em;
   }

   .cep {
       width: 0em;
   }

   .quantidade {
    color: #ffffff;
    padding: 0em;
    margin: 0em;
    padding-left:  .7em;
    padding-top: 1em;
    padding-right: 1em;
   }
   .select {
       padding-top: 1.5em;
   }

   .valor-cep {
       display: flex;
       flex-direction: column;
       justify-content: left;
   }

   .rua {
       margin-left: 1em;
   }

   .bairro {
       margin-left: 1em;
   }

   .estado {
       margin-left: 1em;
       margin-bottom: .5em;
   }

   .titulo-val {
       padding-left: 1.4em;
       margin: 0em;
   }

   .agp-realizar {
       margin-top: 2em;
   }
   .sub-valor-final {
       color: #ffffff;
   }

   .total-final {
       color: #ffffff;
   }

   .titulo-val {
    padding-left: 1em;
   }

   .green {
       margin: 0em;
        width: 90%;
        margin-left: 1em;
        padding: 1em;
   }

   .botao-finalizar {
       width: 100%;
       margin-bottom: 2em;
   }
   
}

   
  
   
    
    
`

export { StyledCarrinhoItem }
