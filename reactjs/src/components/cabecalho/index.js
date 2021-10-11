
import { StyledCabecalho } from "./styled"
import { Link } from "react-router-dom"




export default function Cabecalho(props) {
    return (
      <StyledCabecalho corLetra ={props.corLetra}> 
        <main className="pc"> 
            <div className="logo-cabecalho"> <img src="/assets/images/logo.svg" alt="" /> 
            <Link to="/" style={{textDecoration:"none"}}>     <div className="titulo">   GameBud </div> </Link>
            </div> 
            
            <div className="pesquisa"> <input className="input" placeholder="pesquise seu produto" /> </div>
            <Link to="/login" style={{textDecoration:"none"}}>   <div className="login"> Login </div> </Link>
           <Link to="/escolhaEntrega" style={{textDecoration:"none"}}> <div className="entrega">  Entregas  </div> </Link>
           <Link to="/carrinhoItem" style={{textDecoration:"none"}}> <div className="carrinho"> </div> </Link>
            </main>
            <main className="cell"> 
            <div className="agp-direita"> 
                <div className="carrinho"> </div>
                <div className="lupa">  <img src="/assets/images/lupaCell.svg" alt="" /> </div>
            </div>

            <div className="logo-cabecalho"> <img src="/assets/images/logo.svg" alt=""  />  </div>
            <div className="column">
                <div className="login"> Login </div>
                <div className="entrega"> Entregas </div>
                </div>
            </main>
            <hr />
            
        </StyledCabecalho>
    )
}

 