import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/rodape";
import { Container } from "./styled";
import { toast, ToastContainer } from 'react-toastify'


import Api from "../../services/api";
const api = new Api();

function UsuarioIndex() {

    const nave = useHistory();
    const [all, setAll] = useState({})

    let usuarioLogado = lerUsuarioQuelogou() || {}

    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('')


    function lerUsuarioQuelogou() {
        let logado = Cookies.get('usuario-logado');

        if (logado === undefined) {
            alert('Você deve estar logado para acessar essa página');
            nave.push('/login')
        } else {
            let usuarioLogado = JSON.parse(logado);
            return usuarioLogado;
        }
    }

    const logof = () => {
        Cookies.remove("usuario-logado");

        nave.push('/')
      };

    async function lerUsuario() {
        let get = await api.listarUsuario(usuarioLogado.id_usuario)
        
        if(get.erro)
            alert(get.erro)

            console.log(get)

        setarVariavel(get);
    }


    async function alterar() {
        let put = await api.alterarUsuario(usuarioLogado.id_usuario, nome, cpf, senha, email);
        
        if(put.erro)
            alert(put.erro)
    }


    async function setarVariavel(retornoAPI) {
        setNome(retornoAPI.nm_usuario);
        setEmail(retornoAPI.ds_email);
        setSenha(retornoAPI.ds_senha);
        setCpf(retornoAPI.ds_cpf)
        setImagem(retornoAPI.img_usuario)
    }

    useEffect(() => {
        lerUsuarioQuelogou()
        lerUsuario()
    }, [])




    return (



        <div style={{ backgroundColor: "#333333" }}>
            
            <ToastContainer />
            <Cabecalho corLetra="nulo" />
            <div style={{maxWidth:"1240px", margin:"auto"}}> 
            <Container>
                <article class="my-account">
                    <div className="user-picture">
                        <div className="img-user">
                            <img src={imagem} alt="" style={{ marginRight: "3em" }} />
                        </div>
                        <div className="camera">
                            <button>
                                <img src="/assets/images/cameraUSU.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="personal-information">
                        <div className="sub-group-input">
                            <label> NOME </label>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div className="sub-group-input">
                            <label> E-MAIL </label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                    <div className="agp-botao">
                        <div className="change-information">
                            <button onClick={alterar}>Alterar Informações</button>
                        </div>
                        <div className="change-information">
                            <button onClick={logof}> Fazer Logof </button>
                        </div>
                        </div>
                    </div>

                    <div className="personal-information">
                        <div className="sub-group-input">
                            <label> CPF </label>
                            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} />
                        </div>

                        <div className="sub-group-input">
                            <label> SENHA</label>
                            <input type="text" value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>

                    </div>


                </article>
            </Container>
            </div>
            <Footer />
            
        </div>
    )
}

export default UsuarioIndex;