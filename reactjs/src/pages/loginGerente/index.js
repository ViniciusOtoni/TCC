import Popup from "../../components/popup";
import { StyledPopupTela } from "../login/styled";


export default function LoginGerente() {
    return (
        <StyledPopupTela> 
            <Popup recuSenha='true' botao1='5'/>
        </StyledPopupTela>
    )
}