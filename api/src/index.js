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


app.delete('/produto/:idProduto', async (req, resp) => {
    
    try {
    let r = await db.infoa_gab_produto.destroy({
       where: {
           id_produto : req.params.idProduto
       } 
    })
    resp.sendStatus(200); } catch (e) {
        resp.send( e.toString() )
    }
})


// Cadastrar Usuario
app.post('/cadastrar', async (req, resp) => {
try {
    
    let r = req.body;

    let u1 = await db.infoa_gab_usuario.findOne({ where: { ds_cpf: r.ds_cpf } })
    if(u1 != null)
    resp.send({ error: 'CPF já está sendo usado'})

    let l = await db.infoa_gab_usuario.create( {
        nm_usuario: r.nm_usuario,
        ds_cpf: r.ds_cpf,
        ds_email: r.ds_email,
        ds_senha: r.ds_senha,
    })

    resp.send(l);

} catch (error) {
    resp.send( error.toString() )
}
 
})

//Cadastrar Empresa
app.post('/cadastrar/empresa', async (req, resp) => {
    try {

        let r = req.body;

        let u1 = await db.infoa_gab_empresa.findOne( { where: { ds_cnpj: r.ds_cnpj } } )

        let l = await db.infoa_gab_empresa.create({
            nm_empresa: r.nm_empresa,
            ds_cnpj: r.ds_cnpj,
            ds_email: r.ds_email,
            ds_senha: r.ds_senha,
        })

        resp.send(l) } catch(e) {
            resp.send( e.toString() )
        }
})

//Verificar Se o Usuario Existe
app.post('/login', async (req, resp) => {
  
    
    let login = req.body;

    let r = await db.infoa_gab_usuario.findOne({
        where: {
                ds_email: login.ds_email,
                ds_senha: login.ds_senha
        }
    })
    
    if(r == null ) 
    return resp.send( { error: 'Credenciais Inválidas'})

    resp.send(r)


})



app.get('/login', async (req, resp) => {
    let r = await db.infoa_gab_usuario.findAll()

    resp.send(r)
})

//recuperarSenha
app.post('/login/senha', async (req, resp) => {

    let login = req.body;

    let q = await db.infoa_gab_usuario.findOne({
        where: {
        nm_usuario: login.nm_usuario,
        ds_email: login.ds_email,
        }
    })

    if(q == null)
    return resp.send({ error : 'Credenciais Inválidas' })
    resp.send(q) 
})

//recuperarEmail
app.post('/login/email', async (req, resp) => {
   

        let l = req.body

        let r = await db.infoa_gab_usuario.findOne({ where: {
            
            nm_usuario: l.nm_usuario,
            ds_senha: l.ds_senha
        }}
            
        ) 
            if(r == null)
            return resp.send({ error: 'Credenciais Inválidas' })
            resp.send(r)  
})  

//Redefinir Senha
app.put('/login/senha', async (req, resp) => {
    try {

        let l = req.body

        let r = await db.infoa_gab_usuario.update({ ds_senha: l.ds_senha }, {where:{  id_usuario: req.params.idUsuario }}) 
        resp.sendStatus(200)
        
    } catch(e) {
        resp.send( e.toString())
    }
})

//Redefinir Email
app.put('/login/email', async (req, resp) => {
    try {
        let l = req.body

        let r = await db.infoa_gab_usuario.update({ ds_email: l.ds_email }, { where: { id_usuario: req.params.idUsuario} })
        resp.sendStatus(200)
    } catch (e) {
        resp.send( e.toString() )
    }
})




app.listen( process.env.PORT, (x) => console.log(`Servidor Subiu na Porta ${process.env.PORT} Parabéns ai (: `));
