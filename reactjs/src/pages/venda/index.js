import Cabecalho from "../../components/cabecalho";
import CaixaJogo from "../../components/caixaJogo";
import Footer from "../../components/rodape";
import Paginacao from "../../components/paginacao";
import { StyledVenada } from "./styled";
import { useHistory } from "react-router";

import { useState, useEffect, useRef } from "react";
import LoadingBar from 'react-top-loading-bar'


import Api from "../../services/api";
const api = new Api();


export default function Venda(props) {
    const nave = useHistory();
    const pesquisa = props.location.state || '';
    const [produto, setProduto] = useState([]);
    const [order, setOrder] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const barraCarregamento = useRef(null);

    

   
 
    

    function irPara(pagina) {
        setPage(pagina)
    }

    useEffect(() => {


        function getCategory() {
            const query = '?categoria=';
            let search = props.location.search;
            if (!search.includes(query))
                return '';
            return search.substr(search.indexOf(query) + query.length);
        }
        
        const listar = async () => {
            barraCarregamento.current.continuousStart()
            let categoria = getCategory();
    
            const e = await api.listarProdutos(order, pesquisa.pesquisa, categoria, page)
    
            setProduto([...e.items]);
            setTotalPages(e.totalPaginas)

            if(e.items.length === 0) {
              return  nave.push('/vendaSemItem')
            }
            barraCarregamento.current.complete()
        }

        listar();

      

    }, [order, pesquisa, page, props.location.search])

    

    return (
        <div style={{ backgroundColor: "#333333" }}>
            <LoadingBar color="orange" ref={ barraCarregamento } />
            <Cabecalho />
            <StyledVenada>
                <main className='a'>
                    <div className="row-button">
                        <div className="ordem"> Ordenar: </div>
                        <div className="select-ordem">
                            <select id="order" onChange={e => setOrder(e.target.value)}>
                                <option defaultValue style={{ display: "none" }}> Escolha </option>
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
                        {produto.map(x =>
                            <div className="bottom"> <CaixaJogo key={x.id_produto} info={x} /> </div>
                        )}
                    </div>
                    <div className="pag">
                        <Paginacao
                            totalPaginas={totalPages}
                            pagina={page}
                            onPageChange={irPara}
                        />
                    </div>
                </main>
            </StyledVenada>
            <Footer />
        </div>
    )
}