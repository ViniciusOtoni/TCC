
import { StyledEscolhaEntrega } from "./styled"
import Cabecalho from "../../components/cabecalho"
import Paginacao from "../../components/paginacao"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'

import Cookies from "js-cookie";

import Api from "../../services/api"
const api = new Api()


export default function EscolhaEntrega() {

    const nave = useHistory()
    let usuarioLogado = lerUsuarioQuelogou() || {}

    const [infoPedido, setInfoPedido] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [id, setId] = useState(usuarioLogado.id_usuario)

    function irPara(pagina) {
        setPage(pagina)
    }

    useEffect(() => {
        pedidosUsu()
    }, [ page ])

    const pedidosUsu = async () => {
        let r = await api.listarPedidosDoUsuario(id, page)


        if (r.items.length === 0 ) {
            nave.push('/carrinho')
        }

        setInfoPedido([...r.items])
        setTotalPage(r.totalPaginas)
    }


    function lerUsuarioQuelogou() {
        let logado = Cookies.get('usuario-logado');

        if (logado === undefined) {
            toast.dark('Loga ae');
            nave.push('/carrinhoItem')
        } else {
            let usuarioLogado = JSON.parse(logado);
            return usuarioLogado;
        }


    }

    return (
        <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho />

            <StyledEscolhaEntrega>
                <main className="pc">
                    <div className="titulo"> Seus Pedidos: </div>
                    <div className="row">
                        <div className="column">
                            <div className="title-column"> Data Do Pedido: </div>
                            {infoPedido.map(x =>
                                <div className="pedido"> {x.id_venda_infoa_gab_venda.dt_venda.replace('Z', '')} </div>
                            )}
                        </div>
                        <div className="column">
                            <div className="title-column"> Quantidade De Itens: </div>
                            {infoPedido.map(x =>
                                <div className="pedido"> {x.id_venda_infoa_gab_venda.qtd_itens} </div>
                            )}
                        </div>
                        <div className="column">
                            <div className="title-column"> Valor Total: </div>
                            {infoPedido.map(x =>
                                <div className="pedido"> {x.id_venda_infoa_gab_venda.vl_total} </div>
                            )}
                        </div>
                        <div className="column-acao">
                            <div className="title-column"> Inspecionar: </div>
                            {infoPedido.map(x => <Link to={{ pathname: "/entregaItem", state: x }}> {console.log(x)}  <div className="verificar-botao"> <button> Verificar  </button> </div> </Link>)}
                        </div>

                    </div>
                    <div className="pag">
                        <Paginacao
                            style={{ justifyContent: "center" }}
                            totalPaginas={totalPage}
                            pagina={page}
                            onPageChange={irPara}
                        />
                    </div>
                </main>
                <main className="cell">
                    <div className="titulo"> Seus Pedidos </div>
                    <div className="column">
                        <div className="title-column"> Data Do Pedido: </div>
                        <div className="pedido"> 2021-01-01 </div>
                    </div>
                    <div className="column">
                        <div className="title-column"> Quantidade De Itens: </div>
                        <div className="pedido"> 1 </div>
                    </div>
                    <div className="column">
                        <div className="title-column"> Valor Total: </div>
                        <div className="pedido"> R$199,00 </div>
                    </div>
                    <div className="column-acao">
                        <div className="verificar-botao"> <button> Verificar </button> </div>
                    </div>
                    <Paginacao />
                </main>
            </StyledEscolhaEntrega>

        </div>

    )
}