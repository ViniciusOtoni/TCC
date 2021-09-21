import { StyledButtonHome } from "../botaoHome/styled";
import { StyledJogo } from "./styled";

export default function CaixaJogo() {
    return (
       <StyledJogo> 
        <div className="imagem-jogo"> <img src="/assets/images/image 8.svg" alt="" /> </div>
        <div className="nome-jogo"> Outlast </div> 
        <div className="row1"> 
            <div className="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /></div>
            <div className="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div className="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div className="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div className="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
        </div>
        <div className="preco"> R$99.99 </div>
        <StyledButtonHome style={{paddingTop: "0.2em"}}> Comprar </StyledButtonHome>
    </StyledJogo>
    )
}