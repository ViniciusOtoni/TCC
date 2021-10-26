import { StyledPaginacao } from "./styled";
import { useState} from "react";

import Api from "../../services/api";
const api = new Api();

export default function Paginacao() {
    const [page, setPage] = useState(1);

    function skipPage() {
        let pagina = page + 1;
        console.log(page);
        setPage(pagina);
    }

    function returnPage() {
        let pagina = page - 1;
        console.log(page);
        setPage(pagina);
    }

    function listarPlus() {
        skipPage();
        const x = api.listarProdutos(page);
        return(x);
    }

    return (
        <StyledPaginacao>
            <main className="pc"> 
                <div className="button-mudar"> <button onClick={returnPage}> <img src="/assets/images/voltar.svg" alt="" /> Anterior  </button> </div>
                <div className="numero-pagina"> 1 </div>
                <div className="numero-pagina"> 2 </div>
                <div className="numero-pagina"> 3 </div>
                <div className="numero-pagina"> 4 </div>
                <div className="button-mudar"> <button onClick={skipPage}> Próximo <img src="/assets/images/avancar.svg" alt="" /> </button></div> 
            </main>

            
            <main className="cell">
            <div className="row">      
                <div className="numero-pagina"> 1 </div>
                <div className="numero-pagina"> 2 </div>
                <div className="numero-pagina"> 3 </div>
            </div>
            <div className="row"> 
                <div className="button-mudar"> <button onClick={returnPage}> <img src="/assets/images/voltar.svg" alt="" /> Anterior  </button> </div>
                <div className="button-mudar"> <button onClick={skipPage}> Próximo <img src="/assets/images/avancar.svg" alt="" /> </button></div> 
            </div>
            </main>
        </StyledPaginacao> 
    )
}