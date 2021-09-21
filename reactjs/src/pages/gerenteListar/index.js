import { Container } from "./styled.js"
import Cabecalho from "../../components/cabecalho"

export default function GerenteNaosei() {
    return (
        <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho corLetra="nulo" />
            <main style={{width: "1340px", margin: "auto"}}>
                <Container >
                    <div className="principal">
                       
                   
                        <table>
                            <thead>
                                <th>ID Produto:</th>
                                <th>Nome Do Produto:</th>
                                <th>Preço Do Produto:</th>
                                <th className="quantidade">Quantidade:</th>
                            </thead>
                            <tbody>
                                <tr className="linha-1">
                                    <td>1</td>
                                    <td>Grand theft auto 5</td>
                                    <td>R$99,00</td>
                                    <td className="last-item">1</td>
                                </tr>

                                <tr className="linha-2">
                                    <td>1</td>
                                    <td>Grand theft auto 5</td>
                                    <td>R$99,00</td>
                                    <td className="last-item">1</td>
                                </tr>

                                <tr className="linha-1">
                                    <td>1</td>
                                    <td>Grand theft auto 5</td>
                                    <td>R$99,00</td>
                                    <td className="last-item">1</td>
                                </tr>

                                <tr className="linha-2">
                                    <td>1</td>
                                    <td>Grand theft auto 5</td>
                                    <td>R$99,00</td>
                                    <td className="last-item">1</td>
                                </tr>

                                <tr className="linha-1">
                                    <td>1</td>
                                    <td>Grand theft auto 5</td>
                                    <td>R$99,00</td>
                                    <td className="last-item">1</td>
                                </tr>

                                <tr className="linha-2">
                                    <td>1</td>
                                    <td>Grand theft auto 5</td>
                                    <td>R$99,00</td>
                                    <td className="last-item">1</td>
                                </tr>

                                <tr className="linha-1">
                                    <td>1</td>
                                    <td>Grand theft auto 5</td>
                                    <td>R$99,00</td>
                                    <td className="last-item">1</td>
                                </tr>


                            </tbody>
                       </table>
                        <div className="bottom-menu">
                            <button className="voltar" style={{ width: "150px", marginRight: "18em" }}>Voltar</button>
                            <div className="navigation">
                                <div className="back"> <img src="/assets/images/voltar.svg" alt="" /> Anterior </div>
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