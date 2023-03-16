require('dotenv').config();
const {Sequelize} = require("sequelize");
const database = require("./config");
const path = require("path");
const fs = require("fs");

const url = "mongodb+srv://admin:4Uu2hniHQ0UnmpWd@cluster0.5visjvr.mongodb.net/test"
//const URL = "mongodb+srv://<nombre usuario>:password@cluster0.bsvp1kl.mongodb.net/Adoptame?retryWrites=true&w=majority";
//const URL = "mongodb+srv://arieltecnico:1NOcCreyIcc5UnvH@cluster0.bsvp1kl.mongodb.net/Adoptame";

/* const { URL } = process.env; */
const cnn = async () => {
  await mongoose.connect(url, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
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