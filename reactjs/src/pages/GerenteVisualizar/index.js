import React from "react"

import { StyledButtonAdm } from "../../components/botaoAdm/styled"
import CabecalhoAdm from "../../components/cabecalhoAdm"
import Paginacao from "../../components/paginacao"

import { Vizualizar } from "./styled"
 
export default function GerenteVizualizar(){
     return(
         <div style={{ backgroundColor:"#333333" }}>
             <CabecalhoAdm nulob={true}/>
                <Vizualizar>
                     <main>
                        <div className="content">
                            <div className="line alternating">
                                <div> Nome: </div>
                                <div className="line-value"> GTA </div>
                            </div>
                            <div className="line">
                                <div> CNPJ: </div>
                                <div className="line-value"> 54.655.529/0001-72 </div>
                            </div>
                            <div className="line alternating">
                                <div className="line-topic"> Cadastro-em: </div>
                                <div className="line-value"> 2021/10/11 </div>
                            </div>
                            <div className="line">
                                <div className="line-topic"> Cadastro-por: </div>
                                <div className="line-value"> Game Bud </div>
                            </div>
                            <div className="line alternating">
                                <div> Situação: </div>
                                <div className="line-value"> Ativo </div>
                            </div>
                            <div className="line">
                                <div className="line-topic"> ID do Produto: </div>
                                <div className="line-value"> #5 </div>
                            </div>
                            <div className="line alternating">
                                <div> Preço: </div>
                                <div className="line-value"> R$ 999,00 </div>
                            </div>
                            <div className="line">
                                <div> Categoria: </div>
                                <div className="line-value"> Game </div>
                            </div>
                            <div className="line alternating">
                                <div className="line-topic"> Códido de Barra: </div>
                                <div className="line-value">  12345678911 </div>
                            </div>
                        </div>
                        <div className="footer"> 
                        <StyledButtonAdm cor="vermelho" className="voltar"> Voltar </StyledButtonAdm>
                        <div className="pag"> <Paginacao /> </div>
                    </div>
                        
                    </main>
                </Vizualizar>    
           
        </div>    
     )
}