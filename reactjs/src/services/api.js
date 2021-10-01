import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {
    
    async listarProdutosPopulares () {
      let r =  await api.get(`/produto/populares`)
      return r.data;
    }

    async listarProdutos() {
        let r = await api.get(`/produto`)
        return r.data
    }

    async cadastrarProduto( nm_produto, vl_preco, ds_categoria, ds_codigo_barra, bt_situacao, vl_avaliacao, img_produto, img_secundaria, img_terciaria, img_quartenaria) {
        
        let jsonProduto = {
            nm_produto,
            vl_preco,
            ds_categoria,
            ds_codigo_barra,
            bt_situacao,
            vl_avaliacao,
            img_produto,
            img_secundaria,
            img_terciaria,
            img_quartenaria
        }

        let r = await api.post(`/produtos`, jsonProduto);
        return r.data;
    }


    async cadastrarUsuario (nm_usuario, ds_cpf, ds_email,  ds_senha) {

        let jsonUsu = {
            nm_usuario,
            ds_cpf,
            ds_email,
            ds_senha
        }

        let r = await api.post(`/cadastrar`, jsonUsu)
        return r.data
    }

    async cadastrarEmpresa (nm_empresa, ds_cnpj, ds_email, ds_senha) {
        let jsonEmpresa = {
            nm_empresa,
             ds_cnpj,
            ds_email,
            ds_senha
        }

        let r  = await api.post(`/cadastrar/empresa`, jsonEmpresa)
        return r.data;
    }

    async login(email, senha) {
        let r = await api.post('/login', { email, senha } )
        return r.data;
    }

    async recuperarSenha(nome, email, id) {
        let r = await api.post(`/login/senha/${id}`, { nome, email})
        return r.data;
    }

    async redefinirSenha(id, senha) {
        let r = await api.put(`/login/senha/${id}`, { senha })
        return r.data;
    }

    async recuperarEmail(id, nome, senha) {
        let r = await api.post(`/login/email/${id}`, { nome, senha})
        return r.data;
    }

    async redefinirEmail(id, email) {
        let r = await api.put(`/login/email/${id}`, { email })
        return r.data;
    }


    async listarProdutosId(id) {
        let r = await api.get(`/produto/${id}`);
        return r.data
    }

    async alterarProduto(id) {
        let r = await api.put(`/produto/${id}`);
        return r.data;
    }

    async removerProduto(id) {
        let r = await api.delete(`/produto/${id}`);
        return r.data;
    }
}

