import { StyledCabecalhoAdm } from "./styled";
import { StyledButtonAdm } from "../botaoAdm/styled";
import { StyledInput } from "../input/styled";
import { Link } from "react-router-dom";

export default function CabecalhoAdm(props) {
    return (
        <StyledCabecalhoAdm  nulob={props.nulob} nulo={props.nulo} bNulo={props.bNulo} > 
            <div className="agp"> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="game"> GameBud </div>
            </div>
            <div className="agp-input"> 
                <div className="input">  <StyledInput className="in" placeholder="Pesquisar Itens (Nome do Produto)" /> </div>
                <div className="pesquisar"> <button> <img src="/assets/images/Vector (8).svg" alt="" /> </button> </div>
            </div>
            <div className="column"> 
             <div className="nv">    <Link to="/gerenteAdicionar"> <StyledButtonAdm cor="laranja" style={{marginBottom:"1em", marginTop:"2em", textDecoration:"none"}} className="NV"> Novo Item </StyledButtonAdm> </Link> </div>
            <div className="pedidos">   <Link to="/gerentePedidos" style={{textDecoration:"none"}}> <StyledButtonAdm cor="laranja"  className="PE"> Pedidos </StyledButtonAdm> </Link> </div>
            </div>
        </StyledCabecalhoAdm>
    )
}