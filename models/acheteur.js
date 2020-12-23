'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acheteur extends Model {
    


    
    static associate(models) {
      // define association here
      Acheteur.hasMany(models.Annonce);
      Acheteur.hasMany(models.bien);
    }
  };
  Acheteur.init({
    id: DataTypes.INTERGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acheteur',
  });
  return Acheteur;
};