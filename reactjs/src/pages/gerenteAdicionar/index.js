import { StyledGerenteAlterar } from "./styled";
import { StyledInput, StyledSelect } from "../../components/input/styled";
import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { reconvert } from "../../utils/convertCurrency";

import Api from "../../services/api";
const api = new Api();


export default function GerenteAlterar() {
    const [nome, setNome] = useState('');
    const [codBarra, setCodBarra] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [imagemPrincipal, setImagemPrincipal] = useState('');
    const [imagemSecundaria, setImagemSecundaria] = useState('');
    const [imagemTerciaria, setImagemTerciaria] = useState('');
    const [imagemQuartenaria, setImagemQuartenaria] = useState('');
    const [dsProduto, setDsProduto ] = useState('');
    const navigation = useHistory();


    async function Cadastrar() {
       

        let retorno = await api.cadastrarProduto(
            nome,
            reconvert(preco),
            categoria,
            codBarra,
            imagemPrincipal,
            imagemSecundaria,
            imagemTerciaria,
            imagemQuartenaria,
            dsProduto
        )
        
        if (retorno.erro)
            return toast.error(retorno.erro)

        toast.dark("produto cadastrado");
        navigation.push('/gerenteCadastrar');
    }


    return (
        <div style={{ backgroundColor: "#333333", minHeight: "100vh" }}>
            <CabecalhoAdm nulo='true' />
            <ToastContainer />
            <StyledGerenteAlterar>
                <main>
                    <div className="content">
                        <div className="alternating">
                            <div className="topico1"> Nome: </div>
                            <div className="input"> <StyledInput className="input-input" value={nome} onChange={e => setNome(e.target.value)} /> </div>
                        </div>
                        <div className="line">
                            <div className="topico2"> Código de Barra: </div>
                            <div className="input">  <StyledInput className="input-input" value={codBarra} onChange={e => setCodBarra(e.target.value)} /> </div>
                        </div>
                        <div className="alternating">
                            <div className="topico3"> Categoria: </div>
                            <div className="input">
                                <StyledSelect className="input-input" value={categoria} onChange={e => setCategoria(e.target.value)}>
                                    <option style={{ display: "none" }} selected> Selecione </option>
                                    <option value="Xbox"> Xbox </option>
                                    <option value="Ps4"> PlayStation </option>
                                    <option value="Caneca"> Canecas </option>
                                    <option value="Roupa"> Roupas </option>
                                    <option value="Outros"> Outros </option>
                                </StyledSelect> </div>
                        </div>
                        <div className="line">
                            <div className="topico4"> Preco </div>
                            <div className="input"> <StyledInput className="input-input topico4-input" value={preco} onChange={e => setPreco(e.target.value)} /> </div>
                        </div>
                        <div className="alternating">
                            <div className="topico5">  Imagem Principal: </div>
                            <div className="input"> <StyledInput className="input-input" placeholder="URl da Imagem" value={imagemPrincipal} onChange={e => setImagemPrincipal(e.target.value)} />  </div>
                        </div>
                        <div className="line">
                            <div className="topico6"> Imagem Secundaria: </div>
                            <div className="input"> <StyledInput className="input-input" placeholder="URl da Imagem" value={imagemSecundaria} onChange={e => setImagemSecundaria(e.target.value)} />  </div>
                        </div>
                        <div className="alternating">
                            <div className="topico7"> Imagem Terciária: </div>
                            <div className="input"> <StyledInput className="input-input" placeholder="URl da Imagem" value={imagemTerciaria} onChange={e => setImagemTerciaria(e.target.value)} />  </div>
                        </div>
                        <div className="line">
                            <div className="topico8">   Imagem Quartenária:</div>
                            <div className="input"> <StyledInput className="input-input" placeholder="URl da Imagem" value={imagemQuartenaria} onChange={e => setImagemQuartenaria(e.target.value)} /> </div>
                        </div>
                        <div className="alternating">
                            <div className="topico7" style={{paddingRight:"5.8em"}}> Descrição Do Produto: </div>
                            <div className="input"> <StyledInput className="input-input"  value={dsProduto} onChange={e => setDsProduto(e.target.value)} />  </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div>
                            <Link to="/gerenteCadastrar"><StyledButtonAdm className="button" cor="vermelho"> Voltar </StyledButtonAdm> </Link>
                        </div>
                        <div className="criar-item">
                            <StyledButtonAdm onClick={Cadastrar}>  Adicionar item </StyledButtonAdm>
                        </div>
                    </div>
                </main>
            </StyledGerenteAlterar>
        </div>
    )
}