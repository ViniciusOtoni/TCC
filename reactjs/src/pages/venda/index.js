import Cabecalho from "../../components/cabecalho";
import CaixaJogo from "../../components/caixaJogo";
import Footer from "../../components/rodape";
import Paginacao from "../components/paginacao";
import { StyledVenada } from "./styled";


export default function Venda() {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho />
        <hr style={{marginLeft:"3.4em", marginRight:"3.4em"}} />
            <main style={{ width: "1340px", margin: "auto"}}> 
                <StyledVenada> 
                    <div className="row-button"> 
                        <div className="ordem"> Ordenar: </div>
                        <div className="select-ordem"> <select> <option value="ordem" selected> Ordem </option> </select> </div>
                    </div>
                    <div className="wrap"> 
                     <div className="bottom">    <CaixaJogo /> </div>
                     <div className="bottom">    <CaixaJogo /> </div>
                     <div className="bottom">    <CaixaJogo /> </div>

                     <div  className="bottom">    <CaixaJogo /> </div>
                     <div  className="bottom">    <CaixaJogo /> </div>
                     <div  className="bottom">    <CaixaJogo /> </div>

                     <div  className="bottom">    <CaixaJogo /> </div>
                     <div  className="bottom">    <CaixaJogo /> </div>
                     <div  className="bottom">    <CaixaJogo /> </div>
                    </div>
                    <Paginacao />
                </StyledVenada>
            </main>
            <Footer />
        </div>
    )
}