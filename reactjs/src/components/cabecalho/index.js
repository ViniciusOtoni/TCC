import { StyledCabecalho } from "./styled";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { exibirImg } from "../../pages/usuario";

import Api from "../../services/api";


const api = new Api();





export default function Cabecalho(props) {
  let usuarioLogado = lerUsuarioQuelogou() || {};
  const [nm] = useState(usuarioLogado.nm_usuario);
  const [img] = useState(usuarioLogado.img_usuario);
  const [pesquisa, setPesquisa] = useState('');


  const navigation = useHistory();


  function lerUsuarioQuelogou() {
    let logado = Cookies.get("usuario-logado");
    if (logado === undefined) {
      return null;
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
  }

  const search = (event) => {

    if (event.key === 'Enter' || event.type === "click") {
      navigation.push({
        pathname: '/venda',
        state: { pesquisa }
      })
    }
  }
  

  function exibirImg() {
    if (img.includes("http"))
        return img
    else
        return `https://gameheroko.herokuapp.com//exibirImagem?imagem=${img}`
}

  useEffect(() => {
   
  }, [pesquisa])
  

  return (
    <StyledCabecalho corLetra={props.corLetra}>
      <main className="pc">
        <div className="logo-cabecalho">
          <Link to="/">
            <img src="/assets/images/logo.svg" alt="" />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="titulo"> GameBud </div>
          </Link>
        </div>

        <div className="pesquisa">
          <img onClick={search} className="lupa" src="./assets/images/lupa.svg" alt="" />
          <input id="button" onKeyPress={search} onChange={e => setPesquisa(e.target.value)} />
        </div>

        <Link to={Cookies.get("usuario-logado") === undefined ? "/login" : "/usuario"} // arrumar o usuario mandar pra home
          style={{ textDecoration: "none" }}>

          {Cookies.get("usuario-logado") === undefined ? (
            <div className="login"> Login </div>
          ) : (
            <div className="row-user">
              <div className="user-image">
                  <img src={ exibirImg() } alt="" />
              </div>
              <div className="user-login" title={nm}> {nm != null && nm.length >= 25 ? nm.substr(0, 25) + "..." : nm} </div>
            </div>
          )} 
        </Link>

        <Link to="/escolhaEntrega" style={{ textDecoration: "none" }}>
          <div className="entrega"> Pedidos </div>
        </Link>
        <Link to="/carrinhoItem" style={{ textDecoration: "none" }}>
          <div className="carrinho"> </div>
        </Link>
      </main>
      <main className="cell">
        <div className="agp-direita">
          <div className="carrinho"> </div>
          <div className="lupa">
            <img src="/assets/images/lupaCell.svg" alt="" />
          </div>
        </div>

        <div className="logo-cabecalho">

          <img src="/assets/images/logo.svg" alt="" />
        </div>
        <div className="column">
          <div className="login"> Login </div>
          <div className="entrega"> Entregas </div>
        </div>
      </main>
      <hr />
    </StyledCabecalho>
  );
}
