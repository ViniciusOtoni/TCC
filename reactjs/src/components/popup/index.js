import { StyledPopup } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import Api from '../../services/api';




function alterar(botao1) {
    if(botao1 === '1') 
    return 'Receber Código!'
    else if(botao1 === '2')
    return 'Redefinir Senha!'
    else if(botao1 === '3')
    return 'Avançar!'
    else if(botao1 === '4')
    return 'Redefinir Email!'
    else if(botao1 === '5')
    return 'Entrar!'
    else 
    return 'Cadastrar Empresa!'
    } 



const api = new Api();
export default function Popup(props) {

   


    const [ vl1, setVl1 ] = useState('');
    const [ vl2, setVl2 ] = useState('');
    const [ idUsu, setIdUsu] = useState(0);
    

    

    const navegacao = useHistory()

    const logar = async () => {

        let r = await api.login(vl1, vl2)

        if(r.error) {
            alert(`${r.error}`)
        } else {
            navegacao.push('/')
        }
    }

    const logarGerente = async () => {
        let r = await api.login
    }

    const recuSenha = async () => {
        let r = await api.recuperarSenha(vl2, vl1)

        if(r.error) {
            alert(`${r.error}`)
        } else {
            navegacao.push('/redefinirSenha')
        }
    }

    const recuEmail = async () => {
        let r = await api.recuperarEmail(vl1, vl2)

        if( r.error ) {
            alert(`${r.error}`)
        } else {
            navegacao.push('/redefinirEmail')
        }
    }

    const redefinirEmail = async (id) => {
        
       
            
                let r  = await api.redefinirEmail(idUsu, vl1)
            
                if(vl1 === vl2)
                    navegacao.push('/')
            
            else 
                    alert('Digite o email corretamente')
    
    }


    
    const empresa = async () => {
        navegacao.push('/cadastrarEmpresa')
    }





    return (
        <StyledPopup recuSenha={props.recuSenha}>
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
            <div className="agp-column"> 
                <div className="email"> {props.tituloCima} </div>
                <div className="input"> <StyledInput style={{width:"100%", color:"#000000"}}  value={ vl1 } onChange={r => setVl1(r.target.value)}  type="text" /> </div>
              <Link to="/recuperarEmail" style={{color:"#ffffff", textDecoration:"none"}}>   <div className="esqueceu-email"> Esqueceu seu Email? </div> </Link>

                <div className="senha"> {props.tituloBaixo} </div>
                <div className="input"> <StyledInput style={{width:"100%", color:"#000000"}} type={props.type} value={ vl2 } onChange={e => setVl2(e.target.value)} /> </div>
                <Link to="/recuperarSenha" style={{color:"#ffffff", textDecoration:"none"}}> <div className="esqueceu-senha"> Esqueceu  sua Senha </div>   </Link>

                <div className="agp-botao">
                <div className="botao1">   <StyledButtonPopup onClick={logar}> Entrar  </StyledButtonPopup>  </div>
              <div className="botao2">  <Link to="/criarConta">  <StyledButtonPopup> Cadastra-se </StyledButtonPopup> </Link> </div> 
                <div className="botao3">  <StyledButtonPopup onClick={props.botao1 === '1' ? recuSenha : props.botao1 === '3' ? recuEmail : props.botao1 === '4' ? redefinirEmail : empresa }> {alterar(props.botao1)} </StyledButtonPopup>  </div>
                </div>
            </div>

        </StyledPopup> 
    )
}