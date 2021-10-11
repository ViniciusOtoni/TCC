import { StyledButtonHome } from "../botaoHome/styled";
import { StyledJogo } from "./styled";
import { Link } from 'react-router-dom'

export default function CaixaJogo(props) {
    return (
       <StyledJogo> 
        <div className="imagem-jogo"> <img src={props.info.img_produto} alt="" /> </div>
        <div className="nome-jogo" title={props.info.nm_produto}> {props.info.nm_produto}  </div> 
        <div class="row1"> 
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /></div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
            <div class="avaliacao"> <img src="/assets/images/bi_star.svg" alt="" /> </div>
        </div>
        <div className="preco">{props.info.vl_preco} </div>
        <Link to={{ pathname:"/vendaUnica", state: props.info }} style={{textDecoration:"none"}}> <StyledButtonHome style={{paddingTop: "0.2em"}} className="absolute"> Comprar </StyledButtonHome> </Link>
    </StyledJogo>
    )
}