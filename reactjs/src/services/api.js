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

    async listarProdutosId(id) {
        let r = await api.get(`/produto/${id}`);
        return r.data
    }
}

