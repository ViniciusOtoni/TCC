import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/rodape'
import { StyledButtonVerde } from '../../components/botaoVerde/styled'
import { Content } from './styled'
import { Conteudo } from './styled'

export default function VendaUnica(){
    return(
        <div style={{backgroundColor:"#333333"}}>
        <Cabecalho />
        <Conteudo> 
            
            <hr style={{ marginLeft: "3.4em", marginRight: "3.4em" }} />
            <main style={{ width:"1340px", margin: "auto"}}> 
                <div className="title"> FIFA 21 para PS4 EA </div>
                <Content>
                    <div className="align-content">
                        <div className="content-images">
                            <div className="images">
                                <img src="/assets/images/image 24.svg" alt=""/>
                                <img src="/assets/images/image 24.svg" alt=""/>
                                <img src="/assets/images/image 24.svg" alt=""/>
                            </div>
                            <img className="image-main"src="/assets/images/FIFA21.svg" alt=""/>
                        </div>
                        <div>
                            <div className="align-stars">
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/> 
                            </div>
                            <div className="text"> Vendido e entregue por GameBud </div>
                            <div className="preco"> por R$79,90 </div>
                            <div className="text"> em 10x de R$ 39,95 sem juros </div>
                            <div className="frete"> FRETE GRATÍS !!! </div>
                            <div className="align-button">
                                <StyledButtonVerde style={{ padding:".7em 2em", margin: ".8em 0em", fontFamily: "semiBold" }}> Adicionar ao carrinho  </StyledButtonVerde>
                                <StyledButtonVerde style={{ padding:".7em 2em", fontFamily: "semiBold" }}> Comprar agora </StyledButtonVerde>
                            </div>    
                        </div>
                    </div>  
                    <hr /> 
                </Content>
            </main>
        </Conteudo>
        <Footer />
        </div>
    )
}