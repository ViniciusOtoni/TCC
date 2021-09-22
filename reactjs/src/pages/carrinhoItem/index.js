import { StyledCarrinhoItem } from "./styled"
import Cabecalho from "../../components/cabecalho"
import Footer from "../../components/rodape"
import { StyledInput } from "../../components/input/styled"
import { StyledButtonVerde } from "../../components/botaoVerde/styled"
import { SelectInput } from "../../components/select/styled"
import { StyledButtonAdm } from "../../components/botaoAdm/styled"

export default function CarrinhoItem() {
    return (
        <div style={{backgroundColor:"#333333"}}>
        <Cabecalho />
        <hr style={{marginLeft:"4em", marginRight:"4.3em"}} />
        
        
       <StyledCarrinhoItem> 
       <main className="pc"> 
          
                <div className="cabecalho"> 
                    <div className="titulo"> Carrinho: </div>
                    <div class="itens-direita"> 
                        <div className="quantidade"> Quantidade: </div>
                        <div className="preco"> Preço: </div>
                    </div>
                </div>
                <div className="box-preta">
                    <div className="foto"> <img src="/assets/images/image 24.svg" alt="" /> </div>
                    <div className="column-esp"> 
                        <div className="nome-produto">  Tom Clays Rainbow Six Siege </div>
                        <div className="row-vendido"> 
                            <div className="dono"> Vendido Por: </div>
                            <div className="nome-dono"> GameBud </div>
                        </div>
                        <div className="row-vendido"> 
                            <div className="dono"> Entregue Por: </div>
                            <div className="nome-dono"> GameBudSedex </div>
                        </div>
                        
                    </div>
                 
                    <div className="column-valores">
                        <div className="row-valores"> 
                            <div className="select">  <SelectInput  style={{width:"4em", height:"2em", fontSize:"1em", fontFamily: "MontserratBold"}}>  
                            <option value="vl1" >1 </option>
                            <option value="vl2"> 2 </option>
                            <option value="vl3"> 3 </option>
                            <option value="vl4"> 4 </option>
                            <option value="vl4"> 5 </option>
                            <option value="vl4"> 6 </option>
                            <option value="vl4"> 7 </option>
                            <option value="vl4"> 8 </option>
                            <option value="vl4"> 9 </option>
                            <option value="vl4"> 10 </option>
                             </SelectInput> </div>
                            <div className="valores-preco"> R$: 40,99 </div>
                        </div>
                        <div className="excluir"> Excluir </div>
                        <div className="row-input"> 
                            <div className="frete"> Frete: </div>
                            <div className="input-frete">  <StyledInput placeholder="Cep" style={{width:"8em"}}/> </div>
                            <div className="botao-frete"> <StyledButtonVerde style={{width: "7em", height:"1.8em", marginLeft:"2em"}}> Calcular </StyledButtonVerde> </div>
                        </div>
                    
                    
                        <div className="rua"> Nome da Rua Bonito  </div>
                        <div className="bairro"> Bairro com Nome Bonito  </div>
                        <div className="estado">  Cidade com Nome Bonita </div>
                    
                    <div className="row-val"> 
                        <div className="titulo-val"> Preço: </div>
                        <div className="valor-val"> R$10,99 </div>
                    </div>
                    <div className="row-val"> 
                        <div className="titulo-val"> Previsão: </div>
                        <div className="valor-val1"> 4 dias </div>
                    </div>
                    
                </div>
                </div>
                <div className="agp-realizar">
                    <div className="row-preco"> 
                        <div className="sub-total-baixo"> Sub-Total: </div>
                        <div className="sub-valor-final"> R$:79,99</div>
                    </div>
                    <div className="row-preco"> 
                        <div className="total-valor-baixo"> Total: </div>
                        <div className="total-final"> R$:99,99 </div>
                    </div>
                    <div className="botao-finalizar"> <StyledButtonVerde style={{padding: ".3em", marginBottom:"1em", marginRight: "2em", width:"14em"}}> Realizar Compra! </StyledButtonVerde> </div>
                </div>
                </main>



                <main className="cell"> 
                <div className="cabecalho"> 
                    <div className="titulo"> Carrinho: </div>
                </div>
                <div className="box-preta">
                <div className="nome-produto">  Tom Clays Rainbow Six Siege </div>
                    <div className="foto"> <img src="/assets/images/image 24.svg" alt="" /> </div>
                    <div className="row-val"> 
                        <div className="titulo-val"> Preço: </div>
                        <div className="valor-val"> R$10,99 </div>
                    </div>
                    <div className="row-valores"> 
                            <div className="quantidade"> Unidades: </div>
                            <div className="select">  <SelectInput  style={{width:"4em", height:"2em", fontSize:"1em", fontFamily: "MontserratBold"}}>  
                                <option value="vl1" >1 </option>
                                <option value="vl2"> 2 </option>
                                <option value="vl3"> 3 </option>
                                <option value="vl4"> 4 </option>
                                <option value="vl4"> 5 </option>
                                <option value="vl4"> 6 </option>
                                <option value="vl4"> 7 </option>
                                <option value="vl4"> 8 </option>
                                <option value="vl4"> 9 </option>
                                <option value="vl4"> 10 </option>
                             </SelectInput> </div>
                            </div>
                 
                    
                        <div className="excluir"> <StyledButtonAdm cor="vermelho" className="excluirB">  Excluir </StyledButtonAdm> </div>
                </div>
                <div className="row-input"> 
                            <div className="frete"> Frete: </div>
                            <div className="input-frete">  <StyledInput placeholder="Cep" style={{width:"8em"}} className="cep"/> </div>
                            <div className="botao-frete"> <StyledButtonVerde style={{width: "7em", height:"1.8em", marginLeft:"2em"}}> Calcular </StyledButtonVerde> </div>
                        </div>
                    
                    <div className="valor-cep">
                        <div className="rua"> Nome da Rua Bonito  </div>
                        <div className="bairro"> Bairro com Nome Bonito  </div>
                        <div className="estado">  Cidade com Nome Bonita </div>
                        </div>
                    
                   
                    <div className="row-val"> 
                        <div className="titulo-val"> Previsão: </div>
                        <div className="valor-val1"> 4 dias </div>
                    </div>

                <div className="agp-realizar">
                    <div className="row-preco"> 
                        <div className="sub-total-baixo"> Sub-Total: </div>
                        <div className="sub-valor-final"> R$:79,99</div>
                    </div>
                    <div className="row-preco"> 
                        <div className="total-valor-baixo"> Total: </div>
                        <div className="total-final"> R$:99,99 </div>
                    </div>
                    <div className="botao-finalizar"> <StyledButtonVerde style={{padding: ".3em"}} className="green"> Realizar Compra! </StyledButtonVerde> </div>
                </div>
                </main>
       </StyledCarrinhoItem>
       
      
       <Footer />
       </div>
    )
}