'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bien extends Model {
    


    
    static associate(models) {
        Bien.belongsTo(models.Agent);
        Bien.belongsTo(models.Annonce);
    }
  };
  Bien.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    adresse: DataTypes.STRING,
    surface: DataTypes.INTEGER,
    description: DataTypes.STRING,
    pix: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bien',
  });
  return Bien;
};