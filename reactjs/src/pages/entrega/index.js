import Cabecalho from "../../components/cabecalho";
import { StyledButtonHome } from "../../components/botaoHome/styled";
import { StyledEntrega } from "./styled";


export default function EntregasSemItem()  {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        
            <Cabecalho />
           
            
    
            
            <StyledEntrega> 
            <main> 
            
            <div className="titulo"> Entregas </div>
            <div className="agrupamento-carrinho">
                <div className="logo"> <img src="/assets/images/Caminhao.svg" alt="" /> </div>
                <div className="column"> 
                    <div className="texto">  Você não possui nenhuma entrega  </div>
                    <div className="button">  <StyledButtonHome   className="style"> Volte as Compras! </StyledButtonHome> </div> 
                </div>
                
            </div> 
            </main>
            </StyledEntrega>

       
    </div>
    )
}