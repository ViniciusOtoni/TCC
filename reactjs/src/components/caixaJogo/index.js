import { StyledButtonHome } from "../botaoHome/styled";
import { StyledJogo } from "./styled";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { convert } from "../../utils/convertCurrency";


function exibirImagem(img) {
    if (img.includes('http'))
        return img
    else
        return `http://192.168.0.80:3030/exibirImagem?imagem=${img}`
}



export default function CaixaJogo(props) {


   

    const [ vlAvaliacao, setVlAvaliacao ] = useState(props.info.avalicao)
  
    console.log(props.info)
    const x = props.info.preco


    return (
       <StyledJogo> 
       
        <div className="imagem-jogo"> <img src={exibirImagem(props.info.imagem)} alt="" /> </div>
        <div className="nome-jogo" title={props.info.produto}> {props.info.produto != null && props.info.produto.length >= 27
                                                                                                        ? props.info.produto.substr(0, 27) + "..."
                                                                                                        : props.info.produto}  </div> 
        <div class="row1"> 
            <div class="avaliacao"> <img   src={vlAvaliacao >= 1 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt=""  />  </div>
            <div class="avaliacao"> <img   src={vlAvaliacao >= 2 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
            <div class="avaliacao"> <img   src={vlAvaliacao >= 3 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
            <div class="avaliacao"> <img   src={vlAvaliacao >= 4 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
            <div class="avaliacao"> <img   src={vlAvaliacao === 5 ? '/assets/images/estrelaPreenchida.svg' : '/assets/images/bi_star.svg'} alt="" /> </div>
        </div>
        <div className="preco">{` R$: ${convert(props.info.preco)}`} </div>
        <Link to={{ pathname:"/vendaUnica", state: props.info }} style={{textDecoration:"none"}}> <StyledButtonHome style={{paddingTop: "0.2em"}} className="absolute"> Comprar </StyledButtonHome> </Link>
        
    </StyledJogo>
    )
}

export { exibirImagem };