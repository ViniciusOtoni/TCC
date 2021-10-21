import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";
import { Link } from "react-router-dom";

import Paginacao from "../../components/paginacao";
import { StyledGerenteCadastrados } from "./styled";
import { useState, useEffect } from "react";

import Api from "../../services/api";
const api = new Api();




export default function GerenteProdutosCadastrados() {

    const [produtos, SetProdutos] = useState([]);
  


    async function Listar() {
        let e = await api.listarProdutos2();
        SetProdutos(e);
        console.log(produtos.id_produto);


    }

    async function Remover(info) {
        let r = await api.removerProduto(info.id_produto)
        alert('Produto removido')
        Listar();
        return r;
    }


    
    useEffect(() => {
       
        Listar()

    }, [])

    
    return (
        <div style={{backgroundColor:"#333333", minHeight:"100vh"}}> 
      <CabecalhoAdm />
            
               <StyledGerenteCadastrados> 
                <main className="pc1"> 
                    <table> 
                        <thead> 
                            <th style={{paddingRight:"1em"}}> ID: </th>
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
                                    <td style={{paddingLeft:"1em"}}> {info.id_produto} </td>
                                    <td> {info.nm_produto} </td>
                                    <td style={{paddingLeft: "3.8em"}}> {info.ds_codigo_barra}</td>
                                    <td style={{paddingLeft:"4em"}}> {info.ds_categoria} </td>
                                    <td>  {info.vl_preco} </td>
                                    <td className="botaoVerde"  texto="true"> <Link to={{pathname: "/gerenteVizualizar", state: info}}> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em", marginRight: ".3em"}}> Visualizar </StyledButtonAdm> </Link> </td>
                                    <td className="botao">  <Link to={{pathname: "/gerenteAlterar", state: info}}>  <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </Link> </td>
                                    <td className="botao">  <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho" onClick={() => Remover(info)}>  Excluir </StyledButtonAdm>  </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="footer"> 
                       <Link to="/gerenteEscolha"> <StyledButtonAdm cor="vermelho"  className='buttonADM'> Voltar </StyledButtonAdm> </Link>
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