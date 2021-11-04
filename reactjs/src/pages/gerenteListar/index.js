import { Container } from "./styled.js"
import { StyledButtonAdm } from "../../components/botaoAdm/styled.js"
import Paginacao from "../../components/paginacao/index.js"
import CabecalhoAdm from "../../components/cabecalhoAdm/index.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Api from "../../services/api";

const api = new Api();

export default function GerenteNaosei(props) {
    const [info, setInfo] = useState(props.location.state);
    const [produtos, setProdutos] = useState([])

    async function listarProduto() {
        let data = await api.listarPedidoPorVenda(info);
        setProdutos(data);
        return data;
    }

    useEffect(() => {
        listarProduto()

    }, [])

    return (
        <div style={{ backgroundColor: "#333333" }}>
            <CabecalhoAdm nulo='true' />
            <Container >
                <main className="pc">
                    <div className="principal">
                        <table>
                            <thead>
                                <th>ID Produto:</th>
                                <th>Nome Do Produto:</th>
                                <th>Preço Do Produto:</th>
                                <th className="quantidade">Quantidade:</th>
                            </thead>
                            <tbody>
                                {produtos.map((item, i) => 
                                    <tr className={i % 2 === 1 ? "linha-1" : ""}>
                                        <td>{item.id_produto}</td>
                                        <td> {item.id_produto_infoa_gab_produto.nm_produto}</td>
                                        <td>{item.id_produto_infoa_gab_produto.vl_preco}</td>
                                        <td className="last-item">{item.qtd_produtos}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="bottom-menu">
                            <Link to="/gerentePedidos"><StyledButtonAdm cor="vermelho" className="voltar" style={{ marginRight: "20%", width: "10em" }}>Voltar</StyledButtonAdm></Link>
                            <Paginacao />
                        </div>

                    </div>
                </main>
                <main className="cell">
                    <div className="line-black">
                        <div className="coluna"> ID: </div>
                    </div>
                    <div className="line-gray">
                        <div className="valor-coluna"> 2345678 </div>
                    </div>
                    <div className="line-black">
                        <div className="coluna"> Produto: </div>
                    </div>
                    <div className="line-gray">
                        <div className="valor-coluna"> ProdutoSHow </div>
                    </div>
                    <div className="line-black">
                        <div className="coluna"> Preço: </div>
                    </div>
                    <div className="line-gray">
                        <div className="valor-coluna"> R$ 99,00 </div>
                    </div>
                    <div className="line-black">
                        <div className="coluna"> Quantidade: </div>
                    </div>
                    <div className="line-gray">
                        <div className="valor-coluna"> 1 </div>
                    </div>
                    <div className="line-black">
                        <div className="coluna1"> <StyledButtonAdm cor="vermelho" style={{ width: "10em" }}> Voltar </StyledButtonAdm> </div>
                    </div>
                    <div className="pag"> <Paginacao /> </div>
                </main>
            </Container>

        </div>
    )
}