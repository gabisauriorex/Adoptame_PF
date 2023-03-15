const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diseasesSchema = new Schema({
  idPet: { type: mongoose.Types.ObjectId },
  name: { type: String },
  severity: {
    type: Number,
    min: 0,
    max: 5,
  },
  description: { type: String },
});

// Crear el modelo
const Diseases = mongoose.model("Diseases", diseasesSchema);

module.exports = Diseases;