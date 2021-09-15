import Cabecalho from "../components/cabecalho"
import { StyledConteudo } from "./styled"
import { StyledButtonHome  } from "../components/botaoHome/styled"
import Footer  from "../components/rodape/index"
import CaixaJogo from "../components/caixaJogo"
import Categoria from "../components/escolhaTipo"


export default function Home() {
    return (
        <main style={{backgroundColor:"#333333"}}>

        <Cabecalho  /> 
        <StyledConteudo> 
        <div className="bolota"> <img className="" src="/assets/images/Koko Caramel 3.svg" alt="" /> </div>
           <div className="row">
            <div className="agp-melhor"> 
                <div className="texto-melhor"> Há Melhor </div>
                <div className="texto-melhor"> Loja Do Brasil </div>
                <div className="saiba-mais"> <StyledButtonHome style={{width:"224px", height:"68px", paddingTop:"1.4em" }}> Saiba Mais! </StyledButtonHome>  </div>
            </div>
            <div className="logo"> <img src="/assets/images/logo.svg" alt="" /> 
            </div>
        </div> 
            <section> 
                <div className="titulo"> Mais Populares:  </div>
                <div class="barra"> </div>
                <div className="agp-jogo"> 
                    <CaixaJogo />
                    <CaixaJogo />
                    <CaixaJogo />
                    <CaixaJogo />
                </div>
            </section>
            <section className="faixa3"> 
                <div className="row2"> 
                  <div className="a1">   <Categoria /> </div>
                  <div className="a2">  <Categoria /> </div>
                  <div className="a3">  <Categoria /> </div>
                </div>
                <div class="row2"> 
                <div className="a4">   <Categoria /> </div>
                <div className="a5">   <Categoria /> </div>
               </div>

            </section>
            <Footer/>
        </StyledConteudo>
        
        </main>
    )
}