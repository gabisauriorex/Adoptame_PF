const { Router } = require("express");
const router = Router();

const Autenticacion = require("../middleware/Autenticacion");
const userAutenticated = require("../middleware/userAutenticated");
const autenticados = require("../routes/autenticados-routes");

  //===================
 const checkJwt = Autenticacion();
 router.use(checkJwt);
 checkJwt.unless({ path:[ "/" ] });

router.use("/home", userAutenticated, autenticados);

module.exports = router;

