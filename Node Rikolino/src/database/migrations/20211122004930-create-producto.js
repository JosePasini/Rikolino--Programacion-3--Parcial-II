'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL
      },
      descripcion: {
        type: Sequelize.STRING
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Categorias',
          key:'id'
        }
      },
      visibilidadId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Visibles',
          key:'id'
        }
      },
      subcategoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Subcategorias',
          key:'id'
        }
      },
      subcategoria_categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Subcategorias',
          key:'categoriaId'
        }
      },
      menuId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Menus',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Productos');
  }
};