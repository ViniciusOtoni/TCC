import { StyledEscolha } from "./styled";
import { Link } from 'react-router-dom'


function alternar(cat) {
    if(cat === '1')
    return 'Canecas'
    else if (cat === '2')
    return 'Xbox'
    else if(cat === '3')
    return 'Roupas'
    else if(cat === '4')
    return 'Ps4'
    else if(cat === '5')
    return 'Outros'
 
}

function Desc(desc) {
    if(desc === '1')
    return 'Feitas Para Você!'
    else if (desc === '2')
    return 'Todos Os Jogos!'
}

function alternarImg(img) {
    if(img === '1')
    return '/assets/images/caneca.svg'
    else if (img === '2')
    return '/assets/images/xbox.svg'
    else if(img === '3')
    return '/assets/images/camiseta.svg'
    else if(img === '4')
    return '/assets/images/Ps4.svg'
    else if(img === '5')
    return '/assets/images/personalizado.svg'
}


export default function Categoria(props) {
    return (
        
       <StyledEscolha cat={props.cat}>  
            <div className="imagem-categoria">   <img src={alternarImg(props.img)} alt="" />  </div>
            <Link to="/venda" style={{textDecoration:"none"}}>    <div className="titulo-categoria">   {alternar(props.cat) }  </div>
            <div className="desc-categoria">   {Desc(props.desc)} </div> </Link>
        </StyledEscolha> 
    )
}