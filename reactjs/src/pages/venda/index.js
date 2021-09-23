import Cabecalho from "../../components/cabecalho";
import CaixaJogo from "../../components/caixaJogo";
import Footer from "../../components/rodape";
import Paginacao from "../../components/paginacao";
import { StyledVenada } from "./styled";


export default function Venda() {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho />
        
                <StyledVenada> 
                <main className='a'> 
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
                  <div className="pag">  <Paginacao /> </div>
                </main>
                </StyledVenada>
                
           
            <Footer />
        </div>
    )
}