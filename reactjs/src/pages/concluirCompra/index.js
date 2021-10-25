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

    const [ vl1, setVl1 ] = useState('')
    const [ vl2, setVl2 ] = useState('')
    const [ vl3, setVl3 ] = useState('')
    const [ vl4, setVl4 ] = useState('')
    const [ vl5, setVl5 ] = useState('')

    const [ formaPagamento, setFormaPagamento ]= useState('')
    const [ vl11, setVl11 ] = useState('')
    const [ vl22, setVl22 ] = useState('')
    const [ vl33, setVl33 ] = useState('')
    const [ vl44, setVl44 ] = useState('')
    const [ vl55, setVl55 ] = useState('')
    const [ vl66, setVl66 ] = useState('')
    const [ vl77, setVl77 ] = useState('')

    function Visible() {
        setHidden(true);
    }

    const confirmarDados =  async () => {
        let r = api.confirmarCompra(email, senha, vl11,  vl44, vl22, vl55,  vl33, vl66, vl3, vl2, vl5, vl1, vl4, vl77, infoProduto.nm_produto,  1, infoProduto.vl_preco )
    }
   
    function lerUsuarioQuelogou() {
        let logado = Cookies.get('usuario-logado');

            if(logado === undefined) {
            toast.dark('Loga ae');
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
                <ToastContainer/>
               
                <main className="sub-main">
                    <div className="esquerda-grupo-input">
                        <div className="text-input">Inserir Cep</div>
                        <StyledInput value={vl1} onChange={e => setVl1(e.target.value)} placeholder="CEP" className="input-esquerda-grupo"/>

                        <div className="text-input">Inserir Nome da Rua</div>
                        <StyledInput value={vl2} onChange={e => setVl2(e.target.value)} placeholder="Nome da Rua" className="input-esquerda-grupo"/>

                        <div className="text-input">Inserir Nome do Bairro:</div>
                        <StyledInput value={vl3} onChange={e => setVl3(e.target.value)} placeholder="Nome do Bairro" className="input-esquerda-grupo"/>
                        
                        <div className="text-input">Complemento</div>
                        <StyledInput value={vl4} onChange={e => setVl4(e.target.value)} placeholder="" className="input-esquerda-grupo"/>
                        
                        <div className="text-input">Inserir Número da Rua:</div>
                        <StyledInput  value={vl5} onChange={e => setVl5(e.target.value)} placeholder="Número da rua" className="input-esquerda-grupo"/>
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
                            <button onClick={ Visible } style={{marginBottom: ".3em"}}>Cartão de Crédito <img  className="img-button" src="/assets/images/cartao.svg" alt=""/></button>
                            <button onClick={ Visible }>Cartão de Débito <img className="img-button2" src="/assets/images/cartao.svg" alt=""/></button>
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
                                <StyledInput value={vl11} onChange={e => setVl11(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Nome do Titular</div>
                                <StyledInput value={vl22} onChange={e => setVl22(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1">Número do cartão</div>
                                <StyledInput value={vl33} onChange={e => setVl33(e.target.value)} className="input-lastInfo-text1" />
                                
                                <div className="last-information-text1-last">Percelas:</div>
                                    <select className="parcelas-section" value={vl77} onChange={e => setVl77(e.target.value)} >
                                        <option value="2x"> 2x </option>
                                        <option value="3x"> 3x </option>
                                        <option value="4x"> 4x </option>
                                        <option value="5x"> 5x </option>
                                    </select>
                            </div>

                            <div className="Last-information-inputs2">
                                    <div className="last-information-text1">Número da Agência</div>
                                <StyledInput value={vl44} onChange={e => setVl44(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1"> Data de Validade </div>
                                <StyledInput value={vl55} onChange={e => setVl55(e.target.value)} className="input-lastInfo-text1"/>

                                <div className="last-information-text1"> CPF do Titular </div>
                                <StyledInput value={vl66} onChange={e => setVl66(e.target.value)} className="input-lastInfo-text1" />
                            
                                <Link to="/">  <div className="bottom">  <StyledButtonVerde onClick={confirmarDados} style={{marginTop:"4.8em", height:"2em", width:"17em", marginBottom:"5em"}} className="botao-buttom"> Concluir Compra! </StyledButtonVerde> </div> </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </Container>
        </div>
    )
}