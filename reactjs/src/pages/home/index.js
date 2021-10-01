import Cabecalho from "../../components/cabecalho"
import { StyledConteudo, Bolota } from "./styled"
import { StyledButtonHome  } from "../../components/botaoHome/styled"
import Footer  from "../../components/rodape/index"
import CaixaJogo from "../../components/caixaJogo"
import Categoria from "../../components/escolhaTipo"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../index.css'
import "animate.css"

export default function Home() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
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
                <div className="saiba-mais"> <StyledButtonHome className="teste"> Saiba Mais! </StyledButtonHome>  </div>
            </div>
            <div className="logo"> <img src="/assets/images/controle.svg" alt="" /> 
            </div>
        </div> 
            <section className="faixa2"> 
                <div className="titulo"> Mais Populares:  </div>
                <div class="barra"> </div>
                
                    <Carousel  responsive={responsive} className="agp-jogo"
                                additionalTransfrom={0}
                                arrows
                                centerMode={false}
                                className=""
                                containerClass="container-with-dots"
                                draggable
                                focusOnSelect={false}
                                infinite
                                keyBoardControl
                                minimumTouchDrag={80}
                                renderButtonGroupOutside={false}
                                showDots={true}
                                swipeable> 
                         <CaixaJogo />  
                         <CaixaJogo />  
                         <CaixaJogo />  
                         <CaixaJogo /> 
                    </Carousel>

            </section>

            <section className="faixa3"> 
                <div className="row2"> 
                  <div className="a1">  <Categoria  cat="1" desc="1" img="1"/> </div>
                  <div className="a2">  <Categoria cat="2" desc="2" img="2"/> </div>
                  <div className="a3">  <Categoria cat="3"desc="1" img="3"/> </div>
                </div>
                <div class="row2"> 
                <div className="a4">   <Categoria cat="4" desc="2" img="4"/> </div>
                <div className="a5">   <Categoria cat="5" desc="1" img="5"/> </div>
               </div>

            </section>
            </main>
            
            
           
          
        </StyledConteudo>
        <Footer/>
        </main>
        
        
    )
}