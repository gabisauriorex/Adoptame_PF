const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pet', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    animal:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name no puede estar vacio"
        },
        // isAlpha:{
        //   arg: true,
        //   msg: "El nombre solo puede contener letras"
        // },
        // // len: {
        //   arg: [3,20],
        //   msg: "El numero de caracteres puede ser entre 3 y 20 caracteres",
        //   min: { 
        //     arg: 3,
        //     msg: "No esta permitido un nombre de 2 o menos caracteres"
        //   },
        //   max: {
        //     arg: 20,
        //     msg: "No está permitido un nombre de más de 20 caracteres"
        //   }
        // }
      }
    },
    breed:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isFloat:{
          msg: "Solo está permitido numeros y una coma decimal"
        }
      }
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isFloat:{
          msg: "Solo está permitido numeros y una coma decimal"
        }
      }
    },
    age:{
      type: DataTypes.STRING,
      allowNull: false
    },
    color:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name no puede estar vacio"
        },
        // isAlpha:{
        //   arg: true,
        //   msg: "El nombre solo puede contener letras"
        // },
        // len: {
        //   arg: [3,20],
        //   msg: "El numero de caracteres puede ser entre 3 y 20 caracteres",
        //   min: { 
        //     arg: 3,
        //     msg: "No esta permitido un nombre de 2 o menos caracteres"
        //   },
        //   max: {
        //     arg: 20,
        //     msg: "No está permitido un nombre de más de 20 caracteres"
        //   }
        // }
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // isAlpha:{
        //   arg: true,
        //   msg: "El nombre solo puede contener letras"
        // },
        // len: {
        //   arg: [3,20],
        //   msg: "El numero de caracteres puede ser entre 3 y 20 caracteres",
        //   min: { 
        //     arg: 3,
        //     msg: "No esta permitido un nombre de 2 o menos caracteres"
        //   },
        //   max: {
        //     arg: 20,
        //     msg: "No está permitido un nombre de más de 20 caracteres"
        //   }
        // }
      }
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    isLost:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    }
  });
};
