
import { StyledEscolhaEntrega } from "./styled"
import Cabecalho from "../../components/cabecalho"
import Paginacao from "../../components/paginacao"

export default function EscolhaEntrega() {
    return (
        <div style={{backgroundColor:"#333333"}}> 
            <Cabecalho corLetra="nulo"  />
          
                 <StyledEscolhaEntrega>
                 <main className="pc"> 
                    <div className="titulo"> Seus Pedidos </div>
                    <div className="row"> 
                    <div className="column">
                            <div className="title-column"> Data Do Pedido: </div>
                            <div className="pedido"> 2021-01-01 </div>
                            <div className="pedido"> 2021-01-02 </div>
                        </div>
                        <div className="column">
                            <div className="title-column"> Quantidade De Itens: </div>
                            <div className="pedido"> 1 </div>
                            <div className="pedido"> 4 </div>
                        </div> 
                        <div className="column">
                            <div className="title-column"> Valor Total: </div>
                            <div className="pedido"> R$199,00 </div>
                            <div className="pedido"> R$2099,00  </div>
                        </div> 
                        <div className="column-acao">
                            <div className="title-column"> Inspecionar: </div>
                            <div className="verificar-botao"> <button> Verificar </button> </div>
                            <div className="verificar-botao"> <button> Verificar  </button> </div>
                        </div> 
                    </div>
                    <Paginacao />
                    </main>
                    <main className="cell">
                        <div className="titulo"> Seus Pedidos </div>
                        <div className="column">
                            <div className="title-column"> Data Do Pedido: </div>
                            <div className="pedido"> 2021-01-01 </div>
                        </div>
                        <div className="column">
                            <div className="title-column"> Quantidade De Itens: </div>
                            <div className="pedido"> 1 </div>
                        </div> 
                        <div className="column">
                            <div className="title-column"> Valor Total: </div>
                            <div className="pedido"> R$199,00 </div>
                        </div> 
                        <div className="column-acao">
                            <div className="verificar-botao"> <button> Verificar </button> </div>
                        </div> 
                        <Paginacao />

                    </main>
                 </StyledEscolhaEntrega> 
           
        </div>
        
    )
}