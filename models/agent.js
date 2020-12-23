'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    


    
    static associate(models) {
      Agent.hasMany(models.Bien);
      Agent.belongsTo(models.Annonce);
    }
  };
  Agent.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};