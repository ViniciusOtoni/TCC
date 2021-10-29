import db from "./db.js";
import express from "express";
import cors from "cors";
import enviarEmail from "./email.js";



import  Sequelize from "sequelize";
const { Op, fn } = Sequelize;

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
        let page = req.query.page || 0;

        if(page <= 0) page = 1

        const itensPerPage = 9;
        const skipItems    = (page - 1) * itensPerPage;

        let r = await db.infoa_gab_produto.findAll({ 
            where: {
                [Op.or]: [
                    { nm_produto: {[Op.substring]: filtro }},
                    { ds_categoria: categoria },
                    { ds_plataforma: categoria },
                ]
            },
            order: [ord],
            offset: skipItems,
            limit: itensPerPage
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

        let total = await db.infoa_gab_produto.findOne({
            raw: true,
            where: {
                [Op.or]: [
                    { nm_produto: {[Op.substring]: filtro }},
                    { ds_categoria: categoria },
                    { ds_plataforma: categoria },
                ]
            },
            order: [ord],
            attributes: [
                [fn('count', 1), 'qtd']
            ]
        })

        resp.send({
            items: r,
            total: total.qtd,
            totalPaginas: Math.ceil(total.qtd / 9),
            pagina: Number(page)
        });
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

        let r1 = await db.infoa_gab_produto.findOne({
            where: {
                nm_produto: l.nm_produto
            }
        })

        if(r1 != null)
        return resp.send('Produto já foi cadastrado!')
   
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
        return resp.send( { error: 'CPF já foi cadastrado!' } );

    let u2 = await db.infoa_gab_usuario.findOne({ where: { ds_email: r.ds_email  } })
    if(u2 != null)
        return resp.send( { error: 'Email já foi cadastrado!' } );


    


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


// Verifica se O gerente Existe
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

  
    const response = await enviarEmail(login.ds_email, rCod, login.nm_usuario);
  
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
        
        let r = req.body;
        console.log(r);

        const usuarioLogado = await db.infoa_gab_usuario.findOne({
            where: {
                ds_email: r.ds_email,
                ds_senha: r.ds_senha
            }}); 

       

        const cartaoUsuario = await db.infoa_gab_cartao.create({
            
            id_usuario: usuarioLogado.id_usuario,
            ds_cv: r.cv,
            nr_agencia: r.agencia,
            nm_titular: r.titular,
            dt_validade: r.dt_validade,
            nr_cartao: r.num_cartao,
            ds_cpf_titular: r.cpf_titular
        });

        const enderecoUsuario = await db.infoa_gab_endereco.create({
            
            id_usuario: usuarioLogado.id_usuario,
            nm_bairro: r.bairro,
            nm_rua: r.rua,
            nr_numero_rua: r.numero_rua,
            ds_cep: r.cep,
            ds_complemento: r.complemento
        });

        

        const gerarVenda = await db.infoa_gab_venda.create({
            
            id_usuario: usuarioLogado.id_usuario,
            dt_venda : Date.now(),
            qtd_parcelas: r.parcelas,
            bt_situacao: true,
            ds_pagamento: r.forma_pagamento,
            vl_total: r.total,
            qtd_itens: r.qtd
        });
        
        
        
        const produtoUsu = await db.infoa_gab_produto.findAll({
            where: {
                'nm_produto': { [Op.in]: Object.keys(r.produtos)}   
            }
        })

        
        console.log(r.produtos);

        for (let produto of produtoUsu) {
            const gerarVendaItem = await db.infoa_gab_venda_item.create({
                id_produto:  produto.id_produto,
                id_venda: gerarVenda.id_venda,
                qtd_produtos: r.produtos[produto.nm_produto],
                vl_preco: produto.vl_preco
            });

        }

        
        
        const entrega = await db.infoa_gab_entrega.create({
            id_endereco: enderecoUsuario.id_endereco,
            id_venda: gerarVenda.id_venda,
            ds_situacao: true,
            dt_saida: Date.now(),
            dt_entrega: '0000-01-01'
        });
        
        resp.send(entrega)

    } catch(e) {
        console.log({ error: "DEU ERRO NA API MOSTRA... creio que não seja a primeira vez..."});
      resp.send(e)
    }}) // 100% FEITA!!





app.get('/endereco', async (req, resp) => {
    let get = await db.infoa_gab_endereco.findAll({
        include: [
                
        ]
    });

    resp.send(get);
})


app.post('/endereco', async (req, resp) => {
    try {
        let r = req.body;
        let usuario = await db.infoa_gab_usuario.findOne({
            where: {
                ds_email: r.ds_email,
                ds_senha: r.ds_senha
            }
        })


        let l = await db.infoa_gab_endereco.create({
            id_usuario: usuario.id_usuario,
            nm_bairro: r.nm_bairro,
            nm_rua: r.nm_rua,
            nr_numero_rua: r.nr_numero_rua,
            ds_cep: r.ds_cep,
            ds_complemento: r.ds_cep
        })

        resp.send(l)
    } catch (error) {
        resp.send({erro: `${error.toString()}`})
    }    
})




app.post('/pedido', async (req, resp) => {
    try {
        let l = req.body;

        let r = await db.infoa_gab_entrega.create({
            id_venda_item: l.id_venda_item,
            id_endereco: l.id_endereco,
            ds_situacao: l.ds_situacao,
            dt_saida: Date.now(),
            dt_entrega: new Date('2021-11-1')

        })

        resp.send(r);
    } catch (error) {
        resp.send({erro: `${error.toString()}`})
    }
} )



app.get('/pedido', async (req, resp) => {
    try {
        let x = await db.infoa_gab_entrega.findAll({
            include: [
                {
                    model: db.infoa_gab_venda,
                    as: 'id_venda_infoa_gab_venda',
                    required: true,
                },
                {
                    model: db.infoa_gab_endereco,
                    as: 'id_endereco_infoa_gab_endereco',
                    required: true,
                    include: [
                        {
                            model: db.infoa_gab_usuario,
                            as: 'id_usuario_infoa_gab_usuario',
                            required: true
                        }
                    ]
                }
                
            ]
        });

        resp.send(x);

    } catch (error) {
        resp.send(`Erro no get da rota /pedido ${error}`)
    }
})


app.put('/pedido/:idEntrega', async (req, resp) => {
    try {
        let r = req.body;
        let alterar = await db.infoa_gab_entrega.update(
            { ds_situacao: r.situacao }, { where: { id_entrega: req.params.idEntrega } }
        )

        resp.send(alterar)
    } catch (error) {
        resp.send(`Erro put entrega ${error.toString()}`)
    }
})


app.get('/listarPedido/:idVenda', async (req, resp) => {
    const id = req.params.idVenda;
    console.log(id);

    const r = await db.infoa_gab_venda_item.findAll({
        where: { 'id_venda': id },
        include: [
            {
                model: db.infoa_gab_produto,
                as: 'id_produto_infoa_gab_produto',
                required: true
           }
        ]
    });

    resp.send(r);
})





































































































//Listar Pedidos Do Usuário
app.get('/pedido/:idUsuario', async (req, resp ) => {

    let r1 = await db.infoa_gab_entrega.findAll({

        attributes: [[ "id_entrega", "id_entrega" ], ["ds_situacao", "ds_situacao"]],
        
         include: [{
            model: db.infoa_gab_venda,
            as: 'id_venda_infoa_gab_venda',
            required: false,
            include: [{
                model: db.infoa_gab_usuario,
                as: 'id_usuario_infoa_gab_usuario',
                required: true,
                attributes: []
            }]
        }],
        
       

        where: {
            '$id_venda_infoa_gab_venda.id_usuario_infoa_gab_usuario.id_usuario$': req.params.idUsuario
        }

     
    })
    
    resp.send(r1)
})

app.listen( process.env.PORT, (x) => 
            console.log(`Servidor na Porta ${process.env.PORT}`));


