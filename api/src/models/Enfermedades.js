const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enfermedadesSchema = new Schema({
  name: { type: String },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  description: { type: String },
});

// Crear el modelo
const Enfermedades = mongoose.model("Enfermedades", enfermedadesSchema);

module.exports = Enfermedades;