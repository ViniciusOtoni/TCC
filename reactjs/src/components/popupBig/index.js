import { StyledPopupBig } from "./styled";
import { StyledInput } from "../input/styled";
import { StyledButtonPopup } from "../botaoPopup/styled";
import { Link } from "react-router-dom";
import Api from '../../services/api';
import { useState } from "react";
import { useHistory } from "react-router";



const api = new Api();
export default function PopupBig(props) {

    const [vl1, setVl1] = useState('');
    const [vl2, setVl2] = useState('');
    const [vl3, setVl3] = useState('');
    const [vl4, setVl4] = useState('');
    const [vl5, setVl5] = useState('');
    const [vl6, setVl6] = useState('');


    const navegacao = useHistory();

    const validarResposta = (resp) => {
       

        if (!resp.error)
            return true;
            alert(`${resp.error}`);
        return false;
    }

    const cadastrarUsuario = async () => {
        
        if(vl1 === '')
        return alert("O Campo Nome Precisa ser Preenchido!");

        if(vl2 === '')
        return alert("O Campo Email Precisa ser Preenchido!");

        if(vl3 === '')
        return alert("O Campo Senha Precisa ser Preenchido!");

        if(vl4 === '')
        return alert("O Campo Confirmar Senha Precisa ser Preenchido!");

        if(vl5 === '')
        return alert("O Campo Imagem Precisa ser Preenchido!");

        if(vl6 === '')
        return alert("O Campo CPF Precisa ser Preenchido!");

        if(vl3.length < 6) {
            return alert('Senha muito fraca!')
        }



        let r = await api.cadastrarUsuario(vl1, vl6, vl2, vl3, vl5)
        if (!validarResposta(r)) 
        return



        if(vl3 === vl4)  {
        navegacao.push('/') } else {
            alert('A senha não bateu!')
        }

    }

    const cadastrarEmpresa = async () => {
        let r = await api.cadastrarEmpresa()
        if (!validarResposta(r)) 
        return
        navegacao.push('/cadastrarEmpresa')
    }

    return (
        <StyledPopupBig empresa={props.empresa}>
            <header> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="titulo"> GameBud </div>
            </header>
                <div className="column"> 
                
                <div className="nome"> {(props.titulo1)} </div>
                <div className="input"> <StyledInput value={vl1}   onChange={r => setVl1(r.target.value)} /> </div> 
               
                <div className="email"> {(props.titulo2)} </div>   
                <div className="input">  <StyledInput value={vl2}  onChange={r => setVl2(r.target.value)}/> </div> 

                <div className="email"> {(props.titulo5)} </div>
                <div className="input"> <StyledInput value={vl6}  onChange={r => setVl6(r.target.value)}/> </div> 

                <div className="senha"> {(props.titulo3)}</div>
                <div className="input"> <StyledInput placeholder={props.titulo3 === '1' ? null : 'Minimo 6 caracteres!'} value={vl3}  onChange={r => setVl3(r.target.value)} /> </div> 

                <div className="repita"> {(props.titulo4)}</div>
                <div className="input"> <StyledInput value={vl4}   onChange={r => setVl4(r.target.value)}/> </div>

                <div className="img"> Imagem de Perfil: </div>
                <div className="input"> <StyledInput value={vl5}  onChange={r => setVl5(r.target.value)}/> </div>


              <div className="butao">  <StyledButtonPopup onClick={cadastrarUsuario}> Criar Conta! </StyledButtonPopup>   </div>
           </div>

        </StyledPopupBig> 
    )
}