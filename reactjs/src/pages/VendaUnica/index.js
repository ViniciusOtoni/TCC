import Cabecalho from '../components/cabecalho'
import Footer from '../components/rodape'
import { StyledButtonVerde } from '../components/botaoVerde/styled'

export default function VendaUnica(){
    return(
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho />
        <hr />
        <main style={{ width:"1440px", margin: "auto"}}>
            
            <div className="title"> FIFA 21 para PS4 EA </div>
            <div className="content">
                    <div className="content-images">
                        <div className="images">
                            <img src="/assets/" alt="image-1"/>
                            <img src="" alt="image-2"/>
                            <img src="" alt="image-3"/>
                        </div>
                        <img className="image-main" alt="image main"/>
                    </div>
                    <div>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/> 
                        </div>
                        <div> Vendido e entregue por GameBud </div>
                        <div> por R$79,90 </div>
                        <div> em 10x de R$ 39,95 sem juros </div>
                        <div> FRETE GRATÍS !!! </div>
                        <StyledButtonVerde> Adicionar ao carrinho  </StyledButtonVerde>
                        <StyledButtonVerde> Comprar agora </StyledButtonVerde>
                    </div>
                    <hr />
            </div>
       
        </main>
        <Footer />
        </div>
    )
}