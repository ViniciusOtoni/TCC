import { StyledEntregaItem } from "./styled";
import Cabecalho from "../components/cabecalho";

export default function EntregaItem() {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho />
        <hr />
            <main style={{width:"1340px", margin:"auto"}}> 
                <StyledEntregaItem> 
                    <div className="agp-cima"> 
                        <div className="column"> 
                            <div className="icon"> <img src="" alt="" /> </div>
                            <div className="definicao"> </div>
                        </div>
                        <div className="column"> 
                            <div className="icon"> <img src="" alt="" /> </div>
                            <div className="definicao"> </div>
                        </div>
                        <div className="column"> 
                            <div className="icon"> <img src="" alt="" /> </div>
                            <div className="definicao"> </div>
                        </div>
                        <div className="carregamento"> 
                            <div className="limite1"> <img src="" alt="" /> </div>
                            <div className="limite2">  <img src="" alt="" /> </div>
                            <div className="limite3">  <img src="" alt="" /> </div>
                        </div>
                    </div>
                </StyledEntregaItem>
            </main>
        </div>
    )
}