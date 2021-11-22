'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Factura.belongsTo(models.Usuario, {
        foreignKey:'usuarioId',
        as:'facturas'
      });

      Factura.hasMany(models.DetalleFactura, {
        foreignKey:'facturaId',
        as:'detallefacturas'
      });

    }
  };
  Factura.init({
    fecha: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};