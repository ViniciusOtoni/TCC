import { Container } from './styled'
import Footer from "../../components/rodape"

export default function Termos() {
    return (
        <main style={{ backgroundColor: "#333333", width: "1340px", margin: "auto" }}>
            <Container>
                <div className="cabecalho">
                    <img src="/assets/images/logo.svg" alt="" />
                    <h2 className="nomeEmpresa">GameBud</h2>
                </div>
                
                <div className="textos">
                    <h1>Termos e Serviços:</h1>
                    <div>Bem vindo à família de website do<br/>
                        GameBud, não se esqueça que você está legalmente sujeito <br /> a esses termos e serviços.</div>
                    <div className="barra"></div>
                    <h1>1. Usuários com ou sem conta:</h1>
                    <div className="Secondh2">Não é nescessário criar uma conta, para utilizar o nosso site, mas acreditamos para que o usuario possua uma melhor experiência e possua acesso à mais benefícios que crie uma conta em nosso site.</div>
                    <h1>2. Capacidade de Aceitar os termos e serviços:</h1>
                    <div className="Thirdh2">Estes Termos de serviço formam um contrato legal celebrado entre você e nós. Ao utilizar nossos Sites, você afirma que é maior de 18 anos de idade, um menor emancipado ou tem consentimento legal dos pais ou responsáveis e tem total capacidade e competência para vincular-se aos termos, condições, obrigações, representações e responsabilidades determinados nestes Termos de serviço e para cumprir e seguir estes Termos de serviço.</div>
                    <h1>3. Conteúdo gerado pelo usuário:</h1>
                    <div className="Fourthh2">Alguns dos nossos Sites têm ferramentas que possibilitam a comunicação entre os usuários e a criação, publicação, upload, compartilhamento e distribuição de diferentes formas de conteúdo relacionados aos nossos Sites ou neles, inclusive imagens, fotografias, vídeos e outras informações ou materiais (coletivamente denominados “Conteúdo Gerado pelo Usuário”).     
                        Nós não podemos monitorar ou gerenciar todo Conteúdo Gerado pelo Usuário. Não garantimos a precisão, integridade ou qualidade do Conteúdo Gerado pelo Usuário e não o endossamos de nenhuma forma. Aproveite o que os outros usuários publicarem ou compartilharem nos nossos Sites, mas faça-o por sua própria conta e risco.
                        Todo Conteúdo Gerado pelo Usuário disponibilizado nos nossos Sites é da inteira responsabilidade da pessoa que o forneceu.
                    </div>
                    <h1>4. O seu trabalho protegido por direitos autorais:</h1>
                    <div className="fifthh2">Assim como a SIE LLC exige que os usuários dos nossos Sites respeitem os nossos direitos autorais e os das nossas <br />afiliadas, licenciadores e parceiros comerciais, respeitamos os direitos autorais das outras pessoas. Para isso, adotamos esta política de direitos autorais de acordo com a Digital Millennium Copyright Act (Lei dos Direitos Autorais 17 U.S.C. 512 et seq. do código civil norte-americano). Se, de boa-fé, você acredita que seu material protegido por direitos autorais foi reproduzido nos nossos Sites sem autorização, de modo que constitua uma violação de direitos autorais, ou se você é o fornecedor de conteúdo e acredita que uma notificação de violação de direitos autorais foi enviada erroneamente a você em virtude de engano ou falha na identificação do conteúdo supostamente protegido por direitos autorais.</div>
                </div>
                <Footer />
        </Container>
       </main>
    )
}