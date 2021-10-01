import Cabecalho from "../../components/cabecalho"
import { StyledConteudo, Bolota } from "./styled"
import { StyledButtonHome  } from "../../components/botaoHome/styled"
import Footer  from "../../components/rodape/index"
import CaixaJogo from "../../components/caixaJogo"
import Categoria from "../../components/escolhaTipo"
import '../index.css'
import "animate.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"

export default function Home() {

    const [populares, setPopulares] = useState([]);

    

    function listarPopulares() {
        const apiResponse = [
            {
              name:"Chuteira Nike Mercurial Vapor 14 Club Unissex",
              price:"R$ 379,99",
              image:"https://s3-alpha-sig.figma.com/img/7347/fc3b/7437ab8d12402ae88a7ccd3c1766eb9d?Expires=1633910400&Signature=frRtA1Y-btRCq2T25AF3ckyDV7U-qXzb5O3zTl92p7Umm1pyzZD6x4q7eee~JoBf3w~jbFfUzUT-I0TErlmKOxgyavYCMV9GwAetGNW9dnY~PEYFgdMNd6Pci99-0XnZlS7eu8hy9J4NubluYjWX9u9olBjPKG0G~u9m0mizI-SwOtMd7qsILs~pQcuBFTnLdR30k1hGJ-UGi5DUTuuFSg3I5UN6x1tkc~2cCtVKV~QgUnop~hkBtheLMklkDpUgK-fPNjqearAyk5IIlLRCkvezW0OH5JlCBhBWI9ZZyOYjOp6lkAaoTnU9S9V2HPeU5zMxm1IRq4jL07DuvkKMSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            },
            {
              name:"Camiseta Nike Tottenham II 2021 Masculina",
              price:"R$ 299,99",
             
              image:"https://s3-alpha-sig.figma.com/img/ceff/72ca/74f0583d4054618bafd7be364884f805?Expires=1633910400&Signature=Q-7usUXcUF~Fnb2s-bLqYhoRnxtURH2Okv2S4pZhgtmZnw22Y1dfpTCuZ14nrg~GQ3g7OiEbIdHjpbGmLmYqLuTflagl2Y016L5m5AnZ8sTPq0Kqobmn8SbSN8p9Kz5d9b3LEKuwrqeB5-eWtFwl3S1qs~-DBZMJ7IWO0Z3QDWhe3qa-9zOp6a3tCTbAOzBwOE3aal8pB8HXRV1yU90OrxIQiqZNh-egFYH21cd0d-qnuz1LNXLMFRGT8MD0d6rk6R-RGs~~zg3gB8pLAzVsjYN9Y78ly3oPT82GDcI8EbPnpfsYKOZ7~OPODvvWJ3~8nqe~Fx6zzYEyIgGSTeLR2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            },
            {
              name:"Blusão Nike Essential Feminino",
              price:"R$ 194,99",
             
              image:"https://static.netshoes.com.br/produtos/blusao-nike-essential-fnl-po-flc-canguru-feminino/26/HZM-5135-226/HZM-5135-226_zoom1.jpg?ts=1623168014&"
            },
            {
                name:"Blusão Nike Essential Feminino",
                price:"R$ 194,99",
               
                image:"https://static.netshoes.com.br/produtos/blusao-nike-essential-fnl-po-flc-canguru-feminino/26/HZM-5135-226/HZM-5135-226_zoom1.jpg?ts=1623168014&"
              }
          ]
      
          setPopulares(apiResponse);
    }
    

    useEffect(() => {
       
        
        listarPopulares()

       
    }, [])


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
                {populares.map(x =>
                  <div className="none"> <CaixaJogo image={x.image} name={x.name} price={x.price}/>  </div>
                  )}
                </div> 
               
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