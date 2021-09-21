import { StyledPopup } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";


function alterar(botao1) {
if(botao1 === '1') 
return 'Receber Código!'
if(botao1 === '2')
return 'Redefinir Senha!'
if(botao1 === '3')
return 'Avançar!'
if(botao1 === '4')
return 'Redefinir Email!'
if(botao1 === '5')
return 'Entrar!'
else 
return 'Cadastrar Empresa!'
} 

function alterarTitulo(tituloBaixo) {
    if(tituloBaixo === '1') 
    return 'Nome:'
    if(tituloBaixo === '3')
    return 'Digite a Nova Senha:'
    if(tituloBaixo === '4')
    return 'Confirme o Email:'
    else 
    return 'Senha:'
}

function alterarTitulo1(tituloCima) {
    if(tituloCima === '1')
    return 'Insira o código:'
    if(tituloCima === '2')
    return 'Nome:'
    if(tituloCima === '3')
    return 'Digite o novo Email:'
    else 
    return 'Email:'
}




export default function Popup(props) {
    return (
        <StyledPopup recuSenha={props.recuSenha}>
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
            <div className="agp-column"> 
                <div className="email"> {alterarTitulo1(props.tituloCima)} </div>
                <div className="input"> <StyledInput style={{width:"100%", color:"#000000"}}/> </div>
                <div className="esqueceu-email"> Esqueceu seu Email? </div>

                <div className="senha"> {alterarTitulo(props.tituloBaixo)} </div>
                <div className="input"> <StyledInput style={{width:"100%", color:"#000000"}}/> </div>
                <div className="esqueceu-senha"> Esqueceu  sua Senha </div>

                <div className="agp-botao">
                <div className="botao1"> <StyledButtonPopup> Entrar  </StyledButtonPopup> </div>
                <div className="botao2"> <StyledButtonPopup> Cadastra-se </StyledButtonPopup> </div>
                <div className="botao3"> <StyledButtonPopup> {alterar(props.botao1)} </StyledButtonPopup> </div>
                </div>
            </div>

        </StyledPopup> 
    )
}