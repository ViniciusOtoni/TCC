import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/rodape";
import { Container } from "./styled";

export default function Venda() {
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <Cabecalho />

      <Container>
        <main>
          <div className="textos">
            <h1>Seja bem vindo! Saiba um pouco sobre nossa trajetória:</h1>
            <p>
              A Game Bud é uma das maiores lojas especializadas em jogos no
              Brasil. Como importadores das principais marcas (como Nintendo,
              Sony e Microsoft), trazemos ao público uma grande variedade de
              produtos exclusivos com o melhor preço do mercado.
            </p>
            <p className="ultimoP">
              {" "}
              A marca pertence ao BUD Group, holding especialista em comércio de
              games no cenário nacional, provendo ainda mais força e
              profissionalismo para as atividades. O objetivo maior é oferecer
              aos clientes uma experiência de compra única, com agilidade, bom
              atendimento e pós-venda impecável.
            </p>
            <p>
              Além do nosso site, você também pode comprar em nossas lojas
              físicas, nas cidades de Campinas-SP e Ribeirão Preto-SP.
              Independente de onde esteja, pode sempre contar com a qualidade e
              preços imbatíveis da marca.
            </p>
          </div>
        </main>
      </Container>

      <Footer />
    </div>
  );
}
