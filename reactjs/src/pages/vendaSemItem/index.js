import { StyledVendaSemItem } from "./styled";
import Cabecalho from '../../components/cabecalho'
import { Link } from "react-router-dom";
import  Footer from '../../components/rodape'
import { StyledButtonHome } from "../../components/botaoHome/styled";

export default function VendaSemItem() {

    return (
    
      <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho />
            <StyledVendaSemItem>
                <main>
                    
                    <div className="agrupamento-carrinho">
                        <div className="logo"> <img src="/assets/images/lupaSVg.svg" alt="" /> </div>
                        <div className="texto">  Ops... O item pesquisado não existe em nossa loja
                            <Link to="/"> <StyledButtonHome className="botao" > Volte as Compras! </StyledButtonHome> </Link>
                        </div>
                    </div>
                </main>
                </StyledVendaSemItem>
            <Footer />
        </div>
    
    )
}