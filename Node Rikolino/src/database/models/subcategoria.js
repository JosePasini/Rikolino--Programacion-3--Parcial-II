'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subcategoria.belongsTo(models.Categoria, {
        foreignKey:'categoriaId',
        as:'categorias'
      });

      Subcategoria.hasMany(models.Producto, {
        foreignKey:'subcategoriaId',
        as:'productos'
      });

    }
  };
  Subcategoria.init({
    nombre: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subcategoria',
  });
  return Subcategoria;
};