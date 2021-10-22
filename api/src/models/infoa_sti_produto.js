import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img_produto: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    nm_produto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_codigo_interno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bl_possui_variacao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vl_valor: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    nr_estoque_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nr_estoque_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nr_estoque_atual: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_produto',
    timestamps: false
  });
  return infoa_sti_produto;
  }
}
