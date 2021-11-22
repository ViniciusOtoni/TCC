import axios from "axios";
const api = axios.create({
  baseURL: "http://201.52.72.162/",

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

  async listarProdutos2(page, pesquisa) {
    let r = await api.get(`/produtos?page=${page}&pesquisa=${pesquisa}`);
    return r.data;
  }

  async listarPedidos(page, pesquisa) {
    let r = await api.get(`/pedido?page=${page}&pesquisa=${pesquisa}`);
    return r.data;
  }

  async listarPedidos2(id) {
    let r = await api.get(`/pedidoTeste/${id}`);
    return r.data;
  }

  async AlterarProduto(
    nm_produto,
    vl_preco,
    ds_categoria,
    ds_codigo_barra,
    imagens,
    ds_produto,
    idProduto
  ) {
    let formData = new FormData();
    formData.append('nome', nm_produto);
    formData.append('preco', vl_preco);
    formData.append('categoria', ds_categoria);
    formData.append('codigoBarra', ds_codigo_barra);
    formData.append('descricao', ds_produto);
    formData.append('imagemPut', imagens[0]);
    formData.append('imagemPut', imagens[1]);
    formData.append('imagemPut', imagens[2]);
    formData.append('imagemPut', imagens[3]);

    
    let r = await api.put(`/produto/${idProduto}`, formData, {
      headers: {
        'Content-Type': 'multpart/form-data'
      }
    });
    return r.data;
  }

  async cadastrarProduto(
    nome,
    preco,
    categoria,
    codigoBarra,
    imagem,
    descricao
  ) {
    
    let formData = new FormData();
    formData.append('nome', nome)
    formData.append('preco', preco)
    formData.append('categoria', categoria)
    formData.append('codigoBarra', codigoBarra)
    formData.append('imagem', imagem[0])
    formData.append('imagem', imagem[1])
    formData.append('imagem', imagem[2])
    formData.append('imagem', imagem[3])
    formData.append('descricao', descricao)


    console.log(imagem)

    let r = await api.post(`/produto`, formData, {
      headers: {
        'Content-Type': 'multpart/form-data'
      }
    });
    return r.data;
  }

  async cadastrarUsuario(nm_usuario, ds_cpf, ds_email, ds_senha, img_usuario) {

    let formData = new FormData();
    formData.append('nm_usuario', nm_usuario)
    formData.append('ds_cpf', ds_cpf)
    formData.append('ds_email', ds_email)
    formData.append('ds_senha', ds_senha)
    formData.append('img_usuario', img_usuario)

    let r = await api.post(`/cadastrar`, formData, { 
      headers: {
        'Content-Type': 'multpart/form-data'
      }
     });
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



    let r = await api.post(`/validarCompra`, json);
    return r.data;
  }

  async alterarSituacaoPedido(id, situacao, data ) {
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

  async alterarUsuario(id, nome, cpf, email, senha, imagem2) {
    let formData = new FormData();
    formData.append('id', id);
    formData.append('nome', nome);
    formData.append('cpf', cpf);
    formData.append('senha', senha);
    formData.append('email', email);
    formData.append('imagem2', imagem2)
    
    let r = await api.put(`/usuario`, formData, {
      headers: {
        'Content-Type': 'multpart/form-data'
      }
    })
    return r.data;
  }

  async listarUsuario(id) {
    let r = await api.get(`/usuario/${id}`)
    return r.data;
  }

  async listarimg(imagem) {
    let r = await api.get(` /usuario?imagem=${imagem}`);
    return r.data;
  }

}

