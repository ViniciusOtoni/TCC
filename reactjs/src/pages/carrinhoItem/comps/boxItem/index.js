import { StyledBoxItemCarrinho } from "./styled"
import { StyledInput } from "../../../../components/input/styled"
import { SelectInput } from "../../../../components/select/styled"
import { StyledButtonVerde } from "../../../../components/botaoVerde/styled"
import { useState } from "react"
import { StyledButtonAdm } from "../../../../components/botaoAdm/styled"
import { remove } from "js-cookie"


export default function BoxItemCarrinho(props) {
    
    const [ produto, setProduto ]  = useState(props.info)

    const [ qtd, setQtd ] = useState(0)
    console.log(setQtd)

    function remover () {
        props.onRemove(produto.id_produto)
    }

    return (
        <StyledBoxItemCarrinho> 
        <main className="pc">
        <div className="foto"> <img src={produto.img_produto} alt="" /> </div>
        <div className="column-esp"> 
            <div className="nome-produto">  {produto.nm_produto} </div>
            <div className="row-vendido"> 
                <div className="dono"> Vendido Por: </div>
                <div className="nome-dono"> GameBud </div>
            </div>
            <div className="row-vendido"> 
                <div className="dono"> Entregue Por: </div>
                <div className="nome-dono"> GameBudSedex </div>
            </div>
            
        </div>
     
        <div className="column-valores">
            <div className="row-valores"> 
                <div className="select">  <SelectInput  style={{width:"4em", height:"2em", fontSize:"1em", fontFamily: "MontserratBold"}}>  
                <option value="vl1" onClick={setQtd}> 1 </option>
                <option value="vl2" onClick={setQtd}> 2 </option>
                <option value="vl3" onClick={setQtd}> 3 </option>
                <option value="vl4" onClick={setQtd}> 4 </option>
                <option value="vl4" onClick={setQtd}> 5 </option>
                <option value="vl4" onClick={setQtd}> 6 </option>
                <option value="vl4" onClick={setQtd}> 7 </option>
                <option value="vl4" onClick={setQtd}> 8 </option>
                <option value="vl4" onClick={setQtd}> 9 </option>
                <option value="vl4" onClick={setQtd}> 10 </option>

              
                 </SelectInput> </div>
                <div className="valores-preco"> {`R$ ${produto.vl_preco}`} </div>
            </div>
            <div className="excluir" onClick={remover}> Excluir </div>
            <div className="row-input"> 
                <div className="frete"> Frete: </div>
                <div className="input-frete">  <StyledInput placeholder="Cep" style={{width:"8em"}}/> </div>
                <div className="botao-frete"> <StyledButtonVerde style={{width: "7em", height:"1.8em", marginLeft:"2em"}}> Calcular </StyledButtonVerde> </div>
            </div>
        
        
            <div className="rua"> Nome da Rua Bonito  </div>
            <div className="bairro"> Bairro com Nome Bonito  </div>
            <div className="estado">  Cidade com Nome Bonita </div>
        
        <div className="row-val"> 
            <div className="titulo-val"> Preço: </div>
            <div className="valor-val"> R$10,99 </div>
        </div>
        <div className="row-val"> 
            <div className="titulo-val"> Previsão: </div>
            <div className="valor-val1"> 4 dias </div>
        </div>
        
    </div>
   
                </main>
                <main className="cell">
                    <div className="box-preta">
                    <div className="nome-produto"> {produto.nm_produto}  </div>
                        <div className="foto"> <img src={produto.img_produto} alt="" /> </div>
                        <div className="row-val"> 
                            <div className="titulo-val"> Preço: </div>
                            <div className="valor-val"> {`R$ ${produto.vl_preco}`} </div>
                        </div>
                        <div className="row-valores"> 
                                <div className="quantidade"> Unidades: </div>
                                <div className="select">  <SelectInput  style={{width:"4em", height:"2em", fontSize:"1em", fontFamily: "MontserratBold"}}>  
                                    <option value="vl1" >1 </option>
                                    <option value="vl2"> 2 </option>
                                    <option value="vl3"> 3 </option>
                                    <option value="vl4"> 4 </option>
                                    <option value="vl4"> 5 </option>
                                    <option value="vl4"> 6 </option>
                                    <option value="vl4"> 7 </option>
                                    <option value="vl4"> 8 </option>
                                    <option value="vl4"> 9 </option>
                                    <option value="vl4"> 10 </option>
                                </SelectInput> </div>
                                </div>
                    
                        
                            <div className="excluir"> <StyledButtonAdm cor="vermelho" className="excluirB" onClick={remover}>  Excluir </StyledButtonAdm> </div>
                    </div>
                </main> 
    </StyledBoxItemCarrinho>
    )
}