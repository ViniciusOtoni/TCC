import { StyledGerenteAlterar } from "./styled";
import { StyledInput, StyledSelect } from "../../components/input/styled";
import { StyledButtonAdm } from "../../components/botaoAdm/styled";
import CabecalhoAdm from "../../components/cabecalhoAdm";

import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from "../../services/api";
const api = new Api();


export default function GerenteAlterar(props) {
    const [infoProduto, setInfoProduto] = useState(props.location.state)
    const [nome, setNome] = useState('');
    const [codBarra, setCodBarra] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState(0);
    const [imagemPrincipal, setImagemPrincipal] = useState('');
    const [imagemSecundaria, setImagemSecundaria] = useState('');
    const [imagemTerciaria, setImagemTerciaria] = useState('');
    const [imagemQuartenaria, setImagemQuartenaria] = useState('');

    const navigation = useHistory();

    async function Alterar() {
       

        let x = await api.AlterarProduto(
            nome,
            preco,
            categoria,
            codBarra,
            imagemPrincipal,
            imagemSecundaria,
            imagemTerciaria,
            imagemQuartenaria,
            infoProduto.id_produto
        )

        navigation.push('/gerenteCadastrar');
        
        

        
    }

    function SetVar() {
        setNome(infoProduto.nm_produto);
        setCodBarra(infoProduto.ds_codigo_barra);
        setCategoria(infoProduto.ds_categoria);
        setPreco(infoProduto.vl_preco);
        setImagemPrincipal(infoProduto.img_produto);
        setImagemSecundaria(infoProduto.img_secundaria);
        setImagemTerciaria(infoProduto.img_terciaria);
        setImagemQuartenaria(infoProduto.img_quartenaria);
    }

    useEffect(() => {
        SetVar()
    }, [])

    return (
        <div style={{ backgroundColor: "#333333", minHeight: "100vh" }}>
            <CabecalhoAdm nulob={true} />
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
                                    <option value="Xbox">  Xbox </option>
                                    <option value="Ps4">  Ps4 </option>
                                    <option value="Caneca">  Caneca </option>
                                    <option value="Roupa">  Roupa </option>
                                </StyledSelect>
                            </div>
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


                    </div>
                    <div className="footer">
                        <div>
                            <Link to="/gerenteCadastrar"><StyledButtonAdm className="button" cor="vermelho"> Voltar </StyledButtonAdm> </Link>
                        </div>
                        <div className="criar-item">
                            <StyledButtonAdm onClick={Alterar}>  Alterar item </StyledButtonAdm>
                        </div>
                    </div>
                </main>
            </StyledGerenteAlterar>

        </div>
    )
}