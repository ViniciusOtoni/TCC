import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ecm_td_roupas_masc extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_roupa_masc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nm_roupa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_tamanho: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    nm_fornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ecm_td_roupas_masc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_roupa_masc" },
        ]
      },
      {
        name: "id_categoria",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infod_ecm_td_roupas_masc;
  }
}
