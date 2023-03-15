const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    idPet: Pet._id,
    province: { type: String },
});

// Crear el modelo
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;