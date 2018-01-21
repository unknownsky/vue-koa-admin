'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admin_permission', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    }).then(() => {
      return queryInterface.createTable('admin_role_permission', {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER
        },
        rid: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        pid: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        deletedAt: {
          type: Sequelize.DATE
        }
      })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('admin_permission').then(() => {
      return queryInterface.dropTable('admin_role_permission');
    });
  }
};