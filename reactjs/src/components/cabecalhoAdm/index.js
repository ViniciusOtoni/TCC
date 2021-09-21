import { StyledCabecalhoAdm } from "./styled";
import { StyledButtonAdm } from "../botaoAdm/styled";
import { StyledInput } from "../input/styled";

export default function CabecalhoAdm() {
    return (
        <StyledCabecalhoAdm> 
            <div className="agp" style={{display: "flex", flexDirection:"row", paddingTop:"1em", alignSelf:"center"}}> 
                <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="game" style={{color:"#F0AC54", fontFamily:"MontserratBold", fontSize:"2em"}}> GameBud </div>
            </div>
            <div className="agp-input"> 
                <div className="input">  <StyledInput style={{borderRadius:"0em", width:"30em"}} placeholder="Pesquisar Itens (Nome do Produto)" /> </div>
                <div className="pesquisar"> <button> </button> </div>
            </div>
            <div className="column"> 
                <StyledButtonAdm cor="laranja" style={{marginBottom:"2em"}}> Novo Item </StyledButtonAdm>
                <StyledButtonAdm cor="laranja"> Pedidos </StyledButtonAdm>
            </div>

        </StyledCabecalhoAdm>
    )
}