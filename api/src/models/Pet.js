const { DataTypes } = require('sequelize');
require('express-validator');
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
        isAlpha:{
          args: true,
          msg: "El tipo de animal solo puede contener letras"
        },
        len: {
          arg: [3,20],
          msg: "El numero de caracteres del tipo de animal puede ser entre 3 y 20 caracteres",
        }
      }
    },
    breed:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "La raza no puede estar vacia"
          },
          isAlpha:{
            args: true,
            msg: "La raza solo puede contener letras"
          },
          len: {
            arg: [3,20],
            msg: "El numero de caracteres de la raza puede ser entre 3 y 20 caracteres",
          }
        }
    },
    height:{
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat:{
          args: true,
          msg: "La altura solo puede contener numeros y una coma decimal"
        }
      }
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isFloat:{
          args: true,
          msg: "El peso debe ser un numero"
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
          msg: "color no puede estar vacio"
        },
        isAlpha:{
          args: true,
          msg: "El color solo puede contener letras"
        },
        len: {
          args: [3, 20],
          msg: "El numero de caracteres del color puede ser entre 3 y 20 caracteres",
        }
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
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    isLost:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    }
  }, {
      timestamps: false,
    });
};
