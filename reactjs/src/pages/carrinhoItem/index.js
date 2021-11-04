import { StyledCarrinhoItem } from "./styled"
import Cabecalho from "../../components/cabecalho"
import Footer from "../../components/rodape"
import { StyledInput } from "../../components/input/styled"
import { StyledButtonVerde } from "../../components/botaoVerde/styled"
import axios from "axios"
import { Link } from "react-router-dom"
import Cookie from 'js-cookie'
import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import BoxItemCarrinho from './comps/boxItem'



export default function CarrinhoItem() {
    const [produto, setProduto] = useState([])
    const [vlFinal, setVlFinal] = useState(0);
    const [loc, setLoc] = useState({});
    const [teste, setTeste] = useState(calcularFinalFrete())
    const [cep, setCep] = useState(false);
    const [vlCep, setVlCep] = useState('');
    const navegation = useHistory()

    console.log(produto)
    console.log(teste)
    console.log(setTeste)
    

    useEffect(  function carregarCarrinho() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
            ? JSON.parse(carrinho)
            : [];

        if (carrinho.length === 0)
            navegation.push('/carrinho')


        setProduto(carrinho)
        
    }
, [ navegation ])

    



    function removerProduto(id) {
        let carrinho = produto.filter(x => x.id !== id)

        Cookie.set('carrinho', JSON.stringify(carrinho))
        setProduto([...carrinho])

        carregarCarrinho()
    }


    function carregarCarrinho() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
            ? JSON.parse(carrinho)
            : [];

        if (carrinho.length === 0)
            navegation.push('/carrinho')


        setProduto(carrinho)
    }




    function respFilho() { //função reduce pega um item do array por vês
        let total = produto.reduce((a, b) => a + b.total, 0)
        setVlFinal(total)
    }

    function calcularFinalFrete() {
        produto.frete = Math.round(vlFinal + (loc.uf === 'SP' ? 50 : loc.uf === 'RJ' ? 130 : 0))
    }

    async function buscarCep() {
        let r1 = vlCep.length

        if (r1 === 8)
            setCep(true)

        const resp = await axios.get(`https://viacep.com.br/ws/${vlCep}/json/`);
        setLoc(resp.data);
    }



    return (
        <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho />

            <StyledCarrinhoItem>
                <main className="pc">

                    <div className="cabecalho">
                        <div className="titulo"> Carrinho: </div>
                        <div class="itens-direita">
                            <div className="quantidade"> Quantidade: </div>
                            <div className="preco"> Preço: </div>
                        </div>
                    </div>


                    {produto.map(x =>
                        <BoxItemCarrinho key={x.id} info={x} onRemove={removerProduto} respostaFilho={respFilho} />
                    )}

                    <div className="main-cep">
                        <div className="row-input">
                            <div className="frete"> Frete: </div>
                            <div className="input-frete">  <StyledInput value={vlCep} placeholder=" Cep" style={{ width: "8em" }} onChange={e => setVlCep(e.target.value)} /> </div>
                            <div className="botao-frete"> <StyledButtonVerde onClick={buscarCep} style={{ width: "7em", height: "1.8em", marginLeft: "2em" }}> Calcular </StyledButtonVerde> </div>
                        </div>
                        {cep && <div>
                            <div className="rua"> {` - ${loc.logradouro},`}  </div>
                            <div className="bairro"> {` - ${loc.bairro},`}  </div>
                            <div className="estado">  {` - ${loc.localidade}`} </div>

                            <div className="row-val">
                                <div className="titulo-val"> Preço: </div>
                                <div className="valor-val"> {` R$: ${loc.uf === 'SP' ? (50) : loc.uf === 'RJ' ? (130) : 0} `}  </div>
                            </div>
                            <div className="row-val">
                                <div className="titulo-val"> Previsão: </div>
                                <div className="valor-val1"> {loc.uf === 'SP' ? `${4} dias` : loc.uf === 'RJ' ? `${8} dias` : `${20} dias`}  </div>
                            </div>
                        </div>
                        }
                    </div>

                    <div className="agp-realizar">

                        <div className="row-preco">
                            <div className="sub-total-baixo"> Sub-Total: </div>
                            <div className="sub-valor-final"> {`R$: ${Math.round(vlFinal)}`} </div>
                        </div>
                        <div className="row-preco">
                            <div className="total-valor-baixo"> Total: </div>
                            <div className="total-final"> {`R$: ${produto.frete}`} </div>
                        </div>
                        <div className="botao-finalizar"> <Link to={{ pathname: "concluirCompra", state: produto }}> <StyledButtonVerde style={{ padding: ".3em", marginBottom: "1em", marginRight: "2em", width: "14em" }}> Realizar Compra! </StyledButtonVerde> </Link> </div>
                    </div>
                </main>



                <main className="cell">
                    <div className="cabecalho">
                        <div className="titulo"> Carrinho: </div>
                    </div>


                    {produto.map(x =>
                        <BoxItemCarrinho key={x.id_produto} info={x} onRemove={removerProduto} respostaFilho={respFilho} />
                    )}
                    <div className="row-input">
                        <div className="frete"> Frete: </div>
                        <div className="input-frete">  <StyledInput value={vlCep} onChange={e => setVlCep(e.target.value)} placeholder="Cep" className="cep" /> </div>
                        <div className="botao-frete">  <StyledButtonVerde style={{ width: "7em", height: "1.8em", marginLeft: "2em" }}> Calcular </StyledButtonVerde> </div>
                    </div>

                    {cep && <div>
                        <div className="valor-cep">
                            <div className="rua"> Nome da Rua Bonito  </div>
                            <div className="bairro"> Bairro com Nome Bonito  </div>
                            <div className="estado">  Cidade com Nome Bonita </div>
                        </div>
                        <div className="row-val">
                            <div className="titulo-val"> Previsão: </div>
                            <div className="valor-val1"> 4 dias </div>
                        </div>
                        <div className="row-val">
                            <div className="titulo-val"> Preço: </div>
                            <div className="valor-val1"> R$ 10,00 </div>
                        </div>
                    </div>
                    }


                    <div className="agp-realizar">
                        <div className="row-preco">
                            <div className="sub-total-baixo"> Sub-Total: </div>
                            <div className="sub-valor-final"> {` R$: ${Math.round(vlFinal)}`} </div>
                        </div>
                        <div className="row-preco">
                            <div className="total-valor-baixo"> Total: </div>
                            <div className="total-final"> R$:99,99 </div>
                        </div>
                        <div className="botao-finalizar"> <Link to="/concluirCompra"> <StyledButtonVerde style={{ padding: ".3em" }} className="green">  Realizar Compra!  </StyledButtonVerde> </Link>   </div>
                    </div>
                </main>
            </StyledCarrinhoItem>


            <Footer />
        </div>
    )
}