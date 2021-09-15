import { StyledCarrinhoItem } from "./styled"
import Cabecalho from "../components/cabecalho"
import Footer from "../components/rodape"

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
                    <div className="foto"> <img src="" alt="" /> </div>
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
                </div>
           <Footer />
       </StyledCarrinhoItem>
    )
}