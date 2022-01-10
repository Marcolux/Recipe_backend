'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
          notNull: true
        }
      },
      email: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
          isEmail: true,
          notNull: true
        }, 
        unique: {
          args: true,
          msg: 'Email adress already in use!'
        }     
      }, 
      password: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
          notNull: true
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
    await queryInterface.dropTable('users');
  }
};