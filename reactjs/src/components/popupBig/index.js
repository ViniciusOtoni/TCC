import { StyledPopupBig } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";
import { Link } from "react-router-dom";




export default function PopupBig(props) {
    return (
        <StyledPopupBig>
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
                <div className="column"> 
                <div className="nome"> {(props.titulo1)} </div>
                <div className="input"> <StyledInput placeholder={props.titulo1 === '1' ? null : 'Inserir seu nome completo!'}/> </div> 
                <div className="email"> {(props.titulo2)} </div>
                <div className="input"> <StyledInput /> </div> 
                <div className="senha"> {(props.titulo3)}</div>
                <div className="input"> <StyledInput placeholder={props.titulo3 === '1' ? null : 'Minimo 6 caracteres!'}/> </div> 
                <div className="repita"> {(props.titulo4)}</div>
                <div className="input"> <StyledInput /> </div>
                <div className="repita"> Imagem de Perfil: </div>
                <div className="input"> <StyledInput /> </div>


              <div className="butao"> <Link to="/"> <StyledButtonPopup> Criar Conta! </StyledButtonPopup>  </Link> </div>
           </div>

        </StyledPopupBig> 
    )
}