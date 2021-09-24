import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";

import Paginacao from "../../components/paginacao";
import { StyledGerenteCadastrados } from "./styled";


export default function GerenteProdutosCadastrados() {
    return (
        <div style={{backgroundColor:"#333333", minHeight:"100vh"}}> 
      <CabecalhoAdm />
            
            <StyledGerenteCadastrados> 
                <main> 
                    <table className="table table-responsive"> 
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
                    
            </StyledGerenteCadastrados> 
            
        </div>
    )
}