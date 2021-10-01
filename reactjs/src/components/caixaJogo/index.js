import { StyledButtonHome } from "../botaoHome/styled";
import { StyledJogo } from "./styled";
import { Link } from 'react-router-dom'

export default function CaixaJogo(props) {
    return (
       <StyledJogo> 
        <div className="imagem-jogo"> <img src={props.image} alt="" /> </div>
        <div className="nome-jogo" title={props.name2}> {props.name}  </div> 
        <div class="row1"> 
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /></div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
        </div>
        <div className="preco">{props.price} </div>
        <Link to="/vendaUnica" style={{textDecoration:"none"}}> <StyledButtonHome style={{paddingTop: "0.2em"}}> Comprar </StyledButtonHome> </Link>
    </StyledJogo>
    )
}