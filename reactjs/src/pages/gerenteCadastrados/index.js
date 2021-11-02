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




export default function GerenteProdutosCadastrados() {

    const [produtos, SetProdutos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    console.log("total: " + totalPages)
    console.log("produtos: " + produtos)

    async function Listar() {
        const e = await api.listarProdutos2(page);
        SetProdutos([...e.items]);
        setTotalPages(e.totalPaginas);
    }

    async function Remover(info) {
        let r = await api.removerProduto(info.id_produto)
        toast.dark('Produto removido')
        Listar();
        
    }

    function irPara(pagina) {
        setPage(pagina)
    }

    useEffect(() => {
        Listar()
    }, [page])

    return (
        <div style={{ backgroundColor: "#333333", minHeight: "100vh" }}>
            <CabecalhoAdm />
            <ToastContainer />
            <StyledGerenteCadastrados>
                <main className="pc1">
                    <table>
                        <thead>
                            <th style={{ paddingRight: "1em" }}> ID: </th>
                            <th> Nome </th>
                            <th> Código de Barra </th>
                            <th> Categoria </th>
                            <th> Preço </th>
                            <th> </th>
                            <th> Ações </th>
                            <th> </th>
                        </thead>
                        <tbody>
                            {produtos.map(info =>
                                <tr>
                                    <td style={{ paddingLeft: "1em" }}> {info.id_produto} </td>
                                    <td> {info.nm_produto} </td>
                                    <td style={{ paddingLeft: "3.8em" }}> {info.ds_codigo_barra}</td>
                                    <td style={{ textAlign: "center" }}> {info.ds_categoria} </td>
                                    <td>  {info.vl_preco} </td>
                                    <td className="botaoVerde" texto="true"> <Link to={{ pathname: "/gerenteVizualizar", state: info }}> <StyledButtonAdm style={{ fontFamily: "MontserratBold", width: "7.5em", marginRight: ".3em" }}> Visualizar </StyledButtonAdm> </Link> </td>
                                    <td className="botao">  <Link to={{ pathname: "/gerenteAlterar", state: info }}>  <StyledButtonAdm style={{ fontFamily: "MontserratBold", width: "7.5em" }} cor="laranja"> Editar </StyledButtonAdm> </Link> </td>
                                    <td className="botao">  <StyledButtonAdm style={{ fontFamily: "MontserratBold", width: "7.5em" }} cor="vermelho" onClick={() => Remover(info)}>  Excluir </StyledButtonAdm>  </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="footer">
                        <Link to="/gerenteEscolha">
                            <StyledButtonAdm cor="vermelho" className='buttonADM'> Voltar </StyledButtonAdm>
                        </Link>
                        <Paginacao
                            totalPaginas={totalPages}
                            pagina={page}
                            onPageChange={irPara}
                        />
                    </div>
                </main>
                <main className="cell">
                    {produtos.map(info =>
                        <div>
                            <div className="line-black">  
                            <div className="coluna"> ID: </div>
                            <div className="valor-coluna"> {info.id_produto} </div>
                        </div>
                        <div className="line-gray">
                            <div className="coluna"> Nome: </div>
                            <div className="valor-coluna"> {info.nm_produto} </div>
                        </div>
                        <div className="line-black">
                            <div className="coluna"> Código de Barra: </div>
                            <div className="valor-coluna"> {info.ds_codigo_barra} </div>
                        </div>
                        <div className="line-gray">
                            <div className="coluna"> Categoria  </div>
                            <div className="valor-coluna"> {info.ds_categoria}  </div>
                        </div>
                        <div className="line-black">
                            <div className="coluna"> Preço </div>
                            <div className="valor-coluna"> {info.vl_preco} </div>
                        </div>
                        <div className="line-gray">
                            <div className="coluna"> Vizualizar  </div>
                            <div className="valor-coluna"> <Link to={{ pathname: "/gerenteVizualizar", state: info }}> <StyledButtonAdm className="styled">  Vizualizar </StyledButtonAdm> </Link></div>
                        </div>
                        <div className="line-black">
                            <div className="coluna"> Editar </div>
                            <div className="valor-coluna"> <Link to={{ pathname: "/gerenteAlterar", state: info }}> <StyledButtonAdm cor='laranja' className="styled2"> Editar </StyledButtonAdm> </Link> </div>
                        </div>
                        <div className="line-gray">
                            <div className="coluna"> Excluir: </div>
                            <div className="valor-coluna"> <StyledButtonAdm cor='vermelho' className="styled3" onClick={() => Remover(info)}> Excluir </StyledButtonAdm> </div>
                        </div>
                       
                        </div>    
                    )}
                    <div className="pag">
                        <Paginacao
                            totalPaginas={totalPages}
                            pagina={page}
                            onPageChange={irPara}
                        />
                    </div>
                     <div className="back"> <Link to="/gerenteEscolha"><StyledButtonAdm cor="vermelho" style={{ width: "10em" }} > Voltar </StyledButtonAdm></Link> </div>
                </main>

            </StyledGerenteCadastrados>
        </div>
    )
}