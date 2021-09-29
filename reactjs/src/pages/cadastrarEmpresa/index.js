import PopupBig from "../../components/popupBig";
import { StyledPopupTela } from "../login/styled";

export default function CadastrarEmpresa() {
    return (
        <StyledPopupTela> 
            <PopupBig titulo1 ='Nome Empresa:' titulo2 ='Email da empresa:' titulo3 ='CNPJ:' titulo4 ='Senha:' />
        </StyledPopupTela>
    )
}