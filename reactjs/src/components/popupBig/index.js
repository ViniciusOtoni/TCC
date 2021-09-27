import { StyledPopupBig } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";
import { Link } from "react-router-dom";

function alterarTitulo1(titulo1) {
    if(titulo1 === '1')
    return 'Nome Empresa:';
    else 
    return 'Nome:';
}

function alterarTitulo2(titulo2) {
    if(titulo2 === '1')
    return 'Email da Empresa:';
    else 
    return 'Email:';
}

function alterarTitulo3(titulo3) {
    if(titulo3 === '1')
    return 'CNPJ:';
    else 
    return 'Senha:';
}

function alterarTitulo4(titulo4) {
    if(titulo4 === '1')
    return 'Senha:';
    else 
    return 'Insira Novamente:';
}




export default function PopupBig(props) {
    return (
        <StyledPopupBig>
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
                <div className="column"> 
                <div className="nome"> {alterarTitulo1(props.titulo1)} </div>
                <div className="input"> <StyledInput placeholder={props.titulo1 === '1' ? null : 'Inserir seu nome completo!'}/> </div> 
                <div className="email"> {alterarTitulo2(props.titulo2)} </div>
                <div className="input"> <StyledInput /> </div> 
                <div className="senha"> {alterarTitulo3(props.titulo3)}</div>
                <div className="input"> <StyledInput placeholder={props.titulo3 === '1' ? null : 'Minimo 6 caracteres!'}/> </div> 
                <div className="repita"> {alterarTitulo4(props.titulo4)}</div>
                <div className="input"> <StyledInput /> </div> 

              <div className="butao"> <Link to="/"> <StyledButtonPopup> Criar Conta! </StyledButtonPopup>  </Link> </div>
           </div>

        </StyledPopupBig> 
    )
}