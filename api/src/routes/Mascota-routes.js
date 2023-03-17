const express = require("express");
const router = express.Router();
const {
  createMascota,
  getMascotas,
  mascotaById,
  deleteMascota,
  updateMascota,
} = require("../controllers/Mascota-controller");

//const middleware = require("../middlewares/videogame-middleware");

router.get("/", getMascotas); //trae todas las mascotas
router.get("/:id", mascotaById); //trae por id
router.post("/", createMascota); //crea una mascota

//agregados
router.put("/:id", updateMascota); //actualiza un videogame
router.delete("/:id", deleteMascota); //elimina un videogame

module.exports = router;
