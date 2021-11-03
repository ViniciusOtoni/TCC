import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3030",
});

export default class Api {
  async listarProdutosPopulares() {
    let r = await api.get(`/produto/populares`);
    return r.data;
  }

  async confimarCompra(
    ds_cpf,
    nm_rua,
    nm_bairro,
    ds_complemento,
    nr_numero_rua,
    ds_cv,
    nm_titular,
    nr_cartao,
    nr_agencia,
    dt_validade,
    ds_cpf_titular,
    id_usuario
  ) {
    let jsonCompra = {
      ds_cpf,
      nm_rua,
      nm_bairro,
      ds_complemento,
      nr_numero_rua,
      ds_cv,
      nm_titular,
      nr_cartao,
      nr_agencia,
      dt_validade,
      ds_cpf_titular,
      id_usuario,
    };

    let r = await api.post(`/validarCompra`, jsonCompra);
    return r.data;
  }

  async alterarAvaliacao(idProduto, vl_avaliacao) {
    let r = await api.put(`/produto/avaliacao/${idProduto}`, { vl_avaliacao });
    return r.data;
  }

  async listarProdutos(order, pesquisa, categoria, page) {
    let r = await api.get(
      `/produto?criterio=${order}&filtro=${pesquisa}&categoria=${categoria}&page=${page}`
    );
    return r.data;
  }

  async listarProdutos2(page) {
    let r = await api.get(`/produtos?page=${page}`);
    return r.data;
  }

  async listarPedidos(page, id) {
    let r = await api.get(`/pedido?page=${page}`, {id});
    return r.data;
  }

  async listarPedidos2(id) {
    let r = await api.get(`/pedidoTeste`, id);
    return r.data;
  }

  async AlterarProduto(
    nm_produto,
    vl_preco,
    ds_categoria,
    ds_codigo_barra,
    img_produto,
    img_secundaria,
    img_terciaria,
    img_quartenaria,
    idProduto
  ) {
    let jsonProduto = {
      nm_produto,
      vl_preco,
      ds_categoria,
      ds_codigo_barra,
      img_produto,
      img_secundaria,
      img_terciaria,
      img_quartenaria,
    };

    let r = await api.put(`/produto/${idProduto}`, jsonProduto);
    return r.data;
  }

  async cadastrarProduto(
    nm_produto,
    vl_preco,
    ds_categoria,
    ds_codigo_barra,
    img_produto,
    img_secundaria,
    img_terciaria,
    img_quartenaria
  ) {
    let jsonProduto = {
      nm_produto,
      vl_preco,
      ds_categoria,
      ds_codigo_barra,
      img_produto,
      img_secundaria,
      img_terciaria,
      img_quartenaria,
    };

    let r = await api.post(`/produto`, jsonProduto);
    return r.data;
  }

  async cadastrarUsuario(nm_usuario, ds_cpf, ds_email, ds_senha, img_usuario) {
    let jsonUsu = {
      nm_usuario,
      ds_cpf,
      ds_email,
      ds_senha,
      img_usuario,
    };

    let r = await api.post(`/cadastrar`, jsonUsu);
    return r.data;
  }

  async cadastrarEmpresa(nm_empresa, ds_cnpj, ds_email, ds_senha, img_empresa) {
    let jsonEmpresa = {
      nm_empresa,
      ds_cnpj,
      ds_email,
      ds_senha,
      img_empresa,
    };

    let r = await api.post(`/cadastrar/empresa`, jsonEmpresa);
    return r.data;
  }

  async login(ds_email, ds_senha) {
    let jsonLogin = {
      ds_email,
      ds_senha,
    };

    let r = await api.post("/login", jsonLogin);
    return r.data;
  }

  async loginEmpresa(ds_email, ds_senha) {
    let jsonLogin = {
      ds_email,
      ds_senha,
    };

    let r = await api.post("/login/empresa", jsonLogin);
    return r.data;
  }

  async loginGerente(ds_email, ds_senha) {
    let jsonLogin = {
      ds_email,
      ds_senha,
    };

    let r = await api.post("/login/gerente", jsonLogin);
    return r.data;
  }

  async recuperarSenha(nm_usuario, ds_email) {
    let r = await api.post(`/login/senha`, { nm_usuario, ds_email });
    return r.data;
  }

  async redefinirSenha(codigo, ds_senha) {
    let r = await api.put(`/login/senha/${codigo}`, { ds_senha });
    return r.data;
  }

  async listarProdutosId(id) {
    let r = await api.get(`/produto/${id}`);
    return r.data;
  }

  async alterarProduto(id) {
    let r = await api.put(`/produto/${id}`);
    return r.data;
  }

  async removerProduto(idProduto) {
    let r = await api.delete(`/produto/${idProduto}`);
    return r.data;
  }

  async confirmarCompra(
    email,
    senha,
    cv,
    agencia,
    titular,
    dt_validade,
    num_cartao,
    cpf_titular,
    bairro,
    rua,
    numero_rua,
    cep,
    complemento,
    parcelas,
    forma_pagamento,
    total,
    qtd,
    nm_produto,
    qtd_produtos
  ) {
    let produtos = {};
    for (let i = 0; i < nm_produto.length; i++) {
      produtos[nm_produto[i]] = Number(qtd_produtos[i]);
    }

    let json = {
      ds_email: email,
      ds_senha: senha,

      cv: cv,
      agencia: agencia,
      titular: titular,
      dt_validade: dt_validade,
      num_cartao: num_cartao,
      cpf_titular: cpf_titular,

      bairro: bairro,
      rua: rua,
      numero_rua: numero_rua,
      cep: cep,
      complemento: complemento,
      parcelas: parcelas,
      forma_pagamento: forma_pagamento,
      total: total,
      qtd: qtd,
      produtos: produtos,
    };

    console.log(json);

    let r = await api.post(`/validarCompra`, json);
    return r.data;
  }

  async alterarSituacaoPedido(id, situacao, data) {
    let r = await api.put(`/pedido/${id}`, { situacao, data });
    return r.data;
  }


  async listarPedidosDoUsuario(id, page) {
    let r = await api.get(`/pedido/${id}?page=${page}`)
    return r.data;
  }
  
    async listarPedidoPorVenda(id) {
      let r = await api.get(`/listarPedido/${id}`);
      return r.data;
  }
}

