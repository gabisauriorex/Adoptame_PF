const { Router } = require("express");
const router = Router();

const Autenticacion = require("../middleware/Autenticacion");
const autenticados = require("../routes/autenticados-routes");

  //===================

router.use("/home", Autenticacion, autenticados);

module.exports = router;

