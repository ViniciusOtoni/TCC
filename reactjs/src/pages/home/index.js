import Cabecalho from "../../components/cabecalho"
import { StyledConteudo, Bolota } from "./styled"
import { StyledButtonHome  } from "../../components/botaoHome/styled"
import Footer  from "../../components/rodape/index"
import CaixaJogo from "../../components/caixaJogo"
import Categoria from "../../components/escolhaTipo"
import '../index.css'
import "animate.css"
import { Link } from 'react-router-dom'

export default function Home() {
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
                <div className="agp-jogo"> 
                  <div className="none"> <CaixaJogo />  </div>
                  <div className="none"> <CaixaJogo />  </div>
                  <div className="none"> <CaixaJogo />  </div>
                <CaixaJogo /> 
                </div>
                </section>
            
            <section className="faixa3"> 
                <div className="row2"> 
                  <div className="a1">   <Categoria  cat="1" desc="1" img="1"/> </div>
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