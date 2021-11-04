import { StyledBoxItemCarrinho } from "./styled"

import { SelectInput } from "../../../../components/select/styled"

import { StyledButtonAdm } from "../../../../components/botaoAdm/styled"

import { useState } from "react"
import { useEffect } from "react"
import { useHistory } from "react-router"


export default function BoxItemCarrinho(props) {
    const [produto, setProduto] = useState(props.info)
    const [qtd, setQtd] = useState(1)
    const [total, setTotal] = useState(produto.preco)
    const nave = useHistory()

    console.log(setProduto)
    console.log(total)
    console.log(nave)

    function remover() {
        props.onRemove(produto.id)
        setQtd(0)
    }






    console.log( props)



    useEffect(() => {
        
        function alterar() {
            produto.total = Math.round(produto.preco * qtd);
            setTotal(produto.total)
            if (props.respostaFilho)
                props.respostaFilho()
    
            produto.quantidade = qtd;
        }
        
        alterar()
    }, [qtd, produto, props ])

    useEffect(() => {

    }, [])



    return (
        <StyledBoxItemCarrinho>
            <main className="pc">
                <div className="foto"> <img src={produto.imagem} alt="" /> </div>
                <div className="column-esp">
                    <div className="nome-produto">  {produto.produto} </div>
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
                        <div className="select">  <SelectInput onChange={e => setQtd(e.target.value)} style={{ width: "4em", height: "2em", fontSize: "1em", fontFamily: "MontserratBold" }}>
                            <option value={1} > 1 </option>
                            <option value={2} > 2 </option>
                            <option value={3} > 3 </option>
                            <option value={4} > 4 </option>
                            <option value={5} > 5 </option>
                            <option value={6} > 6 </option>
                            <option value={7} > 7 </option>
                            <option value={8} > 8 </option>
                            <option value={9} > 9 </option>
                            <option value={10} > 10 </option>
                        </SelectInput> </div>
                        <div className="valores-preco"> {`R$: ${produto.total}`} </div>
                    </div>
                    <div className="excluir" onClick={remover}> Excluir </div>
                </div>

            </main>
            <main className="cell">
                <div className="box-preta">
                    <div className="nome-produto"> {produto.produto}  </div>
                    <div className="foto"> <img src={produto.imagem} alt="" /> </div>
                    <div className="row-val">
                        <div className="titulo-val"> Preço: </div>
                        <div className="valor-val"> {`R$: ${Math.round(produto.preco * qtd)} `} </div>
                    </div>
                    <div className="row-valores">
                        <div className="quantidade"> Unidades: </div>
                        <div className="select">  <SelectInput onChange={e => setQtd(e.target.value)} style={{ width: "4em", height: "2em", fontSize: "1em", fontFamily: "MontserratBold" }}>
                            <option value={1} >1 </option>
                            <option value={2}> 2 </option>
                            <option value={3}> 3 </option>
                            <option value={4}> 4 </option>
                            <option value={5}> 5 </option>
                            <option value={6}> 6 </option>
                            <option value={7}> 7 </option>
                            <option value={8}> 8 </option>
                            <option value={9}> 9 </option>
                            <option value={10}> 10 </option>
                        </SelectInput> </div>
                    </div>


                    <div className="excluir"> <StyledButtonAdm cor="vermelho" className="excluirB" onClick={remover}>  Excluir </StyledButtonAdm> </div>
                </div>
            </main>
        </StyledBoxItemCarrinho>
    )
}