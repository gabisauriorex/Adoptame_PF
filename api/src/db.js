require('dotenv').config();
const {Sequelize} = require("sequelize");
// const fs = require("fs");
// const path = require("path");
const mPet = require('./models/Pet');
const mDiseases = require('./models/Diseases')
const mLocation = require('./models/Location')
const mVaccines = require('./models/Vaccines')
const sequelize = new Sequelize(`postgres://postgres:1234@localhost:5432/adoptame`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// // fs.readdirSync(path.join(__dirname, '/models'))
// //   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
// //   .forEach((file) => {
// //     modelDefiners.push(require(path.join(__dirname, '/models', file)));
// //   });

// // // Injectamos la conexion (sequelize) a todos los modelos
// // modelDefiners.forEach(model => model(sequelize));
// // // Capitalizamos los nombres de los modelos ie: product => Product
// // let entries = Object.entries(sequelize.models);
// // let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// // sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const { Pet } = sequelize.models;
// const { Location } = sequelize.models;
// const { Diseases} = sequelize.models;
// const { Vaccines } = sequelize.models;
// Aca vendrian las relaciones
mPet(sequelize)
mLocation(sequelize)
mDiseases(sequelize)
mVaccines(sequelize)
const {Pet, Location, Diseases, Vaccines} = sequelize.models
Pet.hasOne(Location)
Location.hasMany(Pet)
Pet.belongsToMany(Diseases, {through:"pet_diseases"})
Diseases.belongsToMany(Pet, {through:"pet_diseases"})
Pet.belongsToMany(Vaccines, {through: "pet_vaccines"})
Vaccines.belongsToMany(Pet, {through: "pet_vaccines"})
//Dog.belongsToMany(Temperament, { through:"dog_temperament" } );
//Temperament.belongsToMany(Dog, { through:"dog_temperament" } );

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};