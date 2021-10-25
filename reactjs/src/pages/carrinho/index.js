import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/rodape";
import { StyledCarrinho } from "./styled";
import { StyledButtonHome } from "../../components/botaoHome/styled";

import { Link } from "react-router-dom";


export default function Caixa() {
    return (
        <div style={{backgroundColor:"#333333"}}>
            <Cabecalho />
            <StyledCarrinho>
                <main> 
                    <div className="titulo"> Carrinho </div>
                    <div className="agrupamento-carrinho">
                        <div className="logo"> <img src="/assets/images/Vector (5).svg" alt="" /> </div>
                            <div className="texto">  Seu Carrinho está vazio, adiocione um item e volte mais tarde! 
                                <Link to="/"> <StyledButtonHome className="botao" > Volte as Compras! </StyledButtonHome> </Link>  
                            </div>
                    </div> 
                </main>
            </StyledCarrinho>
            <Footer />
        </div>
    )
}