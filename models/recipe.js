'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.recipe.belongsTo(models.user)
      models.recipe.belongsToMany(models.category, {through: 'categoryRecipes'})
    }
  };
  recipe.init({
    apiId: DataTypes.INTEGER,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    picture: DataTypes.STRING,
    name:DataTypes.STRING,
    userId:DataTypes.INTEGER,
    diets:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};