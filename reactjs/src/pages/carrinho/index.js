import Cabecalho from "../components/cabecalho";
import { StyledCarrinho } from "./styled";

import Footer from "../components/rodape";

import { StyledButtonHome } from "../components/botaoHome/styled";

export default function Caixa() {
    return (
       <main> 
        <Cabecalho />
      <StyledCarrinho>
            
            <div className="hr"> </div>
            <div className="titulo"> Carrinho </div>
            <div className="agrupamento-carrinho">
                <div className="logo"> <img src="/assets/images/Vector (5).svg" alt="" /> </div>
                
                    <div className="texto">  Seu Carrinho está vazio, adiocione um item e volte mais tarde! <StyledButtonHome className="botao" style={{height: "1em", width:"16em"}}> Volte as Compras! </StyledButtonHome> </div> 

                    <div className="voltar">  </div>
                
            </div> 
            
        </StyledCarrinho>
        <Footer />
        </main>
    )
}