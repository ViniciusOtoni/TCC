
import { StyledCabecalho } from "./styled"




export default function Cabecalho(props) {
    return (
      <StyledCabecalho corLetra ={props.corLetra}> 
        <main className="pc"> 
            <div className="logo-cabecalho"> <img src="/assets/images/logo.svg" alt="" /> 
                <div className="titulo">   GameBud </div>
            </div> 
            
            <div className="pesquisa"> <input className="input" placeholder="pesquise seu produto" /> </div>
            <div className="login"> Login </div>
            <div className="entrega">  Entregas  </div>
            <div className="carrinho"> </div>
            </main>
            <main className="cell"> 
            <div className="agp-direita"> 
                <div className="carrinho"> </div>
                <div className="lupa">  <img src="/assets/images/lupaCell.svg" alt="" /> </div>
            </div>

            <div className="logo-cabecalho"> <img src="/assets/images/logo.svg" alt=""  />  </div>
            <div className="login"> Login </div>
            </main>
            
        </StyledCabecalho>
    )
}

 