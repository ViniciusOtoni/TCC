import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";

import Paginacao from "../../components/paginacao";
import { StyledGerenteCadastrados } from "./styled";


export default function GerenteProdutosCadastrados() {
    return (
        <div style={{backgroundColor:"#333333", minHeight:"100vh"}}> 
      <CabecalhoAdm />
            
               <StyledGerenteCadastrados> 
<<<<<<< HEAD
                <main className="pc"> 
                    <table> 
=======
                <main> 
                    <table className="table table-responsive"> 
>>>>>>> cc1ebf80ad4929ca671553cbc7caf5d73786ff82
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
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao"  texto="true"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                            <tr> 
                                <td style={{paddingLeft:"1em"}}> 1 </td>
                                <td> Grand theft Auto 5 </td>
                                <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                <td style={{paddingLeft:"4em"}}> Xbox </td>
                                <td>  R$ 999,00 </td>
                                <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"7.5em"}}> Visualizar </StyledButtonAdm> </td>
                                <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} cor="laranja"> Editar </StyledButtonAdm> </td>
                                <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}  cor="vermelho">  Excluir </StyledButtonAdm> </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="footer"> 
                        <StyledButtonAdm cor="vermelho" className='buttonADM'> Voltar </StyledButtonAdm>
                        <Paginacao />
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
                       <div className="back"> <StyledButtonAdm cor="vermelho" style={{width:"10em"}}> Voltar </StyledButtonAdm> </div>
                    </main>
                    
            </StyledGerenteCadastrados>
            
        </div>
    )
}