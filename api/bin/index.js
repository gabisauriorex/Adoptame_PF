const conn = require("../src/Db/db");
//DECLARAMOS PUERTO EN .ENV

const generateServidor = async () => {
  try {
    await conn();

    console.log(`corriendo server`);
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

generateServidor();

/*

by sequelize connection

const server = require("../src/app.js");
const sequelize = require("../src/Db/db.js");

const { getAllGenres } = require("../src/services/getInfoApi");
const { PORT } = process.env;

//DECLARAMOS PUERTO EN .ENV

const generateServidor = async () => {
  try {
    await sequelize.authenticate();
    server.listen(PORT, () => {
      console.log(
        `
       Connection has been established successfully on port ${PORT} in db del proyecto ${DB_NAME} 
         `
      );
    });

    sequelize.sync({ force: false });

    //llamo al metodo apenas se crea el server para que me cree los generes en la bd
    getAllGenres();
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

generateServidor();
 */
