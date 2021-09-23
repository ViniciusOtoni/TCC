import { Container } from "./styled.js"
import CabecalhoAdm from "../../components/cabecalhoAdm/index.js"
import Paginacao from "../../components/paginacao/index.js"
import { StyledButtonAdm } from "../../components/botaoAdm/styled.js"

export default function GerenteNaosei() {
    return (
        <div style={{ backgroundColor: "#333333" }}>
            <CabecalhoAdm  nulo='true'/>
            
                <Container >
                <main >
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
                            <StyledButtonAdm cor="vermelho" className="voltar" style={{ width: "150px", height: "51px", marginRight: "15em" }}>Voltar</StyledButtonAdm>
                           <Paginacao />
                       </div>
                       
                    </div>
                    </main>
                </Container>
            
        </div>
    )
}