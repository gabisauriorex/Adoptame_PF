const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstadoSchema = new Schema({
  
  lost: { type: Boolean },
});

// Crear el modelo
const Estado = mongoose.model("Estado", EstadoSchema);

module.exports = Estado;