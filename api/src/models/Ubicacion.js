const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ubicacionSchema = new Schema({
    province: { type: String },
});

// Crear el modelo
const Ubicacion = mongoose.model("Ubicacion", ubicacionSchema);

module.exports = Ubicacion;