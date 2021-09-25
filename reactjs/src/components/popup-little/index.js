import { StyledPopup } from "./styled";
import { StyledButtonPopup } from "../botaoPopup/styled";


export default function PopupLittle() {
    return (
        <StyledPopup className="container">
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
            <div className="agp-column"> 
                <div className="pedidos"> Pedidos: </div>
                <div className="botao1"> <StyledButtonPopup> Entrar  </StyledButtonPopup> </div>
                <div className="pedidos"> Produtos Cadastrados: </div>
                <div className="botao1"> <StyledButtonPopup> Entrar  </StyledButtonPopup> </div>
            </div>
        </StyledPopup> 
    )
}