import { StyledCarrinhoItem } from "./styled"
import Cabecalho from "../components/cabecalho"
import Footer from "../components/rodaPe"

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
                            <div className="select"> <select> </select> </div>
                            <div className="valores-preco"> R$: 40,99 </div>
                        </div>
                        <div className="excluir"> Excluir </div>
                        <div className="row-input"> 
                            <div className="frete"> Frete </div>
                            <div className="input-frete">  <StyledInput placeholder="Cep"/> </div>
                            <div className="botao-frete"> <StyledButtonVerde style={{width: "4em", height:"2em"}}> Calcular </StyledButtonVerde> </div>
                        </div>
                    </div>
                    <div className="row-localizacao">
                        <div className="rua"> Rua </div>
                        <div className="Bairro"> Bairro </div>
                        <div className="Estado">  Cidade </div>
                    </div>
                    <div className="row-val"> 
                        <div className="titulo-val"> Preço: </div>
                        <div className="valor-val"> R$10,99 </div>
                    </div>
                    <div className="row-val"> 
                        <div className="titulo-val"> Previsão: </div>
                        <div className="valor-val"> 4 dias </div>
                    </div>
                    <div className="hr"> </div>
                </div>


           <Footer />
       </StyledCarrinhoItem>
    )
}