import { StyledButtonHome } from "../botaoHome/styled";
import { StyledJogo } from "./styled";
import { Link } from 'react-router-dom'
import { useState } from "react";
import Api from "../../services/api";
const api = new Api()





export default function CaixaJogo(props) {


    const [ vlAvaliacao, setVlAvaliacao ] = useState(0)
    const [ idProduto, setIdProduto ] = useState(0)

    const atualizarAvaliacao = async (num, id) => {
       setVlAvaliacao(num)
       setIdProduto(id)
       
       await api.alterarAvaliacao(idProduto, vlAvaliacao)
    }

    
    

    return (
       <StyledJogo> 
       
        <div className="imagem-jogo"> <img src={props.info.imagem} alt="" /> </div>
        <div className="nome-jogo" title={props.info.produto}> {props.info.produto != null && props.info.produto.length >= 27
                                                                                                        ? props.info.produto.substr(0, 27) + "..."
                                                                                                        : props.info.produto}  </div> 
        <div class="row1"> 
            <div class="avaliacao"> <img onClick={() => atualizarAvaliacao(1, props.info.id)}  src={vlAvaliacao >= 1 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt=""  />  </div>
            <div class="avaliacao"> <img onClick={() => atualizarAvaliacao(2, props.info.id)}  src={vlAvaliacao >= 2 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
            <div class="avaliacao"> <img onClick={() => atualizarAvaliacao(3, props.info.id)}  src={vlAvaliacao >= 3 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
            <div class="avaliacao"> <img onClick={() => atualizarAvaliacao(4, props.info.id)}  src={vlAvaliacao >= 4 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
            <div class="avaliacao"> <img onClick={() => atualizarAvaliacao(5, props.info.id)}  src={vlAvaliacao === 5 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
        </div>
        <div className="preco">{` R$: ${props.info.preco}`} </div>
        <Link to={{ pathname:"/vendaUnica", state: props.info }} style={{textDecoration:"none"}}> <StyledButtonHome style={{paddingTop: "0.2em"}} className="absolute"> Comprar </StyledButtonHome> </Link>
        
    </StyledJogo>
    )
}