const { Router } = require("express");
const router = Router();

const Pet = require("./Mascota-routes");

router.use("/Mascotas", Pet);

module.exports = router;
