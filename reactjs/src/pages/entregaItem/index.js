import { StyledEntregaItem } from "./styled";
import Cabecalho from "../../components/cabecalho";
import { Link } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";


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

    function sizeBar(a) {
        if (a === 'Saiu para entrega')
            return 15
        else if (a === 'A Caminho')
            return 50
        else
            return 100
        
    }

   


    function conditions(a) {
        if (a === 'Saiu para entrega')
            return 'Saiu para entrega'
        else if (a === "A Caminho")
            return "A caminho"
        else
            return 'Entregue'
    }
    

    


    
    const a = hiddenCheck(props.location.state, 3);
    console.log(props.location.state)
   

    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho corLetra="nulo" />
           
            <StyledEntregaItem conditions={conditions(props.location.state)}>
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
                        <ProgressBar width="90%" completed={sizeBar(props.location.state)} maxCompleted={100} bgColor="#008000" margin="10px 50px"  padding="20px 20px 40px 20px" isLabelVisible={false} baseBgColor="white"	 />
                        <div className="carregamento"> 
                                <div className="limite1"> {hiddenCheck(props.location.state, 1) ? <img src="/assets/images/box-check-green.svg" alt="" /> : <img src="/assets/images/box-check.svg" alt="" />}  </div>
                            <div className="limite2"> {hiddenCheck(props.location.state, 2) ? <img src="/assets/images/box-check-green.svg" alt="" /> : <img src="/assets/images/box-check.svg" alt="" />} </div>
                            <div className="limite3"> {hiddenCheck(props.location.state, 3) ? <img src="/assets/images/box-check-green.svg" alt="" /> : <img src="/assets/images/box-check.svg" alt="" />} </div>
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