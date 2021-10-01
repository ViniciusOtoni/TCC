import Popup from "../../components/popup";

import { StyledPopupTela } from "../login/styled";


export default function RedefinirEmail() {
    return (
        <StyledPopupTela> 
            <Popup  recuSenha='true' botao1='4' tituloBaixo='Confirme o email:' tituloCima='Digite o novo email:'/> 
        </StyledPopupTela>
    )
}