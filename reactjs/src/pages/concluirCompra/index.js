import { Container } from "./styled"
import { StyledInput } from '../../components/input/styled'
import Cabecalho from "../../components/cabecalho"
import { StyledButtonVerde } from "../../components/botaoVerde/styled"
import { Link } from "react-router-dom"

export default function ConcluirCompra() {
    return (
        <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho corLetra="nulo" />
           
           
                <Container>
                
               
                <main className="sub-main">
                    <div className="esquerda-grupo-input">
                        <div className="text-input">Inserir Cep</div>
                        <StyledInput placeholder="CEP" className="input-esquerda-grupo"/>

                        <div className="text-input">Inserir Nome da Rua</div>
                        <StyledInput placeholder="Nome da Rua" className="input-esquerda-grupo"/>

                        <div className="text-input">Inserir Nome do Bairro:</div>
                        <StyledInput placeholder="Nome do Bairro" className="input-esquerda-grupo"/>
                        
                        <div className="text-input">Complemento</div>
                        <StyledInput placeholder="" className="input-esquerda-grupo"/>
                        
                        <div className="text-input">Inserir Número da Rua:</div>
                        <StyledInput  placeholder="Número da rua" className="input-esquerda-grupo"/>
                    </div>
                    <hr />
                    <div className="direita-grupo-input">
                        <div className="credit-card">
                            <button style={{marginBottom: ".3em"}}>Cartão de Crédito <img  className="img-button" src="/assets/images/cartao.svg" alt=""/></button>
                            <button>Cartão de Débito <img className="img-button2" src="/assets/images/cartao.svg" alt=""/></button>
                        </div>

                        <div className="cartoes">
                            <div className="cartao">
                                <img src="/assets/images/VISA.svg" alt="" />
                                <button className="cartao-bolinha"></button>
                            </div>

                            <div className="cartao">
                                <img  className="img-cartao-2" src="/assets/images/MASTERCARD.svg" alt="" />
                                <button className="cartao-bolinha2"></button>
                            </div>

                            <div className="cartao">
                                <img className="img-cartao-3" src="/assets/images/DINERS.svg" alt="" />
                                <button className="cartao-bolinha2"></button>
                            </div>

                            <div className="cartao">
                                <img className="img-cartao-4" src="/assets/images/HIPERCARD.svg" alt="" />
                                <button className="cartao-bolinha2"></button>
                            </div>

                            <div className="cartao">
                                <img className="img-cartao-5" src="/assets/images/ELO.svg" alt="" />
                                <button className="cartao-bolinha2"></button>
                            </div>
                        </div>
                    
                        <div className="Last-information-inputs">
                            <div className="Last-information-inputs1">
                                <div className="last-information-text1">CV</div>
                                <StyledInput className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Nome do Titular</div>
                                <StyledInput className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Número do cartão</div>
                                <StyledInput className="input-lastInfo-text1" />
                                
                                <div className="last-information-text1-last">Percelas:</div>
                                    <select className="parcelas-section" >
                                        <option> 2x </option>
                                        <option> 3x </option>
                                        <option> 4x </option>
                                        <option> 5x </option>
                                        <option> 10x </option>
                                    </select>
                            </div>

                            <div className="Last-information-inputs2">
                                    <div className="last-information-text1">CV</div>
                                <StyledInput className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Nome do Titular</div>
                                <StyledInput className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Número do cartão</div>
                                <StyledInput className="input-lastInfo-text1" />

                                  
                                
                            
                                <Link to="/">  <div className="bottom">  <StyledButtonVerde style={{marginTop:"4.8em", height:"2em"}} className="botao-buttom"> Concluir Compra! </StyledButtonVerde> </div> </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </Container>
            
        </div>
    )
}