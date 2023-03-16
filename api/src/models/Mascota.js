const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  name: { type: String },
  color: { type: String },
});

// Crear el modelo
const Mascota = mongoose.model("Mascota", mascotaSchema);

module.exports = Mascota;
