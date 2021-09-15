import Cabecalho from "../components/cabecalho";
import Footer from "../components/rodaPe";
import { StyledButtonHome } from "../components/botaoHome/styled";
import { StyledEntrega } from "./styled";
import { StyledConteudo } from "../home/styled";

export default function EntregasSemItem()  {
    return (
        <main> 
            <Cabecalho />
            <StyledEntrega> 
            <div className="hr"> </div>
            <div className="titulo"> Entregas </div>
            <div className="agrupamento-carrinho">
                <div className="logo"> <img src="/assets/images/Caminhao.svg" alt="" /> </div>
                <div className="column"> 
                    <div className="texto">  Você não possui nenhuma entrega      </div>
                    <div className="button">  <StyledButtonHome  style={{height: "3em", width:"27em", paddingTop:"0.7em"}}> Volte as Compras! </StyledButtonHome> </div> 
                </div>
                
            </div> 
            </StyledEntrega>
            
        </main>
     
    )
}