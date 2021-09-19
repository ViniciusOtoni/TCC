import { Container } from "./styled"
import { StyledInput } from '../components/input/styled'

export default function ConcluirCompra() {
    return (
        <Container>
            <div className="cabecalho">
                <img src="/assets/images/logo.svg" alt="" />
                <h2 className="nomeEmpresa">GameBud</h2>
            </div>
            <div className="cabecalho-barra"></div>
            <main>
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
                        <button style={{marginBottom: ".3em"}}>Cartão de Crédito <img  className="img-button" src="/assets/images/cartao.svg" /></button>
                        <button>Cartão de Débito <img className="img-button2" src="/assets/images/cartao.svg"/></button>
                    </div>

                    <div className="cartoes">
                        <div className="cartao">
                            <img src="/assets/images/VISA.svg" alt="" />
                            <div className="cartao-bolinha"></div>
                        </div>

                        <div className="cartao">
                            <img  className="img-cartao-2" src="/assets/images/MASTERCARD.svg" alt="" />
                            <div className="cartao-bolinha2"></div>
                        </div>

                        <div className="cartao">
                            <img className="img-cartao-3" src="/assets/images/DINERS.svg" alt="" />
                            <div className="cartao-bolinha2"></div>
                        </div>

                        <div className="cartao">
                            <img className="img-cartao-4" src="/assets/images/HIPERCARD.svg" alt="" />
                            <div className="cartao-bolinha2"></div>
                        </div>

                        <div className="cartao">
                            <img className="img-cartao-5" src="/assets/images/ELO.svg" alt="" />
                            <div className="cartao-bolinha2"></div>
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
                            
                            <div className="last-information-text1" className="last-information-text1-last">Percelas:</div>
                            <StyledInput className="input-lastInfo-text1" placeholder="Parcelado em 10x"/>
                        </div>

                        <div className="Last-information-inputs2">
                                <div className="last-information-text1">CV</div>
                            <StyledInput className="input-lastInfo-text1"/>

                            <div className="last-information-text1">Nome do Titular</div>
                            <StyledInput className="input-lastInfo-text1"/>

                            <div className="last-information-text1">Número do cartão</div>
                            <StyledInput className="input-lastInfo-text1" />
                            
                          
                            <button className="verde-botao">Concluir Compra!</button>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    )
}