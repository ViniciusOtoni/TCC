import { StyledPopup } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../services/api';
import Cookies from "js-cookie";


function alterar(botao1) {
    if(botao1 === '1') 
    return 'Receber Código!'
    else if(botao1 === '2')
    return 'Redefinir Senha!'
    else if(botao1 === '5')
    return 'Entrar!'
    else 
    return 'Cadastrar-se!'
    } 


const api = new Api();
export default function Popup(props) {

    const [ vl1, setVl1 ] = useState('');
    const [ vl2, setVl2 ] = useState('');
  
    const navegacao = useHistory()

    const logar = async () => {

        let r = await api.login(vl1, vl2)

        if(r.error) {
            toast.error(`${r.error}`)
        } else {
            Cookies.set('usuario-logado' ,JSON.stringify(r));
            navegacao.push('/')
        }
    }


    const logarGerente = async () => {
        let r = await api.loginGerente(vl1, vl2)

        if(r.error) {
            toast.error(`${r.error}`)
        } else {
            Cookies.set('usuario-logado' ,JSON.stringify(r));
            navegacao.push('/gerenteEscolha')
        }
    }


    const recuSenha = async () => {
     let r = await api.recuperarSenha(vl2, vl1)

        if(r.error) {
            toast.error(`${r.error}`)
        } else {
            navegacao.push('/redefinirSenha')
        }
    }

    const redefinirSenha = async () => {
        let r = await api.redefinirSenha(vl1,vl2)

        if( r.error ) {
            toast.error(`${r.error}`)
        } else {
            navegacao.push('/')
        }
    }


    const empresa = async () => {
        navegacao.push('/criarConta')
    }


    return (
        <StyledPopup recuSenha={props.recuSenha}>
            <ToastContainer />
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
            <div className="agp-column"> 
                <div className="email"> {props.tituloCima} </div>
                <div className="input"> <StyledInput  style={{width:"100%", color:"#000000"}}  value={ vl1 } onChange={e => setVl1(e.target.value)}  type="text" /> </div>
            

                <div className="senha"> {props.tituloBaixo} </div>
                <div className="input"> <StyledInput  style={{width:"100%", color:"#000000"}} type={props.type} value={ vl2 } onChange={e => setVl2(e.target.value)} /> </div>
                <Link to="/recuperarSenha" style={{color:"#ffffff", textDecoration:"none"}}> <div className="esqueceu-senha"> Esqueceu  sua Senha </div>   </Link>

                <div className="agp-botao">
                <div className="botao1">  <StyledButtonPopup onClick={logar}> Entrar  </StyledButtonPopup>  </div>
                <div className="botao2">  <StyledButtonPopup onClick={props.botao1 === '1' ? recuSenha : props.botao1 === '2' ? redefinirSenha  : props.botao1 === '5' ? logarGerente : empresa }>  {alterar(props.botao1)} </StyledButtonPopup>  </div> 
                </div>
            </div>

        </StyledPopup> 
    )
}