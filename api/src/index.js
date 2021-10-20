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
        
        r = r.map(item => {
            return {
                id: item.id_produto,
                produto: item.nm_produto,
                preco: item.vl_preco,
                avalicao: item.vl_avaliacao,
                lancamento: item.dt_cadastro,
                imagem: item.img_produto,
                imagem_dois: item.img_secundaria,
                imagem_tres: item.img_terciaria,
                imagem_quatro: item.img_quartenaria,
            }
        })
        
        
        resp.send(r)
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})



function ordenacao(criterio){
    switch (criterio){
        case 'menor-maior' : return ['vl_preco', 'asc'];
        case 'maior-menor' : return ['vl_preco', 'desc'];
        case 'lancamento' : return ['dt_cadastro', 'asc'];
        case 'avaliacao' : return ['vl_avaliacao', 'desc'];
        case 'A-Z' : return ['nm_produto', 'asc'];
        case 'Z-A' : return ['nm_produto', 'desc'];

        default: return ['vl_preco', 'desc']
    }
}

app.get('/produto:/criterio', async (req,resp) => {
    try{
        let ord = ordenacao(req.params.criterio);
        let r = await db.infoa_gab_produto.findAll({ 
            order: [ord]
        })

        r = r.map(item => {
            return {
                id: item.id_produto,
                produto: item.nm_produto,
                preco: item.vl_preco,
                avalicao: item.vl_avaliacao,
                lancamento: item.dt_cadastro,
                imagem: item.img_produto,
                imagem_dois: item.img_secundaria,
                imagem_tres: item.img_terciaria,
                imagem_quatro: item.img_quartenaria,
            }
        })

        resp.send(r);
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})

app.get('/produto', async (req, resp) => {
    try {
        let r = await db.infoa_gab_produto.findAll();
        resp.send(r);

    } catch (error) {
        resp.send(`erro no get produto ${error}`)
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
            bt_situacao: true,
            vl_avaliacao: '4',
            img_produto: l.img_produto,
            img_secundaria: l.img_secundaria,
            img_terciaria: l.img_terciaria,
            img_quartenaria: l.img_quartenaria,
            qtd_parcelas: 0
        })

        resp.send(r)
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})

app.put('/produto/:idProduto', async (req, resp) => {
    try{    
        let l = req.body;
        

        let r = await db.infoa_gab_produto.update({
            nm_produto: l.nm_produto, 
            vl_preco: l.vl_preco,
            dt_cadastro: Date.now(),
            ds_categoria: l.ds_categoria,
            ds_codigo_barra: l.ds_codigo_barra,
            bt_situacao: true,
            vl_avaliacao: '4',
            img_produto: l.img_produto,
            img_secundaria: l.img_secundaria,
            img_terciaria: l.img_terciaria,
            img_quartenaria: l.img_quartenaria,
            qtd_parcelas: 0
        },
        {
            where: { id_produto: req.params.idProduto }
        })     

        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }    
})

//Sistema de avaliação
app.put('/produto/avaliacao/:idProduto', async (req, resp) => {
    try {
        let r = req.body;

        let r1 = await  db.infoa_gab_produto.update({
            vl_avaliacao: r.vl_avaliacao
        },{ where: { id_produto: req.params.idProduto } })

        resp.sendStatus(200)

    } catch( error ) {
        resp.send( { error: " Xish " })
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
    resp.send( { error: 'Email já foi cadastrado!' } );

    let u3 = await db.infoa_gab_usuario.findOne( { where: { nm_usuario: r.nm_usuario } })
    if(u3 === '' )
    resp.send({ error: 'Preencha todos os campos '})

    


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


    if(r == null ) 
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

   

    
    if(q == null )
    return resp.send({ error : 'Credenciais Inválidas' })
    

    let rCod =  Math.floor(Math.random() * (9999 - 1) + 9999) 

    let cod = await db.infoa_gab_usuario.update({
        ds_codigo: rCod
    }, { where: { id_usuario: q.id_usuario } })

  
    const response = await enviarEmail(login.ds_email, rCod);
  
    resp.send(response);
    
    

    
    
    
    } catch( error ) {
        resp.send({ error: " Xish "})
    }

    
})






//Redefinir Senha                                     
app.put('/login/senha/:codigo', async (req, resp) => {
    try {

        let l = req.body
        
        

        let r = await db.infoa_gab_usuario.update( { ds_senha: l.ds_senha, ds_codigo: ' código invalido esperando a validação agr ' }, { where: {  ds_codigo: req.params.codigo } }) 
    
        
        resp.sendStatus(200)
        
    } catch(error) {
        resp.send( { error: " XIIH " })
    }
})


app.post('/validarCompra', async ( req, resp ) => {
    try {
        
    } catch(e) {
      resp.send(e)
    }
  
  })







app.get('/pedido', async (req, resp) => {
    try {
        let x = await db.infoa_gab_entrega.findAll();
        resp.send(x);

    } catch (error) {
        resp.send(`Erro no get da rota /pedido ${error}`)
    }
})

/*
app.post('/pedido', async (req, resp) => {
    try {
        let corpo = req.body;

        let usuario = await db.infoa_gab_usuario.findOne({ where: { nm_usuario: corpo.usuario } });
        
        let quantidade = await db.infoa_gab_venda_item.findOne({ where: { qtd_items: qtd_items, id_venda: total.id_venda }});
        let total = await db.infoa_gab_venda.findOne({ where: { id_venda: quantidade.id_venda } });

        let r = await db.infoa_gab_entrega.create({
            id_venda_item: ...,
            dt_saida: Date.now(),
            qtd_items: quantidade.qtd_items,
            total: total.ds_pagamento,
            ds_situacao: corpo.ds_situacao,
            usuario: usuario.nm_usuario,
        })

        resp.send(r);

    } catch (error) {
        
    }
})*/










































































































































































































































































































































































































































































































































































































/*


      let q = req.body

      let r1 = await db.infoa_gab_endereco.create({
        ds_cep: q.ds_cep,
        nm_rua: q.nm_rua,
        nm_bairro: q.nm_bairro,
        ds_complemento: q.ds_complemento,
        nr_numero_rua: q.nr_numero_rua,
        id_usuario: q.id_usuario,

      })

       

        let r = await db.infoa_gab_cartao.create({
            ds_cv: q.ds_cv,
            nm_titular: q.nm_titular,
            nr_cartao: q.nr_cartao,
            nr_agencia: q.nr_agencia,
            dt_validade: q.dt_validade,
            ds_cpf_titular: q.ds_cpf_titular,
            id_usuario: q.id_usuario
    })  
        resp.send(r)

       
        
    } catch (error) {
        resp.send({ error: "Xish" })
    }
})*/

app.get('/validarCompra', async  ( req, resp ) => {
    let r = await db.infoa_gab_cartao.findAll()
    resp.send(r)
})

app.listen( process.env.PORT, (x) => 
            console.log(`Servidor na Porta ${process.env.PORT}`));

