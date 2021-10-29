import { StyledPopupTela } from "../login/styled";
import PopupBig from "../../components/popupBig";

export default function CriarConta() {
  return (
    <StyledPopupTela>
      <PopupBig
        titulo1="Nome:"
        titulo2="Email:"
        titulo3="Senha:"
        titulo4="Confirmar Senha:"
        titulo5="CPF:"
      />
    </StyledPopupTela>
  );
}
