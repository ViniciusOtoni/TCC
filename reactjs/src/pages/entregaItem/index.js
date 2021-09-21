import { StyledEntregaItem } from "./styled";
import Cabecalho from "../../components/cabecalho";

export default function EntregaItem() {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho corLetra="nulo"/>
        <hr style={{marginLeft:"3.6em", marginRight:"3.6em", borderColor:"#F0AC54"}} />
            <main style={{width:"1240px", margin:"auto"}}> 
                <StyledEntregaItem> 
                    <div className="agp-cima">
                     <div className="row-cima">  
                        <div className="column"> 
                            <div className="icon"> <img src="/assets/images/lanchonete.svg" alt="" /> </div>
                            <div className="definicao1"> Indo Para O Correio </div>
                        </div>
                        <div className="column"> 
                            <div className="icon"> <img src="/assets/images/Caminhao1.svg" alt="" /> </div>
                            <div className="definicao2">  A Caminho </div>
                        </div>
                        <div className="column"> 
                            <div className="icon"> <img style={{width:"7em", height:"7em", paddingBottom:"1em"}} src="/assets/images/Casa.svg" alt="" /> </div>
                            <div className="definicao3"> Produto Entregue </div>
                        </div>
                        </div>
                        <div className="load-bar">  </div>
                        <div className="carregamento"> 
                                <div className="limite1"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                                <div className="limite2"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                                <div className="limite3"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                        </div>
                    </div>
                    <div className="agp-baixo">
                        <div className="status"> 
                        <div className="titulo"> Situação: </div>
                            <div className="row-status"> 
                                <div className="botao-check"> <button> </button> </div>
                                <div className="texto-status"> Indo para o Correio </div>
                                <div className="horario-status"> (2021-01-01) </div>
                            </div>
                            <div className="row-status"> 
                                <div className="botao-check"> <button> </button> </div>
                                <div className="texto-status"> A Caminho </div>
                                <div className="horario-status">  (2021-02-01) </div>
                            </div>
                            <div className="row-status"> 
                                <div className="botao-check"> <button> </button> </div>
                                <div className="texto-status"> Produto Entregue </div>
                                <div className="horario-status"> (2021-03-01) </div>
                            </div>
                        </div>
                        <div className="voltar"> <button> Voltar </button> </div>
                    </div>
                </StyledEntregaItem>
            </main>
        </div>
    )
}