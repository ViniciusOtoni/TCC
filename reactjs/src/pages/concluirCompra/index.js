import Cabecalho from "../../components/cabecalho"
import { Container } from "./styled"
import { StyledInput } from '../../components/input/styled'
import { StyledButtonVerde } from "../../components/botaoVerde/styled"

import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie"

import { useEffect, useState } from "react"

import Api from "../../services/api"

const api = new Api()





export default function ConcluirCompra(props) {

    const nave = useHistory()
    let usuarioLogado = lerUsuarioQuelogou() || {}
    const [ hidden, setHidden ] = useState(false)
    const [ email, setEmail ] = useState(usuarioLogado.ds_email)
    const [ senha, setSenha ] = useState(usuarioLogado.ds_senha)
    const [ infoProduto, setInfoProduto ] = useState(props.location.state)

      

    const [ cep, setCep ] = useState('')
    const [ nmRua, setNmRua ] = useState('')
    const [ nmBairro, setNmBairro ] = useState('')
    const [ complemento, setComplemento ] = useState('')
    const [ nrRua, setNrRua ] = useState('')

    const [ formaPagamento, setFormaPagamento ] = useState('')
    
    const [ cv, setCv ] = useState('')
    const [ nmTitular, setNmTitular ] = useState('')
    const [ nrCartao, setNrCartao ] = useState('')
    const [ nrAgencia, setNrAgencia ] = useState('')
    const [ dtValidade, setDtValidade ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ parcelas, setParcelas ] = useState('')
   
   

    
    

    function Visible() {
        setHidden(true);
    }

    const confirmarDados =  async () => {
        let r = api.confirmarCompra(email, senha, cv, nrAgencia, nmTitular, dtValidade, nrCartao, cpf, nmBairro, nmRua, nrRua, cep, complemento, parcelas, formaPagamento)
    }
   
    function lerUsuarioQuelogou() {
        let logado = Cookies.get('usuario-logado');

            if(logado === undefined) {
            alert('Loga ae')
            nave.push('/carrinhoItem')
            } else {
                let usuarioLogado = JSON.parse(logado);
                return usuarioLogado;
            }
        }

        useEffect(() => {
            lerUsuarioQuelogou()
        })

    return (

        <div style={{ backgroundColor: "#333333" }}>
            <Cabecalho corLetra="nulo" />
           
           
                <Container>
                
               
                <main className="sub-main">
                    <div className="esquerda-grupo-input">
                        <div className="text-input">Inserir Cep</div>
                        <StyledInput value={cep} onChange={e => setCep(e.target.value)} placeholder="CEP" className="input-esquerda-grupo"/>

                        <div className="text-input">Inserir Nome da Rua</div>
                        <StyledInput value={nmRua} onChange={e => setNmRua(e.target.value)} placeholder="Nome da Rua" className="input-esquerda-grupo"/>

                        <div className="text-input">Inserir Nome do Bairro:</div>
                        <StyledInput value={nmBairro} onChange={e => setNmBairro(e.target.value)} placeholder="Nome do Bairro" className="input-esquerda-grupo"/>
                        
                        <div className="text-input">Complemento</div>
                        <StyledInput value={complemento} onChange={e => setComplemento(e.target.value)} placeholder="" className="input-esquerda-grupo"/>
                        
                        <div className="text-input">Inserir Número da Rua:</div>
                        <StyledInput  value={nrRua} onChange={e => setNrRua(e.target.value)} placeholder="Número da rua" className="input-esquerda-grupo"/>
                    </div>
                    <hr />
                    <div className="direita-grupo-input">

                    <div className="titulo-produto"> Informaçõe do Produto </div>
                    {infoProduto.map(x => 
                    <div>
                    <div className="row-produto"> 
                        <div className="total-compra"> Valor Total da Compra:  </div>
                        <div className="preço-compra"> { x.preco } </div>
                    </div>
                    <div className="row-produto"> 
                        <div className="total-compra"> Quantidade Total De produtos Adquiridos:  </div>
                        <div className="preço-compra"> { x.produto } </div>
                    </div> 
                    </div>)}
                    <div className="row-produto"> 
                        <div className="total-compra"> Entregue Por:  </div>
                        <div className="preço-compra"> GameBudSedex </div>
                    </div>


                        <div className="credit-card">
                            <button   value={formaPagamento}      onClick={ Visible } style={{marginBottom: ".3em"}}>Cartão de Crédito <img  className="img-button" src="/assets/images/cartao.svg" alt=""/></button>
                            <button   value={formaPagamento}      onClick={ Visible }>Cartão de Débito <img className="img-button2" src="/assets/images/cartao.svg" alt=""/></button>
                        </div>
                        { hidden && 
                            <div className="cartoes">
                                <div className="cartao">
                                    <img src="/assets/images/VISA.svg" alt="" />
                                    <button className="cartao-bolinha"></button>
                                </div>

                                <div className="cartao">
                                    <img  className="img-cartao-2" src="/assets/images/MASTERCARD.svg" alt="" />
                                    <button className="cartao-bolinha2"></button>
                                </div>

                                <div className="cartao">
                                    <img className="img-cartao-3" src="/assets/images/DINERS.svg" alt="" />
                                    <button className="cartao-bolinha2"></button>
                                </div>

                                <div className="cartao">
                                    <img className="img-cartao-4" src="/assets/images/HIPERCARD.svg" alt="" />
                                    <button className="cartao-bolinha2"></button>
                                </div>

                                <div className="cartao">
                                    <img className="img-cartao-5" src="/assets/images/ELO.svg" alt="" />
                                    <button className="cartao-bolinha2"></button>
                                </div>
                            </div>
                        }
                        <div className="Last-information-inputs">
                            <div className="Last-information-inputs1">
                                <div className="last-information-text1">CV</div>
                                <StyledInput value={cv} onChange={e => setCv(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Nome do Titular</div>
                                <StyledInput value={nmTitular} onChange={e => setNmTitular(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Número do cartão</div>
                                <StyledInput value={nrCartao} onChange={e => setNrCartao(e.target.value)} className="input-lastInfo-text1" />
                                
                                <div className="last-information-text1-last">Percelas:</div>
                                    <select className="parcelas-section" value={parcelas} onChange={e => setParcelas(e.target.value)} >
                                        <option value="2x"> 2x </option>
                                        <option value="3x"> 3x </option>
                                        <option value="4x"> 4x </option>
                                        <option value="5x"> 5x </option>
                                    </select>
                            </div>

                            <div className="Last-information-inputs2">
                                    <div className="last-information-text1">Número da Agência</div>
                                <StyledInput value={nrAgencia} onChange={e => setNrAgencia(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1"> Data de Validade </div>
                                <StyledInput value={dtValidade} onChange={e => setDtValidade(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1"> CPF do Titular </div>
                                <StyledInput value={cpf} onChange={e => setCpf(e.target.value)} className="input-lastInfo-text1" />

                                  
                                
                            
                                <Link to="/">  <div className="bottom">  <StyledButtonVerde onClick={confirmarDados} style={{marginTop:"4.8em", height:"2em", width:"17em", marginBottom:"5em"}} className="botao-buttom"> Concluir Compra! </StyledButtonVerde> </div> </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </Container>
            
        </div>
    )
}