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
    const [imagem, setImagem] = useState([]);
    const [dsProduto, setDsProduto ] = useState('');
    const navigation = useHistory();


    async function Cadastrar() {
       

        let retorno = await api.cadastrarProduto(
            nome,
            reconvert(preco),
            categoria,
            codBarra,
            imagem,
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
                            <div className="topico5">  Imagens </div>
                            <div className="input"> <StyledInput type="file" className="input-input upload"  onChange={e => imagem.push(e.target.files[0])} multiple />  </div>
                        </div>
                       
                        <div className="line">
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