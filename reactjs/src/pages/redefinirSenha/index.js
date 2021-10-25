import Popup from "../../components/popup";
import { StyledPopupTela } from "../login/styled";

export default function RedefinirSenha() {
    return (
        <StyledPopupTela> 
            <Popup recuSenha='true' botao1='2' tituloBaixo='Digite a nova senha:' tituloCima='Insira o código' />
        </StyledPopupTela>
    )
}