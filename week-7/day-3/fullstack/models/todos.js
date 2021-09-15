'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class toDos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  toDos.init({
    task: DataTypes.STRING,
    urgency: DataTypes.STRING,
    addedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'toDos',
  });
  return toDos;
};