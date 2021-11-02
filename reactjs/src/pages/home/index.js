
// teste github
import Cabecalho from "../../components/cabecalho"
import Footer from "../../components/rodape/index"
import CaixaJogo from "../../components/caixaJogo"
import Categoria from "../../components/escolhaTipo"
import { StyledConteudo, Bolota } from "./styled"
import { StyledButtonHome } from "../../components/botaoHome/styled"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../index.css'
import "animate.css"

import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"

import Api from "../../services/api"
const api = new Api();

export default function Home() {

    const [populares, setPopulares] = useState([]);

    const listarPopulares = async () => {
        const e = await api.listarProdutosPopulares()
        setPopulares(e);
    }

    useEffect(() => {
        listarPopulares()
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <main style={{ backgroundColor: "#333333", margin: "auto", position: "relative" }}>
            <Bolota> <img src="/assets/images/Koko Caramel 3.svg" alt="" /> </Bolota>
            <Cabecalho corLetra="branco" />
            <StyledConteudo>

                <main>
                    <div className="row">
                        <div className="agp-melhor">
                            <div className="texto-melhor"> A Melhor </div>
                            <div className="texto-melhor"> Loja Do Brasil </div>
                            <div className="saiba-mais"> <Link to="/saibaMais" style={{ textDecoration: 'none' }}> <StyledButtonHome className="teste">Saiba Mais! </StyledButtonHome> </Link>  </div>
                        </div>
                        <div className="logo"> <img src="/assets/images/controle.svg" alt="" /> </div>
                    </div>
                    <section className="faixa2">
                        <div className="titulo"> Mais Populares:  </div>
                        <div class="barra"> </div>
                        <div className="lista-produtos">
                            <Carousel responsive={responsive}
                                infinite={true}
                                showDots={false}
                                autoPlay={true}
                                containerClass="carousel-container"
                                dotListClass="custom-dot-list-style">
                                {populares.map(x => <CaixaJogo key={x.id} info={x} />)}
                            </Carousel>
                        </div>
                    </section>

                    <section className="faixa3">
                        <div className="row2">
                            <div className="a1">
                                <Link to='/venda?categoria=Caneca' style={{ textDecoration: "none" }}>
                                    <Categoria cat="Caneca" desc="Feitas Para Você!" img="/assets/images/caneca.svg" />
                                </Link>
                            </div>
                            <div className="a2">
                                <Link to='/venda?categoria=Xbox' style={{ textDecoration: "none" }}>
                                    <Categoria cat="Xbox" desc="Todos Os Jogos!" img="/assets/images/xbox.svg" />
                                </Link>
                            </div>
                            <div className="a3">
                                <Link to='/venda?categoria=Roupa' style={{ textDecoration: "none" }}>
                                    <Categoria cat="Roupa" desc="Feitas Para Você!" img="/assets/images/camiseta.svg" />
                                </Link>
                            </div>
                        </div>
                        <div class="row2">
                            <div className="a4">
                                <Link to='/venda?categoria=Ps4' style={{ textDecoration: "none" }}>
                                    <Categoria cat="PlayStation" desc="Todos Os Jogos!" img="/assets/images/Ps4.svg" />
                                </Link>
                            </div>
                            <div className="a5">
                                <Link to='/venda?categoria=Outros' style={{ textDecoration: "none" }}>
                                    <Categoria cat="Outros" desc="Feitas Para Você!" img="/assets/images/personalizado.svg" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>

            </StyledConteudo>
            <Footer />
        </main>
    )
}