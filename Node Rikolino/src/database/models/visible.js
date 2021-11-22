'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visible extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Visible.hasMany(models.Producto, {
        foreignKey:'visibilidadId',
        as:'productos'
      });

    }
  };
  Visible.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visible',
  });
  return Visible;
};