import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_sti_categoria extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_sabor: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_sti_categoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infoa_sti_categoria;
  }
}
