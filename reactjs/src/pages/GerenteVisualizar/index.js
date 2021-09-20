 import React from "react"

 import { StyledButtonAdm } from "../../components/botaoAdm/styled"
import Cabecalho from "../../components/cabecalho"
 import { Vizualizar } from "./styled"
 
 export default function GerenteVizualizar(){
     return(
         <div style={{ backgroundColor:"#333333" }}>
             <Cabecalho corLetra="nulo" />
            <main style={{ width: '1340px', margin: 'auto'}}>
                <Vizualizar>
                    <div className="header">
                        <StyledButtonAdm  cor="laranja"> Novo Item </StyledButtonAdm>   
                    </div>
                    <div className="content">
                        <div className="line alternating">
                            <div> Nome: </div>
                            <div> GTA V </div>
                        </div>
                        <div className="line">
                            <div> CNPJ: </div>
                            <div> 54.655.529/0001-72 </div>
                        </div>
                        <div className="line alternating">
                            <div> Cadastro-em: </div>
                            <div> 2021/10/11 </div>
                        </div>
                        <div className="line">
                            <div> Cadastro-por: </div>
                            <div> Game Bud </div>
                        </div>
                        <div className="line alternating">
                            <div> Situação: </div>
                            <div> Ativo </div>
                        </div>
                        <div className="line">
                            <div> ID do Produto: </div>
                            <div> #5 </div>
                        </div>
                        <div className="line alternating">
                            <div> Preço: </div>
                            <div> R$ 999,00 </div>
                        </div>
                        <div className="line">
                            <div> Categoria do Produto: </div>
                            <div> Game </div>
                        </div>
                        <div className="line alternating">
                            <div> Códido de Barra: </div>
                            <div> 12345678911 </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div>
                            <StyledButtonAdm  className="button" cor="vermelho"> Voltar </StyledButtonAdm> 
                        </div>
                    </div>
                </Vizualizar>    
            </main>
        </div>    
     )
 }