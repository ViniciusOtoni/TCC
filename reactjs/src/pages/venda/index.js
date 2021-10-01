import Cabecalho from "../../components/cabecalho";
import CaixaJogo from "../../components/caixaJogo";
import Footer from "../../components/rodape";
import Paginacao from "../../components/paginacao";
import { StyledVenada } from "./styled";
import { useState, useEffect } from "react";
import Api from "../../services/api";
const api = new Api();


export default function Venda() {

    const [produto, setProduto] = useState([])


    const listar = async () => {
        const e = await api.listarProdutos()
        setProduto(e);
    }

    useEffect(() => {
       
        
        listar()

       
    }, [])

    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho />
        
                <StyledVenada> 
                <main className='a'> 
                    <div className="row-button"> 
                        <div className="ordem"> Ordenar: </div>
                        <div className="select-ordem"> 
                        <select> 
                            <option value="ordem" selected> Avaliação </option> 
                            <option value="ordem">  Lançamento </option>
                            <option value="ordem" > Melhor Preço </option>
                           
                        
                        
                        
                        
                        </select> </div>
                    </div>
                    <div className="wrap"> 
                    {produto.map (x  => 
                     <div className="bottom">   <CaixaJogo name={x.nm_produto != null && x.nm_produto.length >= 31 
                                                            ? x.nm_produto.substr(0,31) + "..." 
                                                            : x.nm_produto} 
                                                            name2= {x.nm_produto}
                                                image={x.img_produto} 
                                                price={`R$: ${x.vl_preco}`} /> </div>
                     )}
                    </div>
                    
                  <div className="pag">  <Paginacao  /> </div>
                </main>
                </StyledVenada>
                
           
            <Footer />
        </div>
    )
}