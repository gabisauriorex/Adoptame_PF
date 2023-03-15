const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String },
  color: { type: String },
  weight: { type: Number },
  height: { type: Number},
  age: {
    type: Number,
    min: 0,
    max: 30,
  },
  image: { type: String},
  description: { type: String },
  idVaccines: { type: mongoose.Types.ObjectId },
  idLocation: { type: mongoose.Types.ObjectId },
});

// Crear el modelo
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
