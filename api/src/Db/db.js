require('dotenv').config();
const {Sequelize} = require("sequelize");
const database = require("./config");
const path = require("path");
const fs = require("fs");


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pets, Location, Diseases, Vaccines, State} = sequelize.models;

// Aca vendrian las relaciones
//Dog.belongsToMany(Temperament, { through:"dog_temperament" } );
//Temperament.belongsToMany(Dog, { through:"dog_temperament" } );

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};