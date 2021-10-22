import db from "./db.js";
import express from "express";
import cors from "cors";
import enviarEmail from "./email.js";



import  Sequelize from "sequelize";
const { Op } = Sequelize;

const app = express();
app.use(cors());
app.use(express.json());


app.get('/produto/populares', async (req,resp) => {
    try{
        let r = await db.infoa_gab_produto.findAll({ where: 
            { vl_avaliacao:  
                 { [Op.gte]: '4' } } })
        
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
        case 'avaliacao'  : return ['vl_avaliacao', 'desc'];
        case 'A-Z' : return ['nm_produto', 'asc'];
        case 'Z-A' : return ['nm_produto', 'desc'];

        default: return ['vl_preco', 'desc']
    }
}

app.get('/produto', async (req,resp) => {
    try{
        let ord = ordenacao(req.query.criterio);
        let filtro = req.query.filtro;
        let categoria = req.query.categoria;

        console.log(filtro)
        console.log(categoria)

        let r = await db.infoa_gab_produto.findAll({ 
            where: {
                [Op.or]: [
                    { nm_produto: { [Op.like]: filtro }},
                    { ds_plataforma: categoria }
                ]
            },
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

app.get('/produtosPesquisa', async (req, resp) => {
    try{
            let ord = req.query.filtro;

            console.log('ord:'+ord);

            let r = await db.infoa_gab_produto.findAll({
                where: { nm_produto: ord }
            })

            resp.send(r);
    } catch (error){
            resp.send(`erro no get produtosPesquisa ${error}`)
    }    
})

app.get('/produtos', async (req, resp) => {
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
            vl_avaliacao:  5,
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
            ds_categoria: l.ds_categoria,
            ds_codigo_barra: l.ds_codigo_barra,
            img_produto: l.img_produto,
            img_secundaria: l.img_secundaria,
            img_terciaria: l.img_terciaria,
            img_quartenaria: l.img_quartenaria,
            
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

        let r3 = await db.infoa_gab_produto.findOne({
            where: {
                id_produto: req.params.idProduto
            }   
        })

      
       let avaliacao = (r3.vl_avaliacao + r.vl_avaliacao) / 2

        let r1 = await  db.infoa_gab_produto.update({
            vl_avaliacao: avaliacao
        }, { where: { id_produto: req.params.idProduto } })

        

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

app.post('/cadastrarGerente', async ( req, resp ) => {
    let r = req.body;

    let u1 = await db.infoa_gab_usuario.findOne({ where: { ds_cpf: r.ds_cpf } })
    if(u1 != null)
    resp.send( { error: 'CPF já foi cadastrado!' } );

    let u2 = await db.infoa_gab_usuario.findOne({ where: { ds_email: r.ds_email  } })
    if(u2 != null)
    resp.send( { error: 'Email já foi cadastrado!' } );

    let l = await db.infoa_gab_usuario.create( {
        nm_usuario: r.nm_usuario,
        ds_cpf: r.ds_cpf,
        ds_email: r.ds_email,
        ds_senha: r.ds_senha,
        img_usuario: r.img_usuario,
        ds_codigo: 'sanidjasnasdasda',
        bt_gerente: true
    })

    resp.send(l);
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
        ds_codigo: 'sanidjasnasdasda',
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
        resp.send({ error: " Isso não é um email "})
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
        const r = req.body;

        const usuarioLogado = await db.infoa_gab_usuario.findOne({
            where: {
                ds_email: r.ds_email,
                ds_senha: r.ds_senha,
                nm_usuario: r.nm_usuario
            }
        })

        const cartaoUsuario = await db.infoa_gab_cartao.create({
            id_usuario: usuarioLogado.id_usuario,
            ds_cv: r.ds_cv,
            nr_agencia: r.nr_agencia,
            nm_titular: r.nm_titular,
            dt_validade: r.dt_validade,
            nr_cartao: r.nr_cartao,
            ds_cpf_titular: r.ds_cpf_titular
        })

        const enderecoUsuario = await db.infoa_gab_endereco.create({
            id_usuario: usuarioLogado.id_usuario,
            nm_bairro: r.nm_bairro,
            nm_rua: r.nm_rua,
            nr_numero_rua: r.nr_numero_rua,
            ds_cep: r.ds_cep,
            ds_complemento: r.ds_complemento
        })

        const produtoUsu = await db.infoa_gab_produto.findAll()




    } catch(e) {
      resp.send(e)
    }
  
  })










app.get('/buscarBairro', async (req, resp) => {
    try {
      const api_key = 'b866c3722fa645f9acb1da4674663672';
      const { lat, lon } = req.query;
  
     resp.send(req.query);
      
  
    } catch(e) {
      resp.send(e);
    }
  })



app.listen( process.env.PORT, (x) => 
            console.log(`Servidor na Porta ${process.env.PORT}`));

