'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producto.belongsTo(models.Menu, {
        foreignKey:'menuId',
        as:'menus'
      });

      Producto.belongsTo(models.Visible, {
        foreignKey:'visibilidadId',
        as:'visibiles'
      });

      Producto.belongsTo(models.Categoria, {
        foreignKey:'categoriaId',
        as:'categorias'
      });

      Producto.belongsTo(models.Subcategoria, {
        foreignKey:'subcategoriaId',
        as:'subcategorias'
      });

      Producto.hasMany(models.Insumo, {
        foreignKey:'productoId',
        as:'insumos'
      });

      Producto.hasMany(models.Imagen, {
        foreignKey:'productoId',
        as:'imagenes'
      });

      Producto.hasOne(models.DetalleFactura, {
        foreignKey:'productoId',
        as:'detallefacturas'
      })

    }
  };
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    descripcion: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    visibilidadId: DataTypes.INTEGER,
    subcategoriaId: DataTypes.INTEGER,
    subcategoria_categoriaId: DataTypes.INTEGER,
    menuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};