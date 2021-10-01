import { StyledGerentePedidos } from "./styled";
import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";
import { Link } from "react-router-dom";
import Paginacao from "../../components/paginacao";


export default function GerentePedidos() {
    return (
        <div style={{backgroundColor:"#333333", minHeight:"100vh"}}> 
        <CabecalhoAdm bNulo={true} />
              
                  <StyledGerentePedidos> 
                  <main className="pc"> 
                      <table> 
                          <thead> 
                              <th style={{paddingRight:"1em"}}> ID: </th>
                              <th> Nome </th>
                              <th style={{width:"2em", paddingRight:"3em"}}> Formato de Pagamento </th>
                              <th style={{paddingRight:"2em"}}> Total </th>  
                              <th> Sitação </th>
                              <th> </th>
                              <th> Ações </th> 
                              <th>  </th> 
                          </thead>
                          <tbody> 
                              <tr style={{backgroundColor:"#282828"}}> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td > Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}>  Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto"> Ver Itens </StyledButtonAdm> </td>
                              </tr>
                              <tr> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} >  Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>  
                              </tr>
                              <tr style={{backgroundColor:"#282828"}}> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja">  A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}> Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
                              </tr>
                              <tr> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}>  Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
                              </tr>
                              <tr style={{backgroundColor:"#282828"}}> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} >  Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <Link to="/gerenteListar"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </Link> </td>
                              </tr>
                              <tr> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho">Saiu Para Entrega  </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} > Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
                              </tr>
                              <tr style={{backgroundColor:"#282828"}}> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}>  Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
                              </tr>
                              <tr> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em",fontSize:".7em"}} cor="vermelho">Saiu Para Entrega</StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} > Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
                              </tr>
                              <tr style={{backgroundColor:"#282828"}}> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}} > Entregue </StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
                              </tr>
                              <tr> 
                                  <td style={{paddingLeft:"1em"}}> 1 </td>
                                  <td> Grand theft Auto 5 </td>
                                  <td style={{paddingLeft: "3.8em"}}> 12345678911 </td>
                                  <td style={{paddingLeft:"1em"}}> Xbox </td>
                                  <td>  R$ 999,00 </td>
                                  <td className="botao1"> <StyledButtonAdm style={{fontFamily:"MontserratBold", width:"8.5em", fontSize:".7em"}} cor="vermelho"> Saiu Para Entrega </StyledButtonAdm> </td>
                                  <td className="botao2"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"10.5em"}} cor="laranja"> A Caminho </StyledButtonAdm> </td>
                                  <td className="botao3"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em"}}>  Entregue</StyledButtonAdm> </td>
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
                              </tr>
                          </tbody>
                      </table>
                      <div className="footer"> 
                          <StyledButtonAdm cor="vermelho" style={{marginRight:"30%", width:"10em"}}> Voltar </StyledButtonAdm>
                         <Paginacao /> 
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
                       <div className="pag"> <Paginacao /> </div>
                       <div className="back"> <StyledButtonAdm cor="vermelho" style={{width:"10em"}}> Voltar </StyledButtonAdm> </div>
                    </main>
                     
                     
                  </StyledGerentePedidos>
            
          </div>
    )
}