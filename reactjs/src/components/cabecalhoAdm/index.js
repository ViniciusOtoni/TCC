import { StyledCabecalhoAdm } from "./styled";
import { StyledButtonAdm } from "../botaoAdm/styled";
import { StyledInput } from "../input/styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function CabecalhoAdm(props) {
    const [pesquisa, setPesquisa] = useState('');

    function search (event){
        if(event.key === 'Enter' || event.type === "click"){
            return props.search(pesquisa)       
        }
    }

    useEffect(() => {

    }, [pesquisa])

    return ( 
        <StyledCabecalhoAdm  nulob={props.nulob} nulo={props.nulo} bNulo={props.bNulo} > 
            <div className="agp"> 
                <Link to="" > <div className="logo"> <img onClick={""} src="/assets/images/logo.svg" alt="" /> </div>
                </Link>
                <div className="game"> GameBud </div>
            </div>
            <div className="agp-input"> 
                <div className="input" >  <StyledInput onKeyPress={search} onChange={e => setPesquisa(e.target.value)} className="in" placeholder="Pesquisar Itens (Nome do Produto)" /> </div>
                <div className="pesquisar" > <button onClick={search}> <img src="/assets/images/Vector (8).svg" alt="" /> </button> </div>
            </div>
            <div className="column"> 
             <div className="nv">    <Link to="/gerenteAdicionar"> <StyledButtonAdm cor="laranja" style={{marginBottom:"1em", marginTop:"2em", textDecoration:"none"}} className="NV"> Novo Item </StyledButtonAdm> </Link> </div>
            <div className="pedidos">   <Link to="/gerentePedidos" style={{textDecoration:"none"}}> <StyledButtonAdm cor="laranja"  className="PE"> Pedidos </StyledButtonAdm> </Link> </div>
            </div>
        </StyledCabecalhoAdm>
    )
}