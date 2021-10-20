import React from "react"

import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";
import Paginacao from "../../components/paginacao";

import { Vizualizar } from "./styled";
import { useState} from "react";
import { Link } from "react-router-dom";
import Api from "../../services/api";

const api = new Api();
 
export default function GerenteVizualizar(props){
    const [infoProduto, setInfoProduto] = useState(props.location.state);

    

   

    
    console.log(infoProduto);

     return(
         <div style={{ backgroundColor:"#333333" }}>
             <CabecalhoAdm nulob={true}/>
                <Vizualizar>
                     <main>
                        <div className="content">
                            <div className="line alternating">
                                <div> Nome: </div>
                                <div className="line-value"> {infoProduto.nm_produto} </div>
                            </div>
                            <div className="line">
                                <div> CNPJ: </div>
                                <div className="line-value"> 54.655.529/0001-72 </div>
                            </div>
                            <div className="line alternating">
                                <div className="line-topic"> Cadastro-em: </div>
                                <div className="line-value"> {infoProduto.dt_cadastro} </div>
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
                                <div className="line-value"> #{infoProduto.id_produto} </div>
                            </div>
                            <div className="line alternating">
                                <div> Preço: </div>
                                <div className="line-value"> {infoProduto.vl_preco} </div>
                            </div>
                            <div className="line">
                                <div> Categoria: </div>
                                <div className="line-value"> {infoProduto.ds_categoria} </div>
                            </div>
                            <div className="line alternating">
                                <div className="line-topic"> Códido de Barra: </div>
                                <div className="line-value">  {infoProduto.ds_codigo_barra} </div>
                            </div>
                        </div>
                        <div className="footer"> 
                        <Link to="/gerenteCadastrar"><StyledButtonAdm cor="vermelho" className="voltar"> Voltar </StyledButtonAdm></Link>
                        <div className="pag"> <Paginacao /> </div>
                    </div>
                        
                    </main>
                </Vizualizar>    
           
        </div>    
     )
}