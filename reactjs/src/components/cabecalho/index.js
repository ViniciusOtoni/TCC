import { StyledCabecalho } from "./styled";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import Api from "../../services/api"
const api = new Api();

function lerUsuarioQuelogou() {
  let logado = Cookies.get("usuario-logado");
  if (logado === undefined) {
    return null;
  }

  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
}

export default function Cabecalho(props) {
  let usuarioLogado = lerUsuarioQuelogou() || {};
  const [nm] = useState(usuarioLogado.nm_usuario);
  const [img] = useState(usuarioLogado.img_usuario);

  const logof = () => {
    Cookies.remove("usuario-logado");
  };

  async function autocomplete(){
      let resp = await api.listarProdutos();
      console.log(resp)
  }

  
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const movieItems = [
    {
      id: 0,
      title: "Titanic",
      description: "A movie about love",
    },
    {
      id: 1,
      title: "Dead Poets Society",
      description: "A movie about poetry and the meaning of life",
    },
    {
      id: 2,
      title: "Terminator 2",
      description: "A robot from the future is sent back in time",
    },
    {
      id: 3,
      title: "Alien 2",
      description: "Ripley is back for a new adventure",
    },
  ];

  useEffect(() => {
    console.log(movieItems)
}, [])

  return (
    <StyledCabecalho corLetra={props.corLetra}>
      <main className="pc">
        <div className="logo-cabecalho">
            <Link to="/">  
                <img onClick={logof} src="/assets/images/logo.svg" alt="" />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="titulo"> GameBud </div>
            </Link>
        </div>

        <div className="pesquisa">
            <ReactSearchAutocomplete items={movieItems} className="input" placeholder="pesquise seu produto"
                                     onSearch={handleOnSearch}
                                     onHover={handleOnHover}
                                     onSelect={handleOnSelect}
                                     onFocus={handleOnFocus}
                                     onClear={handleOnClear}
                                     resultStringKeyName="title"/>
        </div>

        <Link to={Cookies.get("usuario-logado") === undefined ? "/login" : "/"}
              style={{ textDecoration: "none" }}>
          
          {Cookies.get("usuario-logado") === undefined ? (
            <div className="login"> Login </div>
          ) : (
            <div className="row-user">
              <div className="user-image">
                
                <img src={img} alt="" />
              </div>
              <div className="user-login"> {nm} </div>
            </div>
          )}
        </Link>

        <Link to="/escolhaEntrega" style={{ textDecoration: "none" }}>
          
          <div className="entrega"> Entregas </div>
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
