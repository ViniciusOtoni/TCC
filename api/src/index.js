import db from "./db.js";
import express from "express";
import cors from "cors";
import enviarEmail from "./email.js";

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



function ordenacao(criterio){
    let ordenacao = criterio;
    let ord;

    if(ordernacao === 'menor-maior'){
        ord = ['vl_preco', 'desc']
    }

    if(ordenacao === 'lancamento'){
        ord = ['dt_cadastro', 'desc']
    }

    if(ordenacao === 'avaliacao'){
        ord = ['vl_avaliacao', 'desc']
    }

    return ord;
}

app.get('/produto', async (req,resp) => {
    try{
            // ord = ordenacao(req.query.ordernacao);
            let r = await db.infoa_gab_produto.findAll({
            // order: [ord]
        })

        resp.send(r);
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
    resp.send( { error: 'CPF já foi cadastrado!' } );

    let u2 = await db.infoa_gab_usuario.findOne({ where: { ds_email: r.ds_email  } })
    if(u2 != null)
    resp.send( { error: 'Email já foi cadastrado!' } )

    let l = await db.infoa_gab_usuario.create( {
        nm_usuario: r.nm_usuario,
        ds_cpf: r.ds_cpf,
        ds_email: r.ds_email,
        ds_senha: r.ds_senha,
        img_usuario: r.img_usuario,
        ds_codigo: '',
        bt_gerente: false
    })

    resp.send(l);

} catch (error) {
    resp.send( error.toString() )
}
 
})

app.post('/cadastrar/gerente', async (req, resp) => {
    try {
    
        let r = req.body;
    
        let u1 = await db.infoa_gab_usuario.findOne({ where: { ds_cpf: r.ds_cpf } })
        if(u1 != null)
        resp.send( { error: 'CPF já foi cadastrado!' } );
    
        let u2 = await db.infoa_gab_usuario.findOne({ where: { ds_email: r.ds_email  } })
        if(u2 != null)
        resp.send( { error: 'Email já foi cadastrado!' } )
    
        let l = await db.infoa_gab_usuario.create( {
            nm_usuario: r.nm_usuario,
            ds_cpf: r.ds_cpf,
            ds_email: r.ds_email,
            ds_senha: r.ds_senha,
            img_usuario: r.img_usuario,
            ds_codigo: '',
            bt_gerente: true
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
            
            if(u1 != null)
            resp.send( { error: 'CNPJ já foi cadastrado!' } )
            
        let u2 = await db.infoa_gab_empresa.findOne( { where: { ds_email: r.ds_email } })
            
            if(u2 != null)
            resp.send( { error: 'Email já foi cadastrado!' })

        let l = await db.infoa_gab_empresa.create({
            nm_empresa: r.nm_empresa,
            ds_cnpj: r.ds_cnpj,
            ds_email: r.ds_email,
            ds_senha: r.ds_senha,
            img_empresa: r.img_empresa
            // ds_codigo: '',
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
        },
        raw: true
    }) 

    let r1 = await db.infoa_gab_empresa.findOne({
        where: {
            ds_email: login.ds_email,
            ds_senha: login.ds_senha
        },
        raw: true
    })
    
    if(r == null && r1 == null ) 
    return resp.send( { error: 'Credenciais Inválidas'})

    
    resp.send(r)


})

app.post('/login/gerente', async (req, resp) => {
    let login = req.body;

    let r = await db.infoa_gab_usuario.findOne( {
        where: {
            ds_email: login.ds_email,
            ds_senha: login.ds_senha,
            bt_gerente: true
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

app.get('/empresa', async (req, resp) => {
    let r = await db.infoa_gab_empresa.findAll()

    resp.send(r)
})


//recuperarSenha
app.post('/login/senha', async (req, resp) => {

try {
    let login = req.body;

    let q = await db.infoa_gab_usuario.findOne({
        where: {
            nm_usuario: login.nm_usuario,
            ds_email: login.ds_email
        }
    })

    
    if(q == null)
    return resp.send({ error : 'Credenciais Inválidas' })
    
    let cod = await db.infoa_gab_usuario.update({
        ds_codigo: Math.floor(Math.random() * (9999 - 1) + 9999) 
    }, { where: { id_usuario: q.id_usuario } })

    const response = await 
    enviarEmail(login.ds_email, login.assunto, login.cod);
  
    resp.send(response);
    
    
    resp.send(cod) 

    
    
    } catch( error ) {
        resp.send({ error: " Xish "})
    }
})

app.post('/enviar', async (req, resp) => {
    try {
       
    } catch(e) {
      resp.send(e)
    }
  
  })





//Redefinir Senha                                     
app.put('/login/senha/:codigo', async (req, resp) => {
    try {

        let l = req.body
        
        

        let r = await db.infoa_gab_usuario.update( { ds_senha: l.ds_senha }, { where: {  ds_codigo: req.params.codigo } }) 
        
        
        resp.sendStatus(200)
        
    } catch(error) {
        resp.send( { error: " XIIH " })
    }
})


//Mandar Email
app.post('/enviar', async (req, resp) => {
    try {
        
    } catch(e) {
      resp.send(e)
    }
  
  })




























































































































































































































































































































































































































































































































































































































app.listen( process.env.PORT, (x) => console.log(`Servidor Subiu na Porta ${process.env.PORT} Parabéns ai (: `));

