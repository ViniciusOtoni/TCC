import { StyledPopup } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";
import { Link } from "react-router-dom";


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




export default function Popup(props) {
    return (
        <StyledPopup recuSenha={props.recuSenha}>
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
            <div className="agp-column"> 
                <div className="email"> {props.tituloCima} </div>
                <div className="input"> <StyledInput style={{width:"100%", color:"#000000"}}/> </div>
              <Link to="/recuperarEmail" style={{color:"#ffffff", textDecoration:"none"}}>   <div className="esqueceu-email"> Esqueceu seu Email? </div> </Link>

                <div className="senha"> {props.tituloBaixo} </div>
                <div className="input"> <StyledInput style={{width:"100%", color:"#000000"}}/> </div>
                <Link to="/recuperarSenha" style={{color:"#ffffff", textDecoration:"none"}}> <div className="esqueceu-senha"> Esqueceu  sua Senha </div>   </Link>

                <div className="agp-botao">
                <div className="botao1"> <Link to="/">   <StyledButtonPopup> Entrar  </StyledButtonPopup> </Link> </div>
              <div className="botao2">  <Link to="/criarConta">  <StyledButtonPopup> Cadastra-se </StyledButtonPopup> </Link> </div> 
                <div className="botao3"> <Link to={props.botao1 === '1' ? '/redefinirSenha' : props.botao1 === '2' ? '/' :   props.botao1 === '3' ? '/redefinirEmail' :  props.botao1 === '4' ? '/' : props.botao1 === '5' ? '/gerenteEscolha' : '/cadastrarEmpresa'}> <StyledButtonPopup> {alterar(props.botao1)} </StyledButtonPopup> </Link> </div>
                </div>
            </div>

        </StyledPopup> 
    )
}