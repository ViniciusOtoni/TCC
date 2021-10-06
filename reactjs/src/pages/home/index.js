import Cabecalho from "../../components/cabecalho"
import { StyledConteudo, Bolota } from "./styled"
import { StyledButtonHome  } from "../../components/botaoHome/styled"
import Footer  from "../../components/rodape/index"
import CaixaJogo from "../../components/caixaJogo"
import Categoria from "../../components/escolhaTipo"


import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
        desktop: {
          breakpoint: { max: 1920, min: 1240 },
          items: 3,
          slidesToSlide: 3// optional, default to 1.
        },
       
      };
    
    return (
        <main style={{backgroundColor:"#333333",  margin:"auto", position:"relative"}}>
        <Bolota> <img src="/assets/images/Koko Caramel 3.svg" alt=""/> </Bolota>
        <Cabecalho corLetra="branco"  /> 
        <StyledConteudo> 
        <main>   
           <div className="row">
            <div className="agp-melhor"> 
                <div className="texto-melhor"> A Melhor </div>
                <div className="texto-melhor"> Loja Do Brasil </div>
                <div className="saiba-mais"> <Link to="/saibaMais" style={{textDecoration: 'none'}}> <StyledButtonHome className="teste">Saiba Mais! </StyledButtonHome> </Link>  </div>
            </div>
            <div className="logo"> <img src="/assets/images/controle.svg" alt="" /> 
            </div>
        </div> 
            <section className="faixa2"> 
                <div className="titulo"> Mais Populares:  </div>
                <div class="barra"> </div>
              
                           <main className="pc">  <Carousel1 className="agp-jogo" 
                               
                               
                               showDots={true}
                               responsive={responsive}
                        
                               >

                        
                        {/* Buga a Partir da sexta box!!!! */}

                         {populares.map(x =>  <CaixaJogo    name={x.nm_produto != null && x.nm_produto.length >= 31 
                                                                ? x.nm_produto.substr(0,31) + "..." 
                                                                : x.nm_produto} 
                                                            name2= {x.nm_produto}
                                                            image={x.img_produto} 
                                                            price={`R$: ${x.vl_preco}`} /> 
                     )}   
                    </Carousel1> </main>

                <main className="cell">    <Carousel axis="horizontal" showArrows="" showIndicators="" 
                              showThumbs="false" showStatus="true" useKeyboardArrows="true"
                              autoPlay="true" stopOnHover="true" swipeable="true"
                              dynamicHeight="" emulateTouch="true" infiniteLoop="">   
                             {populares.map(x =>  <CaixaJogo    name={x.nm_produto != null && x.nm_produto.length >= 31 
                                                                ? x.nm_produto.substr(0,31) + "..." 
                                                                : x.nm_produto} 
                                                            name2= {x.nm_produto}
                                                            image={x.img_produto} 
                                                            price={`R$: ${x.vl_preco}`} /> 
                         )}  
                </Carousel> </main>




               
                
            </section>

            <section className="faixa3"> 
                <div className="row2"> 
                  <div className="a1">   <Categoria  cat="Canecas" desc="Feitas Para Você!" img="/assets/images/caneca.svg"/> </div>
                  <div className="a2">  <Categoria cat="Xbox" desc="Todos Os Jogos!" img="/assets/images/xbox.svg"/> </div>
                  <div className="a3">  <Categoria cat="Roupas"desc="Feitas Para Você!" img="/assets/images/camiseta.svg"/> </div>
                </div>
                <div class="row2"> 
                <div className="a4">   <Categoria cat="Ps4" desc="Todos Os Jogos!" img="/assets/images/Ps4.svg"/> </div>
                <div className="a5">   <Categoria cat="Outros" desc="Feitas Para Você!" img="/assets/images/personalizado.svg"/> </div>
               </div>

            </section>
            </main>
            
            
           
          
        </StyledConteudo>
        <Footer/>
        </main>
        
        
    )
}