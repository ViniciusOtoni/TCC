import Cabecalho from "../../components/cabecalho";
import CaixaJogo from "../../components/caixaJogo";
import Footer    from "../../components/rodape";
import Paginacao from "../../components/paginacao";
import { StyledVenada } from "./styled";

import { useState, useEffect } from "react";

import Api from "../../services/api";
const api = new Api();


export default function Venda(props) {
    const [pesquisa, setPesquisa] = useState(props.location.state || '')
    const [produto, setProduto] = useState([]);
    const [order, setOrder] = useState('');

    console.log(pesquisa)

    function getCategory() {
        const query = '?categoria=';
        let search = props.location.search;
        if(!search.includes(query))
            return '';
        return search.substr(search.indexOf(query) + query.length);
    }

    const listar = async () => {
        let categoria = getCategory();
        const e = await api.listarProdutos(order, pesquisa.pesquisa, categoria)
        setProduto(e);
    }

    useEffect(() => {
        listar();
    }, [order, pesquisa])

    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho />
                <StyledVenada> 
                <main className='a'> 
                    <div className="row-button"> 
                        <div className="ordem"> Ordenar: </div>
                        <div className="select-ordem"> 
                            <select id="order" onChange={e => setOrder(e.target.value)}> 
                                <option selected style={{ display: "none" }}> Escolha </option>
                                <option value="avaliacao"> Avaliação </option> 
                                <option value="lancamento"> Lançamento </option>
                                <option value="menor-maior"> Menor Preço </option>
                                <option value="maior-menor"> Maior Preço </option>
                                <option value="A-Z"> A-Z </option>
                                <option value="Z-A"> Z-A </option>
                            </select>
                        </div>
                    </div>
                    <div className="wrap"> 
                    {produto.map (x  => 
                        <div className="bottom"> <CaixaJogo key={x.id_produto} info={x} /> </div>
                     )}
                    </div>
                    <div className="pag">  <Paginacao  />  </div>
                </main>
                </StyledVenada>
            <Footer />
        </div>
    )
}