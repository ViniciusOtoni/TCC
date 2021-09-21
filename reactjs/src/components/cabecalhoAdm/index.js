import { StyledCabecalhoAdm } from "./styled";
import { StyledButtonAdm } from "../botaoAdm/styled";
import { StyledInput } from "../input/styled";

export default function CabecalhoAdm(props) {
    return (
        <StyledCabecalhoAdm nulo={props.nulo} > 
            <div className="agp"> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="game"> GameBud </div>
            </div>
            <div className="agp-input"> 
                <div className="input">  <StyledInput style={{borderRadius:"0em", width:"30em"}} placeholder="Pesquisar Itens (Nome do Produto)" /> </div>
                <div className="pesquisar"> <button> </button> </div>
            </div>
            <div className="column"> 
                <StyledButtonAdm cor="laranja" style={{marginBottom:"1em", marginTop:"2em"}}> Novo Item </StyledButtonAdm>
            <div className="pedidos">    <StyledButtonAdm cor="laranja"> Pedidos </StyledButtonAdm> </div>
            </div>

        </StyledCabecalhoAdm>
    )
}