import { StyledPaginacao } from "./styled";

export default function Paginacao() {
    return (
        <StyledPaginacao>
            <div className="button-mudar"> <button>  Anterior  </button> </div>
            <div className="numero-pagina"> 1 </div>
            <div className="numero-pagina"> 2 </div>
            <div className="numero-pagina"> 3 </div>
            <div className="numero-pagina"> 4 </div>
            <div className="button-mudar"> <button> Próximo </button></div>
        </StyledPaginacao> 
    )
}