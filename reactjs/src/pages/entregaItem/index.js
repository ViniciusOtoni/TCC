import { StyledEntregaItem } from "./styled";
import Cabecalho from "../../components/cabecalho";
import { Link } from 'react-router-dom'


export default function EntregaItem(props) {

    function hiddenCheck() {
        if (
            props.location.state === 'saiu para entrega' ||
            props.location.state === 'a caminho' ||
            props.location.state === 'entregue'
        )
        {
            return true
        } else
            return false
    }
    
    const a = hiddenCheck();
    console.log(props.location.state)
    console.log(a);

    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho corLetra="nulo" />
           
                <StyledEntregaItem> 
                <main className="pc"> 
                    <div className="agp-cima">
                     <div className="row-cima">  
                        <div className="column"> 
                            <div className="icon"> { <img src="/assets/images/lanchonete.svg" alt="" /> } </div>
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
                                <div className="limite1"> {hiddenCheck() ? <img src="/assets/images/box-check.svg" alt="" /> : <img src="/assets/images/box-check-green.svg" alt="" />}  </div>
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
                     <Link to="/">   <div className="voltar"> <button> Voltar </button> </div> </Link>
                    </div>
                    </main>
                    <main className="cell"> 
                        <div className="row"> 
                            <div className="column">
                                <div className="icon1"> <img src="/assets/images/lanchonete.svg" alt="" /> </div>
                                <div className="definicao1"> Indo Para O Correio </div>
                            </div>
                            <div className="limite1"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                        </div>
                        <div className="row">
                        <div className="column"> 
                            <div className="icon2"> <img src="/assets/images/Caminhao1.svg" alt="" /> </div>
                            <div className="definicao2">  A Caminho </div>
                        </div>
                        <div className="limite2"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                    </div>
                    <div className="row"> 
                    <div className="column"> 
                            <div className="icon3"> <img  src="/assets/images/Casa.svg" alt="" /> </div>
                            <div className="definicao3"> Produto Entregue </div>
                    </div>
                    <div className="limite3"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                    </div>
                    <div className="load-bar">  </div>
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
                                <div className="botao-check" hidden={hiddenCheck}> <button>  </button> </div>
                                <div className="texto-status"> Produto Entregue </div>
                                <div className="horario-status"> (2021-03-01) </div>
                            </div>
                        </div>
                        <Link to="/" style={{textDecoration: 'none'}} >    <button>  Voltar  </button> </Link>
                    </div>
                    </main>
                </StyledEntregaItem>
           
        </div>
    )
}