import { StyledPopup } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonHome } from "../botaoHome/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";

export default function Popup() {
    return (
        <StyledPopup>
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
            <div className="agp-column"> 
                <div className="email"> Email </div>
                <div className="input"> <StyledInput /> </div>
                <div className="esqueceu-email"> Esqueceu seu Email? </div>

                <div className="senha"> Senha </div>
                <div className="input"> <StyledInput /> </div>
                <div className="esqueceu-senha"> Esqueceu  sua Senha </div>
                <div className="botao1"> <StyledButtonPopup> Entrar  </StyledButtonPopup> </div>
                <div className="botao2"> <StyledButtonPopup> Cadastra-se </StyledButtonPopup> </div>
                <div className="botao2"> <StyledButtonPopup> Cadastrar Empresa </StyledButtonPopup> </div>
            </div>

        </StyledPopup> 
    )
}