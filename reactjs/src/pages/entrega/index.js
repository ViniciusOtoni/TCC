import Cabecalho from "../../components/cabecalho";
import { StyledButtonHome } from "../../components/botaoHome/styled";
import { StyledEntrega } from "./styled";


export default function EntregasSemItem()  {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        
            <Cabecalho />
            <hr style={{marginRight:"3.4em", marginLeft:"3.4em", }}/>
            
        <main style={{ width: "1340px", margin: "auto"}}> 
            
            <StyledEntrega> 
            
            <div className="titulo"> Entregas </div>
            <div className="agrupamento-carrinho">
                <div className="logo"> <img src="/assets/images/Caminhao.svg" alt="" /> </div>
                <div className="column"> 
                    <div className="texto">  Você não possui nenhuma entrega  </div>
                    <div className="button">  <StyledButtonHome  style={{height: "3em", width:"27em", paddingTop:"0.7em"}}> Volte as Compras! </StyledButtonHome> </div> 
                </div>
                
            </div> 
            </StyledEntrega>

        </main>
    </div>
    )
}