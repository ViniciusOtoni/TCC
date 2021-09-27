import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_gab_entrega extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_entregas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produtos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_situacao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_saida: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_entrega: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_gab_entrega',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_entregas" },
        ]
      },
      {
        name: "infoa_gab_entrega_fk0",
        using: "BTREE",
        fields: [
          { name: "id_produtos" },
        ]
      },
      {
        name: "infoa_gab_entrega_fk1",
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
    ]
  });
  return infoa_gab_entrega;
  }
}
