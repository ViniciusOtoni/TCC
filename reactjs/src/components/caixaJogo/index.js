import { StyledButtonHome } from "../botaoHome/styled";
import { StyledJogo } from "./styled";
import { Link } from 'react-router-dom'

export default function CaixaJogo() {
    return (
       <StyledJogo> 
        <div className="imagem-jogo"> <img src="/assets/images/image 8.svg" alt="" /> </div>
        <div className="nome-jogo"> Outlast </div> 
        <div class="row1"> 
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /></div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
        </div>
        <div className="preco"> R$99.99 </div>
        <Link to="/vendaUnica" style={{textDecoration:"none"}}> <StyledButtonHome style={{paddingTop: "0.2em"}}> Comprar </StyledButtonHome> </Link>
    </StyledJogo>
    )
}