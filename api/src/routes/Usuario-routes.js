const express = require("express");
const router = express.Router();
const {
  createUsuario,
  getUsuario,
  UsuarioById,
  deleteUsuario,
  updateUsuario,
} = require("../controllers-Usuario/Usuario-controller");

//const notFound = require('./middleware/notFound.js')
const handleErrors = require('../middleware/handleError')
const userExtractor = require('../middleware/UserExtractor')


router.get("/", getUsuario); //trae todos los usuarios
router.get("/:id", UsuarioById); //trae por id
router.post("/", userExtractor, createUsuario); //crea una usuario
router.put("/:id", userExtractor, updateUsuario); //actualiza un usuario
router.delete("/:id",userExtractor, deleteUsuario); //elimina un usuario

module.exports = router;