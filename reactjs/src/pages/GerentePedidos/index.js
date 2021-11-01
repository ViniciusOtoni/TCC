import { StyledGerentePedidos } from "./styled";
import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";

import Paginacao from "../../components/paginacao";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

import Api from "../../services/api";

const api = new Api();



export default function GerentePedidos() {
    const [infoGeral, setInfoGeral] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)


    function irPara(pagina){
        setPage(pagina)
    }

    async function listar() {
        let r = await api.listarPedidos(page);

        setInfoGeral([...r.items]);
        setTotalPage(r.totalPaginas)
    
    }

    async function alterarSituacao(item, situacao) {
        
       
        let r = await api.alterarSituacaoPedido(item.id_entrega, situacao);
        alert('Situacao')
        listar();
        return r;
    }

    useEffect(() => {
        listar()

    }, [ page ])

    return (
        <div style={{backgroundColor:"#333333", minHeight:"100vh"}}> 
        <CabecalhoAdm bNulo={true} />
                  <StyledGerentePedidos> 
                  <main className="pc"> 
                      <table> 
                          <thead> 
                              <th style={{paddingRight:"1em"}}> ID: </th>
                              <th> Nome Cliente </th>
                              <th style={{width:"2em", paddingRight:"3em"}}> Formato de Pagamento </th>
                              <th style={{paddingRight:"2em"}}> Total </th>  
                              <th> Situação </th>
                              <th> </th>
                              <th> Ações </th> 
                              <th>  </th> 
                          </thead>
                          <tbody> 
                              
                            {infoGeral.map((item, i) => 
                                <tr className={i % 2 === 0 ? "teste" : "" }> 
                                    <td style={{paddingLeft:"1em"}}> {item.id_entrega} </td>
                                    <td > {item.id_endereco_infoa_gab_endereco.id_usuario_infoa_gab_usuario.nm_usuario} </td>
                                    <td style={{paddingLeft: "3.8em"}}> {item.id_venda_infoa_gab_venda.ds_pagamento} </td>
                                    <td style={{paddingLeft:"1em"}}> {item.id_venda_infoa_gab_venda.vl_total} </td>
                                    <td>  {item.ds_situacao} </td>
                                    <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho" onClick={() => alterarSituacao(item, "Saiu para entrega")}> Saiu Para Entrega </StyledButtonAdm> </td>
                                    <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em", padding: "1em 0em"}} cor="laranja" onClick={() => alterarSituacao(item, "A Caminho")}> A Caminho </StyledButtonAdm> </td>
                                    <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", padding: "1em 0em"}} onClick={() => alterarSituacao(item, 'Entregue')}>  Entregue </StyledButtonAdm> </td>
                                    <td className="botao4"> <Link to={{ pathname: "/gerenteListar", state: item.id_venda_infoa_gab_venda.id_venda }}><StyledButtonAdm style={{ fontFamily: "MontserratBold", width: "7.5em", fontSize: ".7em" }} cor="preto"> Ver Itens </StyledButtonAdm> </Link></td>
                                    {console.log(item)}
                                </tr>    
                            )}
                             
                          </tbody>
                      </table>
                      <div className="footer"> 
                          <Link to="/gerenteCadastrar"><StyledButtonAdm cor="vermelho" style={{marginRight:"18em", width:"10em"}}> Voltar </StyledButtonAdm></Link>
                         <Paginacao totalPaginas={totalPage}
                                    pagina={page}
                                    onPageChange={irPara}
                                                            /> 
                      </div>
                      </main>
                      <main className="cell"> 
                        <div className="line-black"> 
                            <div className="coluna"> ID: </div>
                            <div className="valor-coluna"> 2345678 </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="coluna">  Cliente: </div>
                            <div className="valor-coluna"> Vinicius Otoni </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna">  Pagamento </div>
                            <div className="valor-coluna"> Débito </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="coluna"> Total </div>
                            <div className="valor-coluna"> R$ 99,00  </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna"> Situação </div>
                            <div className="valor-coluna"> Pago </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="coluna1"> Saiu Para Entrega  </div>
                            <div className="valor-coluna"> <StyledButtonAdm className="styled"> Saiu Para Entrega </StyledButtonAdm> </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna"> A Caminho </div>
                            <div className="valor-coluna"> <StyledButtonAdm cor='laranja' className="styled"> A Caminho </StyledButtonAdm> </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="coluna"> Entregue: </div>
                            <div className="valor-coluna"> <StyledButtonAdm cor='vermelho' className="styled"> Entregue </StyledButtonAdm> </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna"> Ver Itens: </div>
                            <div className="valor-coluna"> <StyledButtonAdm cor='preto' className="styled"> A Caminho </StyledButtonAdm> </div>
                        </div>
                       <div className="pag"> <Paginacao
                                                totalPaginas={totalPage}
                                                pagina={page}
                                                onPageChange={irPara}
                                                                        /> 
                        </div>
                       <div className="back"> <StyledButtonAdm cor="vermelho" style={{width:"10em"}}> Voltar </StyledButtonAdm> </div>
                    </main>
                  </StyledGerentePedidos>
          </div>
    )
}