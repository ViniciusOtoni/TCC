import Popup from "../../components/popup";

import { StyledPopupTela } from "../login/styled";


export default function RecuperarEmail() {
    return (
        <StyledPopupTela>
            <Popup recuSenha='true' botao1='3' tituloCima='CPF'  tituloBaixo="Senha:" />
        </StyledPopupTela>
    )
}