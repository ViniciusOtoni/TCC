import Popup from "../../components/popup";
import { StyledPopupTela } from "./styled";


export default function Login() {

    return (
            <StyledPopupTela> 
                <Popup tituloCima="Email" tituloBaixo="Senha:" type="password"/>
            </StyledPopupTela>
    )
}