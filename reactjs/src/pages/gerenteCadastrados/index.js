import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import { StyledGerenteCadastrados } from "./styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";
import Paginacao from "../../components/paginacao";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { convert } from "../../utils/convertCurrency";
import LoadingBar from 'react-top-loading-bar';

import Api from "../../services/api";
const api = new Api();




export default function GerenteProdutosCadastrados() {

    const [produtos, SetProdutos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pesquisa, setPesquisa] = useState('');
    const barraCarregamento = useRef(null);

    async function Listar() {

        barraCarregamento.current.continuousStart();
        const e = await api.listarProdutos2(page);
        SetProdutos([...e.items]);
        setTotalPages(e.totalPaginas);

        barraCarregamento.current.complete();
    }

    async function Remover(info) {
        let retorno = await api.removerProduto(info.id_produto);
       
        if (retorno.erro)
            return toast.error(retorno.erro)
        
        
        const situacao2 = new Promise(resolve => setTimeout(resolve, 1000));

        const a = toast.promise(situacao2, {
            pending: "Remover Produto",
            success: "Produto Removido",
            theme: 'light'
               
        })
           
        Listar(); 
    }

    function irPara(pagina) {
        setPage(pagina)
    }

   

    function search(x) {
        setPesquisa(x)
    }

    useEffect(() => {
        async function Listar() {
            
            const e = await api.listarProdutos2(page, pesquisa);
           
            console.log("pesquisa gerente: " + pesquisa)
            console.log(e)
            SetProdutos([...e.items]);
            setTotalPages(e.totalPaginas);
            
        }

        Listar()
    }, [page, pesquisa, produtos])

    return (
        <div style={{ backgroundColor: "#333333", minHeight: "100vh" }}>
            <ToastContainer />
            <LoadingBar color="orange" ref={ barraCarregamento } />
            <CabecalhoAdm search={search}/>
            
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
                                    <td title={info.nm_produto}> {info.nm_produto != null && info.nm_produto.length >= 27
                                                                ? info.nm_produto.substr(0, 27) + "..."
                                                                : info.nm_produto} </td>
                                    <td style={{ paddingLeft: "3.8em" }}> {info.ds_codigo_barra}</td>
                                    <td style={{ textAlign: "center" }}> {info.ds_categoria} </td>
                                    <td>  {convert(info.vl_preco)} </td>
                                    <td className="botaoVerde" texto="true"> <Link to={{ pathname: "/gerenteVizualizar", state: info }}> <StyledButtonAdm style={{ fontFamily: "MontserratBold", width: "7.5em"}}> Visualizar </StyledButtonAdm> </Link> </td>
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