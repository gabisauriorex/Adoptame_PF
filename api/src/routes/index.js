const { Router } = require("express");
const router = Router();

const Pet = require("./Mascota-routes");
const Vaccines = require("./Vaccines-routes");
const Diaseases = require("./Diseases-routes");
const Location = require("./Location-routes");

router.use("/Mascotas", Pet);
router.use("/Vaccines", Vaccines);
router.use("/Diseases", Diaseases);
router.use("/Location", Location);

module.exports = router;
