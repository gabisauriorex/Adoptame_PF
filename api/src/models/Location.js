const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    province: { type: String },
});

// Crear el modelo
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;