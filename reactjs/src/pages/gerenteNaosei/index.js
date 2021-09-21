import { Container } from "./styled.js"
import Cabecalho from "../../components/cabecalho"

export default function GerenteNaosei() {
    return (
        <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho corLetra="nulo" />
            <main style={{width: "1340px", margin: "auto"}}>
                <Container >
                    <div className="principal">
                        <div className="table">
                        <div className="titulos">
                            <h2>ID Produto:</h2>
                            <h2>Nome Do Produto:</h2>
                            <h2>Preço Do Produto:</h2>
                            <h2>Quantidade:</h2>
                        </div>
                        <div className="items">

                            <div className="Linha-1">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-2">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-1">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-2">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-1">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-2">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-1">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-2">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-1">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>

                            <div className="Linha-2">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>
                                
                                <div className="Linha-1">
                                <div>1</div>
                                <div>Grand theft auto 5</div>
                                <div>R$99,00</div>
                                <div style={{marginRight: "4em"}}>1</div>
                            </div>
                                
                        </div>
                       
                   
                        </div>
                        <div className="bottom-menu">
                            <button className="voltar" style={{ width: "150px", marginRight: "25em" }}>Voltar</button>
                            <div className="navigation">
                                <div className="back" style={{width: "130px"}}> <img src="/assets/images/voltar.svg" alt="" /> Anterior </div>
                                <div className="page">1</div>
                                <div className="page">2</div>
                                <div className="page">3</div>
                                <div className="next">próximo <img src="/assets/images/avancar.svg" alt=""/> </div>
                            </div>
                       </div>
                       
                    </div>
                </Container>
            </main>
        </div>
    )
}