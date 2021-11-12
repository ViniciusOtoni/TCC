import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_pedido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_situacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_venda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_venda;
  }
}
