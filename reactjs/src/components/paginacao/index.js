import { StyledPaginacao } from "./styled";
import { useState, useEffect } from "react";

import Api from "../../services/api";
const api = new Api();

export default function Paginacao(props) {

    console.log("total pagina: " + props.totalPaginas)
    console.log("pagina: " + props.pagina)
    console.log("onPageChange: " + props.onPageChange())


    function getPages(){
        let paginas = []

        for(let i = 1; i <= props.totalPaginas; i++){
            paginas.push(i)
        }

        return paginas;
    }

    function irPara(pagina){
        props.onPageChange(pagina)
    }

    function anterior(){
        if(props.pagina === 1)
            return 
        props.onPageChange(props.pagina-1)
    }

    function proximo(){
        if(props.pagina === props.totalPaginas)
        props.onPageChange(props.pagina+1)
    }

    return (
        <StyledPaginacao paginaAtual={props.pagina}>
            <main className="pc"> 
                <div className="button-mudar"> <button onClick={anterior}> <img src="/assets/images/voltar.svg" alt="" />  </button> </div>
                
                {getPages().map(p => 
                    <div className="numero-pagina" onClick={() => irPara(p)}> {p} </div>
                )}

                <div className="button-mudar"> <button onClick={proximo}> <img src="/assets/images/avancar.svg" alt="" /> </button></div> 
            </main>

            
            <main className="cell">
            <div className="row">      
                <div className="numero-pagina"> 1 </div>
                <div className="numero-pagina"> 2 </div>
                <div className="numero-pagina"> 3 </div>
            </div>
            <div className="row"> 
                <div className="button-mudar"> <button onClick={''}> <img src="/assets/images/voltar.svg" alt="" /> Anterior  </button> </div>
                <div className="button-mudar"> <button onClick={''}> Próximo <img src="/assets/images/avancar.svg" alt="" /> </button></div> 
            </div>
            </main>
        </StyledPaginacao> 
    )
}