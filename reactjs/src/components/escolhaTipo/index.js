import { StyledEscolha } from "./styled";
import { Link } from 'react-router-dom'


export default function Categoria(props) {
    
    
    
    return (
       <StyledEscolha cat={props.cat}>  
            <div className="imagem-categoria">   <img src={(props.img)} alt="" />  </div>
            <Link to={`/venda?categoria=${props.cat}`} style={{textDecoration:"none"}}>    <div className="titulo-categoria">   {(props.cat) }  </div>
            <div className="desc-categoria">   {(props.desc)} </div> </Link>
        </StyledEscolha> 
    )
}