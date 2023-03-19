const express = require("express");
const router = express.Router();
const {
  createDiaseases,
  getDiaseases,
} = require("../controllers/Diaseases-controller");


router.get("/", getDiaseases); //trae todas las enfermedades
router.post("/", createDiaseases); //crea una enfermedad


module.exports = router;