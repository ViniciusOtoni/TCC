import Popup from "../../components/popup";
import { StyledPopupTela } from "../login/styled";

export default function RecuperarSenha() {
  return (
    <StyledPopupTela>
      <Popup
        recuSenha="true"
        botao1="1"
        tituloBaixo="Nome:"
        tituloCima="Email:"
      />
    </StyledPopupTela>
  );
}
