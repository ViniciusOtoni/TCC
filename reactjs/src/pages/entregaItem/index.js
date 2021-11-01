import { StyledEntregaItem } from "./styled";
import Cabecalho from "../../components/cabecalho";
import { Link } from 'react-router-dom';


export default function EntregaItem(props) {


    

    function hiddenCheck(a, b) {
        
        if (a === 'Saiu para entrega' && b === 1)
            return true
        else if (a === 'Saiu para entrega' && b === 2)
            return false
        else if (a === 'Saiu pra entrega' && b === 3)
            return false


        if(a === 'A Caminho' && b === 1)
            return true;
        else if (a === 'A Caminho' && b === 2)
            return true;
        else if (a === 'A Caminho' && b === 3)
            return false

        if (a === 'Entregue') 
            return true
        
    }

    function textColors() {
        
    }

    function checkfunction(a) {
        if (a === 'Entregue') {
            return 'a'
        } else if (a === 'Saiu para entrega') {
            return 'b'
        } else {
            return 'c'
        }
    }

    


    
    const a = hiddenCheck(props.location.state, 3);
    console.log(props.location.state)
   

    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho corLetra="nulo" />
           
            <StyledEntregaItem check={checkfunction(props.location.state)}>
                <main className="pc"> 
                    <div className="agp-cima">
                     <div className="row-cima">  
                        <div className="column"> 
                                <div className="icon"> {hiddenCheck(props.location.state, 1)
                                    ? <img src="/assets/images/lanchonete-verde.svg" alt="" />
                                    : <img src="/assets/images/lanchonete.svg" alt="" />}
                                </div>
                            <div className="definicao1" > Indo Para O Correio </div>
                        </div>
                        <div className="column"> 
                                <div className="icon"> {hiddenCheck(props.location.state, 2)
                                    ? <img src="assets/images/caminhao1-verde.svg" alt="" />
                                    : <img src="/assets/images/Caminhao1.svg" alt="" />}
                                </div>
                            <div className="definicao2" >  A Caminho </div>
                        </div>
                        <div className="column"> 
                                <div className="icon"> {hiddenCheck(props.location.state, 3)
                                    ? <img style={{ width: "7em", height: "7em", paddingBottom: "1em" }} src="/assets/images/Casa-verde.svg" alt="" /> 
                                    : <img style={{ width: "7em", height: "7em", paddingBottom: "1em" }} src="/assets/images/Casa.svg" alt="" /> }
                                </div>
                            <div className="definicao3"  corLetra={hiddenCheck(props.location.state, 3)}> Produto Entregue </div>
                        </div>
                        </div>
                        <div className="load-bar">  </div>
                        <div className="carregamento"> 
                                <div className="limite1"> {hiddenCheck ? <img src="/assets/images/box-check.svg" alt="" /> : <img src="/assets/images/box-check-green.svg" alt="" />}  </div>
                                <div className="limite2"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                                <div className="limite3"> <img src="/assets/images/box-check.svg" alt="" />  </div>
                        </div>
                    </div>
                    <div className="agp-baixo">
                        <div className="status"> 
                        <div className="titulo"> Situação: </div>
                            <div className="row-status"> 
                                <div className="botao-check1" > <button> </button> </div>
                                <div className="texto-status"> Indo para o Correio </div>
                                <div className="horario-status"> (2021-01-01) </div>
                            </div>
                            <div className="row-status"> 
                                <div className="botao-check2" > <button> </button> </div>
                                <div className="texto-status"> A Caminho </div>
                                <div className="horario-status">  (2021-02-01) </div>
                            </div>
                            <div className="row-status"> 
                                <div className="botao-check3"> <button> </button> </div>
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
                                <div className="botao-check"> <button>  </button> </div>
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