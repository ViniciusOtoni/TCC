import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/rodape'
import { StyledButtonVerde } from '../../components/botaoVerde/styled'
import { Content } from './styled'
import { Conteudo } from './styled'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Cookie from 'js-cookie'

export default function VendaUnica(props){

    const [ produto, setProduto ] = useState(props.location.state)
    const [ img, setImg ] = useState(1)



    const navegation = useHistory()



    function comprar() {
        let carrinho = Cookie.get('carrinho')
        carrinho = carrinho !== undefined 
                ? JSON.parse(carrinho) 
                : [];

            if(!carrinho.some(x => x.id_produto === produto.id_produto )) {
                carrinho.push({ ...produto });
            }

            Cookie.set('carrinho', JSON.stringify(carrinho));

            navegation.push('/carrinhoItem')

    }

 

    return (
        <div style={{backgroundColor:"#333333"}}>
        <Cabecalho />
        <Conteudo> 
            
            <main className="pc"> 
                <div className="title"> {produto.produto} </div>
                <Content>
                    <div className="align-content">
                        <div className="content-images">
                            <div className="images">
                                <img  src={produto.imagem_dois} alt=""/>
                                <img  src={produto.imagem_tres} alt=""/>
                                <img  src={produto.imagem_quatro} alt=""/>
                            </div>
                            <img className="image-main" src={produto.imagem} alt=""/>
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
                            <div className="preco"> { `Preço: R$${produto.preco}`} </div>
                            <div className="text"> em 10x de R$ 39,95 sem juros </div>
                            <div className="frete"> FRETE GRATÍS !!! </div>
                            <div className="align-button">
                              <StyledButtonVerde style={{ padding:".7em 3em", margin: ".8em 0em", fontFamily: "semiBold" }} onClick={comprar}> Adicionar ao carrinho  </StyledButtonVerde> 
                            <Link to="/concluirCompra"> <StyledButtonVerde style={{ padding:".7em 4.7em", fontFamily: "semiBold" }}> Comprar agora </StyledButtonVerde> </Link>
                            </div>    
                        </div>
                    </div>  
                    <hr /> 
                </Content>
            </main>
            <main className="cell"> 
            <Content>
                    <div className="align-content">
                            <div className="titulo1"> {produto.nm_produto} </div>
                            <img className="image-main"src={produto.img_produto} alt=""/>
                        
                            <div className="align-stars">
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/>
                                <img className="star" src="/assets/images/bi_star_black.svg" alt=""/> 
                            </div>

                            <div className="titulo"> Preco: </div>
                            <div className="preco"> {`R$${produto.vl_preco}`} </div>
                            <div className="text"> em 10x de R$ 39,95 sem juros </div>
                            <div className="text"> Vendido e entregue por GameBud </div>
                          
                           
                            <div className="frete"> FRETE GRATÍS !!! </div>
                             
                       
                    </div>  
                     
                </Content>
                <div className="align-button">
                                <StyledButtonVerde style={{ padding:".7em 2em", margin: ".8em 0em", fontFamily: "semiBold" }} className="gren" onClick={comprar}> Adicionar ao carrinho  </StyledButtonVerde>
                                <StyledButtonVerde style={{ padding:".7em 2em", fontFamily: "semiBold" }} className="gren"> Comprar agora! </StyledButtonVerde>
                </div>  
            </main>
        </Conteudo>
        <Footer />
        </div>
    )
}