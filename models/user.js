'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.recipe)
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING, allowNull: false,
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
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};