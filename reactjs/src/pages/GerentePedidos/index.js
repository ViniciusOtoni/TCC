import { StyledGerentePedidos } from "./styled";
import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";

import Paginacao from "../../components/paginacao";


export default function GerentePedidos() {
    return (
        <div style={{backgroundColor:"#333333", minHeight:"100vh"}}> 
        <CabecalhoAdm bNulo='s' />
              
                  <StyledGerentePedidos> 
                  <main > 
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
                                  <td className="botao4"> <StyledButtonAdm style={{ fontFamily:"MontserratBold", width:"7.5em", fontSize:".7em"}}  cor="preto">  Ver Itens </StyledButtonAdm> </td>
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
                          <StyledButtonAdm cor="vermelho" style={{marginRight:"20%", width:"10em"}}> Voltar </StyledButtonAdm>
                         <Paginacao /> 
                      </div>
                      </main>
                     
                     
                  </StyledGerentePedidos>
            
          </div>
    )
}