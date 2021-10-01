import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _infoa_enl_cartao_credito from  "./infoa_enl_cartao_credito.js";
import _infoa_enl_categoria from  "./infoa_enl_categoria.js";
import _infoa_enl_chat from  "./infoa_enl_chat.js";
import _infoa_enl_chat_usuario from  "./infoa_enl_chat_usuario.js";
import _infoa_enl_login from  "./infoa_enl_login.js";
import _infoa_enl_pedido from  "./infoa_enl_pedido.js";
import _infoa_enl_pedido_compra_e_venda from  "./infoa_enl_pedido_compra_e_venda.js";
import _infoa_enl_plano from  "./infoa_enl_plano.js";
import _infoa_enl_produto from  "./infoa_enl_produto.js";
import _infoa_enl_rank from  "./infoa_enl_rank.js";
import _infoa_enl_reg_plano from  "./infoa_enl_reg_plano.js";
import _infoa_enl_usuario from  "./infoa_enl_usuario.js";
import _infoa_gab_cartao from  "./infoa_gab_cartao.js";
import _infoa_gab_empresa from  "./infoa_gab_empresa.js";
import _infoa_gab_endereco from  "./infoa_gab_endereco.js";
import _infoa_gab_entrega from  "./infoa_gab_entrega.js";
import _infoa_gab_produto from  "./infoa_gab_produto.js";
import _infoa_gab_usuario from  "./infoa_gab_usuario.js";
import _infoa_gab_venda from  "./infoa_gab_venda.js";
import _infoa_gab_venda_item from  "./infoa_gab_venda_item.js";
import _infoa_sti_categoria from  "./infoa_sti_categoria.js";
import _infoa_sti_cliente from  "./infoa_sti_cliente.js";
import _infoa_sti_endereco from  "./infoa_sti_endereco.js";
import _infoa_sti_produto from  "./infoa_sti_produto.js";
import _infoa_sti_venda_produto from  "./infoa_sti_venda_produto.js";
import _infoa_sti_vendas from  "./infoa_sti_vendas.js";
import _infoc_ntc_administrador from  "./infoc_ntc_administrador.js";
import _infoc_ntc_apoio_frase from  "./infoc_ntc_apoio_frase.js";
import _infoc_ntc_caracteristica_fisica from  "./infoc_ntc_caracteristica_fisica.js";
import _infoc_ntc_denuncia from  "./infoc_ntc_denuncia.js";
import _infoc_ntc_local from  "./infoc_ntc_local.js";
import _infoc_ntc_usuario from  "./infoc_ntc_usuario.js";
import _infoc_ntc_vestimento from  "./infoc_ntc_vestimento.js";

export default function initModels(sequelize) {
  var infoa_enl_cartao_credito = _infoa_enl_cartao_credito.init(sequelize, DataTypes);
  var infoa_enl_categoria = _infoa_enl_categoria.init(sequelize, DataTypes);
  var infoa_enl_chat = _infoa_enl_chat.init(sequelize, DataTypes);
  var infoa_enl_chat_usuario = _infoa_enl_chat_usuario.init(sequelize, DataTypes);
  var infoa_enl_login = _infoa_enl_login.init(sequelize, DataTypes);
  var infoa_enl_pedido = _infoa_enl_pedido.init(sequelize, DataTypes);
  var infoa_enl_pedido_compra_e_venda = _infoa_enl_pedido_compra_e_venda.init(sequelize, DataTypes);
  var infoa_enl_plano = _infoa_enl_plano.init(sequelize, DataTypes);
  var infoa_enl_produto = _infoa_enl_produto.init(sequelize, DataTypes);
  var infoa_enl_rank = _infoa_enl_rank.init(sequelize, DataTypes);
  var infoa_enl_reg_plano = _infoa_enl_reg_plano.init(sequelize, DataTypes);
  var infoa_enl_usuario = _infoa_enl_usuario.init(sequelize, DataTypes);
  var infoa_gab_cartao = _infoa_gab_cartao.init(sequelize, DataTypes);
  var infoa_gab_empresa = _infoa_gab_empresa.init(sequelize, DataTypes);
  var infoa_gab_endereco = _infoa_gab_endereco.init(sequelize, DataTypes);
  var infoa_gab_entrega = _infoa_gab_entrega.init(sequelize, DataTypes);
  var infoa_gab_produto = _infoa_gab_produto.init(sequelize, DataTypes);
  var infoa_gab_usuario = _infoa_gab_usuario.init(sequelize, DataTypes);
  var infoa_gab_venda = _infoa_gab_venda.init(sequelize, DataTypes);
  var infoa_gab_venda_item = _infoa_gab_venda_item.init(sequelize, DataTypes);
  var infoa_sti_categoria = _infoa_sti_categoria.init(sequelize, DataTypes);
  var infoa_sti_cliente = _infoa_sti_cliente.init(sequelize, DataTypes);
  var infoa_sti_endereco = _infoa_sti_endereco.init(sequelize, DataTypes);
  var infoa_sti_produto = _infoa_sti_produto.init(sequelize, DataTypes);
  var infoa_sti_venda_produto = _infoa_sti_venda_produto.init(sequelize, DataTypes);
  var infoa_sti_vendas = _infoa_sti_vendas.init(sequelize, DataTypes);
  var infoc_ntc_administrador = _infoc_ntc_administrador.init(sequelize, DataTypes);
  var infoc_ntc_apoio_frase = _infoc_ntc_apoio_frase.init(sequelize, DataTypes);
  var infoc_ntc_caracteristica_fisica = _infoc_ntc_caracteristica_fisica.init(sequelize, DataTypes);
  var infoc_ntc_denuncia = _infoc_ntc_denuncia.init(sequelize, DataTypes);
  var infoc_ntc_local = _infoc_ntc_local.init(sequelize, DataTypes);
  var infoc_ntc_usuario = _infoc_ntc_usuario.init(sequelize, DataTypes);
  var infoc_ntc_vestimento = _infoc_ntc_vestimento.init(sequelize, DataTypes);


  return {
    infoa_enl_cartao_credito,
    infoa_enl_categoria,
    infoa_enl_chat,
    infoa_enl_chat_usuario,
    infoa_enl_login,
    infoa_enl_pedido,
    infoa_enl_pedido_compra_e_venda,
    infoa_enl_plano,
    infoa_enl_produto,
    infoa_enl_rank,
    infoa_enl_reg_plano,
    infoa_enl_usuario,
    infoa_gab_cartao,
    infoa_gab_empresa,
    infoa_gab_endereco,
    infoa_gab_entrega,
    infoa_gab_produto,
    infoa_gab_usuario,
    infoa_gab_venda,
    infoa_gab_venda_item,
    infoa_sti_categoria,
    infoa_sti_cliente,
    infoa_sti_endereco,
    infoa_sti_produto,
    infoa_sti_venda_produto,
    infoa_sti_vendas,
    infoc_ntc_administrador,
    infoc_ntc_apoio_frase,
    infoc_ntc_caracteristica_fisica,
    infoc_ntc_denuncia,
    infoc_ntc_local,
    infoc_ntc_usuario,
    infoc_ntc_vestimento,
  };
}
