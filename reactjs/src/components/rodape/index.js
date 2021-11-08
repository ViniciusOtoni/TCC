

import { RodaPe } from './styled.js'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <RodaPe>
            <main className="pc"> 
            <div className="section1">
                <div className="align-title">
                    <img className="title-image" src="/assets/images/logo.svg" alt=""/>
                    <div> GameBud </div>
                </div>
            </div>
            <div className="section2">
                <div className="align-itens-image">
                    <div className="item-image"> São Paulo </div>
                    <div className="item-image"> Brasil </div>
                    <div className="item-image"> Redes Sociais </div>
                    <div className="item-image"> 
                        <img src="/assets/images/facebook.svg" alt=""/>
                        <img src="/assets/images/instagram.svg" alt=""/>
                        <img src="/assets/images/twitter.svg" alt="" />
                    </div>
                </div>
                <div className="align">
                    <div className="align-items">
                        <Link to="/*"><div className="item"> Suporte </div></Link>
                        <Link to="/*"><div className="item"> Política de privacidade </div></Link>
                        <Link to="/termos" style={{textDecoration:"none", color:"#000000"}}>  <div className="item">  Termos   </div> </Link> 
                        <Link to="/termos"><div className="item"> Termos de servico </div></Link>
                        <Link to="/*"><div className="item"> Game Bud Studios </div></Link>
                        <Link to="/termos"><div className="item"> Termos de serviço </div></Link>
                        <Link to="/termos"><div className="item"> Sobre a GameBud </div></Link>
                    </div>
                    <div className="align-items">
                        <Link to="/termos"><div className="item"> Termos de Serviço e contrato do usuário</div></Link>
                        <Link to="/*"><div className="item"> Avisos sobre saúde</div></Link>
                        <Link to="/*"><div className="item"> Classificação </div></Link>
                        <Link to="/*"><div className="item"> Carreiras </div></Link>
                        <Link to="/*"><div className="item"> Desenvolvedores </div></Link>
                        <Link to="/loginGerente"><div className="item"> Mapa do Site </div></Link>
                    </div>
                    <div className="align-items">
                        <Link to="/*"><div className="item"> GameBude e o meio ambiente </div></Link>
                        <Link to="/*"><div className="item"> Facebook </div></Link>
                        <Link to="/*"><div className="item"> twitter </div></Link>
                        <Link to="/*"><div className="item"> YouTube </div></Link>
                        <Link to="/*"><div className="item"> Instagram </div></Link>
                        <Link to="/*"><div className="item"> Twitch </div></Link>
                    </div>
                </div>   
            </div>
            <div className="section3">
                <hr />
                <div className="text"> Copyright© 1995-2021 GameBud. Todos os direitos reservados.
GameBud LTDA., com sede em Av. dos Oitis, nº 1.460, Distrito Industrial, Manaus/AM, 69.007-002, inscrita no CNPJ/MF sob o nº. 00.280.273/0001-37.
LOJA ONLINE GameBud, operada pela SYNAPCOM COMERCIO ELETRÔNICO LTDA, com endereço na Avenida Antônio Cândido Machado, 3100, BOX 86 - Cajamar - SP, CEP: 07776-550, inscrita no CNPJ sob o nº. 27.932.734/0002-46 e IE 241.130.824.114. 
Contato Eletrônico para compras na Loja Online.
Esse website é melhor visualizado nas versões Microsoft Internet Explorer 11 ou superior e/ou nas últimas versões dos navegadores Google Chrome e Mozilla Firefox. </div>
                </div>
                </main>
                <main className="cell">
                    <header>
                    <div className="align-title">
                        <img className="title-image" src="/assets/images/logo.svg" alt=""/>
                        <div> GameBud </div>
                     </div>
                    </header>    
                    <section className="fxa1">
                        <div className="row"> 
                            <div className="topico"> Região: </div>
                            <div className="valor-topico"> Brasil </div>
                            <div className="regiao"> <img src="/assets/images/br.svg" alt="" /> </div>
                        </div>
                        <div className="row"> 
                            <div className="topico"> São Paulo: </div>
                            <div className="regiao"> <img src="/assets/images/sp.svg" alt="" /> </div>
                        </div>
                        <div className="row"> 
                            <div className="topico"> Desenvolvedores: </div>
                           
                        </div>
                        <div className="row"> 
                            <div className="topico"> Sobre Nós: </div>
            
                        </div>
                        <div className="row"> 
                            <div className="topico"> Termos de Uso: </div>
                        </div>
                        <div className="topico"> Suporte: </div> 
                        <div className="topico"> Redes Sociais: </div> 
                        <div className="row"> 
                            <div className="img1"> <img src="/assets/images/twitter.svg" alt="" /> </div>
                            <div className="img1"> <img src="/assets/images/instagram.svg" alt="" /> </div>
                            <div className="img1"> <img src="/assets/images/facebook.svg" alt="" /> </div>
                        </div>
                    </section>
                </main> 
        </RodaPe>    
    )
}