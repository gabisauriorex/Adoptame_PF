const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vaccinesSchema = new Schema({
  idPet: { type: mongoose.Types.ObjectId },
  name: { type: String },
  dose: { type: Number },
  date: { type: Date }
});

// Crear el modelo
const Vaccines = mongoose.model("Vaccines", vaccinesSchema);

module.exports = Vaccines;