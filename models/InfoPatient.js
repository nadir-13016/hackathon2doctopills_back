'use strict';

module.exports = (sequelize, DataTypes) => {
    const InfoPatient = sequelize.define('InfoPatient',{

        infoPatient_adress: {
            type : DataTypes.STRING
        },
        infoPatient_postal_code: {
            type: DataTypes.INTERGER
        },
        infoPatient_size: {
            type: DataTypes.INTERGER
        },
        infoPatient_wheight: {
            type: DataTypes.INTERGER
        },
        infoPatient_allergy: {
            type: DataTypes.BOOLEAN
        },
        infoPatient_allergy1: {
            type: DataTypes.INTERGER
        },
        infoPatient_allergy2: {
            type: DataTypes.INTERGER
        },
        infoPatient_allergy3: {
            type: DataTypes.INTERGER
        },
        infoPatient_chronic_condition: {
            type: DataTypes.BOOLEAN
        },
        infoPatient_chronic_condition1: {
            type: DataTypes.INTERGER
        },
        infoPatient_chronic_condition2: {
            type: DataTypes.INTERGER
        },
        infoPatient_chronic_condition3: {
            type: DataTypes.INTERGER
        },


    } )
}


  
  
  
  // user_size
        // user_weight
