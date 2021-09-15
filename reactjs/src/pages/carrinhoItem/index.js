import { StyledCarrinhoItem } from "./styled"
import Cabecalho from "../components/cabecalho"
import Footer from "../components/rodaPe"
import { StyledInput } from "../components/input/styled"
import { StyledButtonVerde } from "../components/botaoVerde/styled"
import { SelectInput } from "../components/select/styled"

export default function CarrinhoItem() {
    return (
       <StyledCarrinhoItem> 
           <Cabecalho />
           <div className="hr"> </div>
                <div className="cabecalho"> 
                    <div className="titulo"> Carrinho </div>
                    <div class="itens-direita"> 
                        <div className="quantidade"> Quantidade </div>
                        <div className="preco"> Preço </div>
                    </div>
                </div>
                <div className="box-preta">
                    <div className="foto"> <img src="/assets/images/image 24.svg" alt="" /> </div>
                    <div className="column-esp"> 
                        <div className="nome-produto"> Nome Grande Para Testar O Width e Ver O Quanto Que Vai ser Pra Ficar Bom</div>
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
                            <div className="select">  <SelectInput  style={{width:"4em", height:"2em", fontSize:"1em"}}>  
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
                            <div className="input-frete">  <StyledInput placeholder="Cep"/> </div>
                            <div className="botao-frete"> <StyledButtonVerde style={{width: "4em", height:"1.8em"}}> Calcular </StyledButtonVerde> </div>
                        </div>
                    
                    <div className="row-localizacao">
                        <div className="rua"> Rua - </div>
                        <div className="bairro"> Bairro - </div>
                        <div className="estado">  Cidade </div>
                    </div>
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
                <div className="hr"> </div>


           <Footer />
       </StyledCarrinhoItem>
    )
}