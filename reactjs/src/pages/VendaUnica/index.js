import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/rodape'
import { StyledButtonVerde } from '../../components/botaoVerde/styled'
import { Content } from './styled'
import { Conteudo } from './styled'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from 'react-router'
import Cookie from 'js-cookie'
import Api from '../../services/api'
// import Cookies from 'js-cookie'
const api = new Api()

export default function VendaUnica(props) {

    const [produto, setProduto] = useState(props.location.state)
    const [mandar, setMandar] = useState([produto])
    const [img, setImg] = useState(0)
    const [vlAvaliacao, setVlAvaliacao] = useState(0)
    const [idProduto, setIdProduto] = useState(0)

   console.log(produto)

    //Cookies.remove('carrinho')

    const atualizarAvaliacao = async (num, id) => {
        setVlAvaliacao(num)
        setIdProduto(id)

        await api.alterarAvaliacao(idProduto, vlAvaliacao)

        produto.quantidade = 1;
    }
    const navegation = useHistory()

    function comprar() {
        let carrinho = Cookie.get('carrinho')
        carrinho = carrinho !== undefined
            ? JSON.parse(carrinho)
            : [];

        if (!carrinho.some(x => x.id === produto.id)) {
            carrinho.push({ ...produto });
        }

        Cookie.set('carrinho', JSON.stringify(carrinho));
        
        navegation.push('/carrinhoItem')
    }

    return (
        <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho />
            <Conteudo>
                <main className="pc">
                    <div className="title"> {produto.produto} </div>
                    <Content>
                        <div className="align-content">
                            <div className="content-images">
                                <div className="images">
                                    <img onClick={() => setImg(1)} src={img === 1 ? produto.imagem : produto.imagem_dois} alt="" />
                                    <img onClick={() => setImg(2)} src={img === 2 ? produto.imagem : produto.imagem_tres} alt="" />
                                    <img onClick={() => setImg(3)} src={img === 3 ? produto.imagem : produto.imagem_quatro} alt="" />
                                </div>
                                <img onClick={() => setImg(0)} className="image-main" src={img === 1 ? produto.imagem_dois
                                    : img === 2 ? produto.imagem_tres
                                        : img === 3 ? produto.imagem_quatro
                                            : produto.imagem} alt="" />
                            </div>
                            <div>
                                <div className="align-stars">
                                    <img onClick={() => atualizarAvaliacao(1, produto.id)} className="star" src={vlAvaliacao >= 1 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                    <img onClick={() => atualizarAvaliacao(2, produto.id)} className="star" src={vlAvaliacao >= 2 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                    <img onClick={() => atualizarAvaliacao(3, produto.id)} className="star" src={vlAvaliacao >= 3 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                    <img onClick={() => atualizarAvaliacao(4, produto.id)} className="star" src={vlAvaliacao >= 4 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                    <img onClick={() => atualizarAvaliacao(5, produto.id)} className="star" src={vlAvaliacao === 5 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                </div>
                                <div className="text"> Vendido e entregue por GameBud </div>
                                <div className="preco"> {`Preço: R$${produto.preco}`} </div>
                                <div className="text"> {`em 5x de R$  ${Math.round(produto.preco / 5)} sem juros`} </div>

                                <div className="align-button">
                                    <StyledButtonVerde style={{ padding: ".7em 3em", margin: ".8em 0em", fontFamily: "semiBold" }} onClick={comprar}> Adicionar ao carrinho  </StyledButtonVerde>
                                    <Link to={{ pathname: "concluirCompra", state: mandar }}> <StyledButtonVerde style={{ padding: ".7em 4.7em", fontFamily: "semiBold" }}> Comprar agora </StyledButtonVerde> </Link>
                                </div>
                            </div>
                        </div>
                        
                            <hr />
                            <div className="descProduto">  {produto.ds_produto} </div>
                      
                    </Content>
                </main>
                <main className="cell">
                    <Content>
                        <div className="align-content">
                            <div className="titulo1"> {produto.produto} </div>
                            <img className="image-main" src={produto.imagem} alt="" />

                            <div className="align-stars">
                                <img onClick={() => atualizarAvaliacao(1, produto.id)} className="star" src={vlAvaliacao >= 1 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                <img onClick={() => atualizarAvaliacao(2, produto.id)} className="star" src={vlAvaliacao >= 2 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                <img onClick={() => atualizarAvaliacao(3, produto.id)} className="star" src={vlAvaliacao >= 3 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                <img onClick={() => atualizarAvaliacao(4, produto.id)} className="star" src={vlAvaliacao >= 4 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                                <img onClick={() => atualizarAvaliacao(5, produto.id)} className="star" src={vlAvaliacao === 5 ? "/assets/images/estrelaPreenchidaDark.svg" : "/assets/images/bi_star_black.svg"} alt="" />
                            </div>

                            <div className="titulo"> Preco: </div>
                            <div className="preco"> {`R$${produto.preco}`} </div>
                            <div className="text"> {`em 5x de R$  ${(produto.preco / 5)} sem juros`} </div>
                            <div className="text"> Vendido e entregue por GameBud </div>
                        </div>
                    </Content>
                    <div className="align-button">
                        <StyledButtonVerde style={{ padding: ".7em 2em", margin: ".8em 0em", fontFamily: "semiBold" }} className="gren" onClick={comprar}> Adicionar ao carrinho  </StyledButtonVerde>
                        <StyledButtonVerde style={{ padding: ".7em 2em", fontFamily: "semiBold" }} className="gren"> Comprar agora! </StyledButtonVerde>
                    </div>
                </main>
            </Conteudo>
            <Footer />
        </div>
    )
}