import db from "./db.js";
import express from "express";
import cors from "cors";



const app = express();
app.use(cors());
app.use(express.json());


app.get('/produto/populares', async (req,resp) => {
    try{
        let r = await db.infoa_gab_produto.findAll({ where: { vl_avaliacao: 4 }})
        resp.send(r)
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})

app.get('/produto', async (req,resp) => {
    try{
        let r = await db.infoa_gab_produto.findAll()
        resp.send(r)
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})

app.get('/produto/:idProduto', async (req, resp) =>{
    try{
        let r = await db.infoa_gab_produto.findOne({ where: { id_produto: req.params.idProduto }})
        resp.send(r);
    } catch (e){
        resp.send({ erro: `${e.toString()}` })
    }    
})

app.post('/produto', async (req, resp) => {
    try{
        let l = req.body

        let r = await db.infoa_gab_produto.create({
            nm_produto: l.nm_produto, 
            vl_preco: l.vl_preco,
            dt_cadastro: Date.now(),
            ds_categoria: l.ds_categoria,
            ds_codigo_barra: l.ds_codigo_barra,
            bt_situacao: l.bt_situacao,
            vl_avaliacao: l.vl_avaliacao,
            img_produto: l.img_produto,
            img_secundaria: l.img_secundaria,
            img_terciaria: l.img_terciaria,
            img_quartenaria: l.img_quartenaria
        })

        resp.send(r)
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})

app.put('/produto/:idProduto', async (req, resp) => {
    try{    
        let produto = req.body;

        let r = await db.infoa_gab_produto.update({
            nm_produto: produto.nm_produto, 
            vl_preco: produto.vl_preco,
            ds_categoria: produto.ds_categoria,
            ds_codigo_barra: produto.ds_codigo_barra,
            bt_situacao: produto.bt_situacao,
            vl_avaliacao: produto.vl_avaliacao,
            img_produto: produto.img_produto,
            img_secundaria: produto.img_secundaria,
            img_terciaria: produto.img_terciaria,
            img_quartenaria: produto.img_quartenaria
        },
        {
            where: { id_produto: req.params.idProduto }
        })     

        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})


app.listen( process.env.PORT, (x) => console.log(`Servidor Subiu na Porta ${process.env.PORT} Parabéns ai (: `));
