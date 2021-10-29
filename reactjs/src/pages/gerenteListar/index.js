import { Container } from "./styled.js"
import { StyledButtonAdm } from "../../components/botaoAdm/styled.js"
import Paginacao from "../../components/paginacao/index.js"
import CabecalhoAdm from "../../components/cabecalhoAdm/index.js"

export default function GerenteNaosei() {
    

    return (
        <div style={{ backgroundColor: "#333333" }}>
            <CabecalhoAdm  nulo='true'/>
            
                <Container >
                <main className="pc">
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
                            </tbody>
                       </table>
                        <div className="bottom-menu">
                            <StyledButtonAdm cor="vermelho" className="voltar" style={{marginRight:"20%", width:"10em"}}>Voltar</StyledButtonAdm>
                           <Paginacao />
                       </div>
                       
                    </div>
                    </main>
                    <main className="cell"> 
                    <div className="line-black"> 
                            <div className="coluna"> ID: </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="valor-coluna"> 2345678 </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna"> Produto: </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="valor-coluna"> ProdutoSHow </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna"> Preço: </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="valor-coluna"> R$ 99,00 </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna"> Quantidade: </div>
                        </div>
                        <div className="line-gray"> 
                            <div className="valor-coluna"> 1 </div>
                        </div>
                        <div className="line-black"> 
                            <div className="coluna1"> <StyledButtonAdm cor="vermelho" style={{width:"10em"}}> Voltar </StyledButtonAdm> </div>
                        </div>
                        <div className="pag"> <Paginacao /> </div>
                    </main>
                </Container>
            
        </div>
    )
}