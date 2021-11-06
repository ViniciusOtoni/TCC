import { StyledEscolha } from "./styled";

export default function Categoria(props) {
    
    
    
    return (
       <StyledEscolha cat={props.cat}>  
                <div className="imagem-categoria">  <img src={(props.img)} alt="" />  </div>
                <div className="titulo-categoria">  {(props.cat) }  </div>
                <div className="desc-categoria">    {(props.desc)}  </div>
        </StyledEscolha> 
    )
}