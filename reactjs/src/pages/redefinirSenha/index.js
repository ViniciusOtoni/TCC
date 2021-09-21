import Popup from "../../components/popup";
import { StyledPopupTela } from "../login/styled";




export default function RedefinirSenha() {
    return (
        <StyledPopupTela> 
            <Popup recuSenha='true' botao1='2' tituloBaixo='3' tituloCima='1' />
        </StyledPopupTela>
    )
}