import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import { StyledGerenteCadastrados } from "./styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";
import Paginacao from "../../components/paginacao";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from "../../services/api";
const api = new Api();




export default function GerenteProdutosCadastrados(props) {

    const [infoprodutos, SetProdutos] = useState(props.location.state);
    console.log(infoprodutos)


   

    return (
        <div style={{backgroundColor:"#333333", minHeight:"100vh"}}> 
        <CabecalhoAdm nulo='true' />
                <ToastContainer />
                <StyledGerenteCadastrados> 
                    <main className="pc1"> 
                        <table> 
                            <thead> 
                                <th style={{ paddingRight: "1em" }}> ID produto: </th>
                                <th> Nome do produto </th>
                                <th> Preço do produto </th>
                                <th> Quantidade </th>  
                                <th> </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: "1em" }}> oie </td>
                                    <td className="nomeProduto"> oie </td>
                                    <td style={{paddingLeft: "3.8em"}}> oie </td>
                                    <td style={{paddingLeft:"4em"}}> oie </td>      
                                </tr>
                            </tbody>
                        </table>
                        <div className="footer"> 
                        <Link to="/gerentePedidos"> <StyledButtonAdm cor="vermelho"  className='buttonADM'> Voltar </StyledButtonAdm> </Link>
                            <Paginacao/>  
                        </div>
                        </main>
                        <main className="cell"> 
                            <div className="line-black"> 
                                <div className="coluna"> ID: </div>
                                <div className="valor-coluna"> 2345678 </div>
                            </div>
                            <div className="line-gray"> 
                                <div className="coluna"> Nome: </div>
                                <div className="valor-coluna"> nome grandao p testar o flex wrap só mais um pouco </div>
                            </div>
                            <div className="line-black"> 
                                <div className="coluna"> Código de Barra: </div>
                                <div className="valor-coluna"> 12345678901 </div>
                            </div>
                            <div className="line-gray"> 
                                <div className="coluna"> Categoria  </div>
                                <div className="valor-coluna"> Xbox  </div>
                            </div>
                            <div className="line-black"> 
                                <div className="coluna"> Preço </div>
                                <div className="valor-coluna"> R$ 99,00 </div>
                            </div>
                            <div className="line-gray"> 
                                <div className="coluna"> Vizualizar  </div>
                                <div className="valor-coluna"> <StyledButtonAdm className="styled">  Vizualizar </StyledButtonAdm> </div>
                            </div>
                            <div className="line-black"> 
                                <div className="coluna"> Editar </div>
                                <div className="valor-coluna"> <StyledButtonAdm cor='laranja' className="styled2"> Editar </StyledButtonAdm> </div>
                            </div>
                            <div className="line-gray"> 
                                <div className="coluna"> Excluir: </div>
                                <div className="valor-coluna"> <StyledButtonAdm cor='vermelho' className="styled3"> Excluir </StyledButtonAdm> </div>
                            </div>
                        <div className="pag"> <Paginacao /> </div>
                        <div className="back"> <Link to="/gerenteEscolha"><StyledButtonAdm cor="vermelho" style={{width:"10em"}} > Voltar </StyledButtonAdm></Link> </div>
                        </main>
                        
                </StyledGerenteCadastrados>
                
        </div>
    )
}