const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  idPet: Pet._id,
  lost: { type: Boolean },
});

// Crear el modelo
const State = mongoose.model("State", stateSchema);

module.exports = State;