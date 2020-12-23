'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Annonce extends Model {
    


    
    static associate(models) {
      // define association here
      Annonce.belongsTo(models.Agent);
      Annonce.belongsTo(models.Acheteur);


    }
  };
  Annonce.init({
    id: DataTypes.ID,
    bien: DataTypes.STRING,
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    enVente: DataTypes.BOOLEAN,
    enLocation: DataTypes.BOOLEAN,
    vendu: DataTypes.BOOLEAN


  }, {
    sequelize,
    modelName: 'Annonce',
  });
  return Annonce;
};