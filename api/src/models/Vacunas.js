const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vacunasSchema = new Schema({
  name: { type: String },
  dose: { type: Number },
  date: { type: Date }
});

// Crear el modelo
const Vacunas = mongoose.model("Vacunas", vacunasSchema);

module.exports = Vacunas;