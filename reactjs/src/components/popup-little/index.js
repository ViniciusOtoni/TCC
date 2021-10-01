import { StyledPopup } from "./styled";
import { StyledButtonPopup } from "../botaoPopup/styled";
import { Link } from "react-router-dom";


export default function PopupLittle() {
    return (
        <StyledPopup className="container">
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
            <div className="agp-column"> 
                <div className="pedidos"> Pedidos: </div>
                <div className="botao1"> <Link to="/gerentePedidos"> <StyledButtonPopup> Entrar  </StyledButtonPopup> </Link> </div>
                <div className="pedidos"> Produtos Cadastrados: </div>
                <div className="botao1">  <Link to="/gerenteCadastrar"> <StyledButtonPopup> Entrar  </StyledButtonPopup> </Link> </div>
            </div>
        </StyledPopup> 
    )
}