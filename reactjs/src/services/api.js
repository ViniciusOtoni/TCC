import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})


export default class Api {
    
    async listarProdutosPopulares () {
      let r =  await api.get(`/produto/populares`)
      return r.data;
    }

    async listarProdutos(order) {
        let r = await api.get('/produto?criterio=' + order)
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


    async cadastrarUsuario (nm_usuario, ds_cpf, ds_email,  ds_senha, img_usuario) {

        let jsonUsu = {
            nm_usuario,
            ds_cpf,
            ds_email,
            ds_senha,
            img_usuario
        }

        let r = await api.post(`/cadastrar`, jsonUsu)
        return r.data
    }

    async cadastrarEmpresa (nm_empresa, ds_cnpj, ds_email, ds_senha, img_empresa) {
        
        let jsonEmpresa = {
                nm_empresa,
                ds_cnpj,
                ds_email,
                ds_senha,
                img_empresa
        }

        let r  = await api.post(`/cadastrar/empresa`, jsonEmpresa)
        return r.data;
    }

    async login(ds_email, ds_senha) {

        let jsonLogin = {
            ds_email,
            ds_senha
        }

        let r = await api.post('/login', jsonLogin )
        return r.data;
    }

    async loginEmpresa(ds_email, ds_senha) {

        let jsonLogin = {
            ds_email,
            ds_senha
        }

        let r = await api.post('/login/empresa', jsonLogin )
        return r.data;
    }

    async loginGerente(ds_email, ds_senha) {
        let jsonLogin = {
            ds_email,
            ds_senha
        }

        let r = await api.post('/login/gerente', jsonLogin )
        return r.data;
    }



    async recuperarSenha(nm_usuario, ds_email) {
        let r = await api.post(`/login/senha`, { nm_usuario, ds_email } )
        return r.data;
    }

  

    async redefinirSenha(codigo, ds_senha) {
        let r = await api.put(`/login/senha/${codigo}`, { ds_senha })
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

