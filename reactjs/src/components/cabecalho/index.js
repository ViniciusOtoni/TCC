
import { StyledCabecalho } from "./styled"




export default function Cabecalho(props) {
    return (
      <StyledCabecalho corLetra ={props.corLetra}> 
            <div className="logo-cabecalho"> <img src="/assets/images/logo.svg" alt="" /> 
                <div className="titulo"> GameBud </div>
            </div> 
            
            <div className="pesquisa"> <input className="input" placeholder="pesquise seu produto" /> </div>
            <div className="login"> Login </div>
            <div className="entrega">  Entregas  </div>
            <div className="carrinho"> </div>
        </StyledCabecalho>
    )
}

 