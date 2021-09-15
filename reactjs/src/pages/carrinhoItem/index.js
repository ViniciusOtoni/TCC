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
           <Footer />
       </StyledCarrinhoItem>
    )
}