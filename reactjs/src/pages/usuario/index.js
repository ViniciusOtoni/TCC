import Cookies from 'js-cookie';
import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/rodape";
import { Container } from "./styled";
import { toast, ToastContainer } from 'react-toastify'
import LoadingBar from 'react-top-loading-bar'


import Api from "../../services/api";

const api = new Api();



function UsuarioIndex() {

    const nave = useHistory();
    const [all, setAll] = useState({})

    let usuarioLogado = lerUsuarioQuelogou() || {}

    const navegacao = useHistory()
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [imagem2, setImagem2] = useState(null)
    const [estadoSenha, setEstadoSenha] = useState(0);
    const barraCarregamento = useRef(null);


    console.log(imagem)

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
        const situacao = new Promise(resolve => setTimeout(resolve, 2000));

        toast.promise(situacao, {
            pending: "Saindo",
            success: "Logoff",
            theme: 'light'
           
        })

        nave.push('/')
      
      };

    async function lerUsuario() {
        barraCarregamento.current.continuousStart();
        
        let get = await api.listarUsuario(usuarioLogado.id_usuario)
        
        if(get.erro)
            toast.error(get.erro)

        setarVariavel(get)
        barraCarregamento.current.complete();  

    }
    
  



    async function alterar() {

        let put = await api.alterarUsuario(usuarioLogado.id_usuario, nome, cpf, email, senha, imagem2)

       
        
        if(put.erro)
            return toast.error(put.erro)
              
        
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1500));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Alterando Seu Usuario',
                success: 'Usuário Alterado 👌',
               
            }
        )

        let login = await api.login(email, senha);
        await Cookies.set('usuario-logado', JSON.stringify(login));
    }

  

    function estadoDaSenha(senha) {
     
        if (senha === 0)
            return 'password'
        else if (senha === 1)
            return 'text'
       
    }

   
  
    
    function exibirImg() {
        if (imagem.includes("http"))
            return imagem
        else
            return `https://gameheroko.herokuapp.com/exibirImagem?imagem=${imagem}`
    }
   

    async function setarVariavel(retornoAPI) {
        setNome(retornoAPI.nm_usuario)
        setEmail(retornoAPI.ds_email)
        setSenha(retornoAPI.ds_senha)
        setCpf(retornoAPI.ds_cpf)
        setImagem(retornoAPI.img_usuario)
        setAll(retornoAPI)
    }


    useEffect(() => {  
        lerUsuarioQuelogou()
        lerUsuario()
    }, [])

    function preview() {
        if (imagem2 === null)
            return exibirImg()
        else
            return URL.createObjectURL(imagem2)
    }
   
    return (

        <div style={{ backgroundColor: "#333333" }}>
            
            <ToastContainer />
            <LoadingBar color="orange" ref={ barraCarregamento } />
            <Cabecalho corLetra="nulo" />
            <div style={{maxWidth:"1240px", margin:"auto"}}> 
            <Container>
                <article class="my-account">
                    <div className="user-picture">
                        <div className="img-user">
                            <img src={preview()} alt="" style={{ marginRight: "3em" }} />
                        </div>
                        <div className="camera">
                            <button>
                               <input type="file" className="upload" onChange={(e) => setImagem2(e.target.files[0])} />
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
                            <div className="inputSenha"><input type={estadoDaSenha(estadoSenha)} value={senha} onChange={e => setSenha(e.target.value)}></input> <img src="/assets/images/iconSenha.svg" onClick={ e =>  estadoSenha === 0 ? setEstadoSenha(1) : setEstadoSenha(0)}/> </div>
                            
                        </div>

                    </div>


                </article>
            </Container>
            </div>
            <Footer />
            
        </div>
    )
}

export {UsuarioIndex}
