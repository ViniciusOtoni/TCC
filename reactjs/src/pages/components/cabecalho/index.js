import { StyledCabecalho } from "./styled"


export default function Cabecalho() {
    return (
      <StyledCabecalho> 
            <div className="logo-cabecalho"> <img src="/assets/images/logo.svg" alt="" /> 
                <div className="titulo"> GameBud </div>
            </div> 
            <div className="pesquisa"> <input className="input" placeholder="pesquise seu produto" /> </div>
            <div className="login"> Login
                <div className="carrinho"> <img src="/assets/images/carrinho.svg" alt="" /> </div>
            </div>
        </StyledCabecalho>
    )
}