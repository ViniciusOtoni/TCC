import { StyledEscolha } from "./styled";


function titulo(cat) {
    if(cat === 1)
    return 'Canecas'
    else if (cat === 2)
    return 'Xbox'
    else if(cat === 3)
    return 'Roupas'
    else if(cat === 4)
    return 'Ps4'
    else 
    return 'Customizados'
}

export default function Categoria(props) {
    return (
        
        <StyledEscolha cat={props.cat}> 
            <div className="imagem-categoria"> <img src="/assets/images/Vector (4).svg" alt="" />  </div>
            <div className="titulo-categoria"> {props => titulo(props.cat)} </div>
            <div className="desc-categoria"> Todos Os Jogos </div>
        </StyledEscolha>
    )
}