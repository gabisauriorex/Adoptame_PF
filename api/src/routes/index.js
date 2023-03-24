const { Router } = require("express");
const router = Router();

const Pet = require("./Mascota-routes");
const Vaccines = require("./Vaccines-routes");
const Diseases = require("./Diseases-routes");
const Location = require("./Location-routes");
const Usuario = require("./Usuario-routes");
const Payment = require("./Payment-routes")


const Auth = require("./Auth-routes")

router.use("/pets", Pet);
router.use("/vaccines", Vaccines);
router.use("/diseases", Diseases);
router.use("/locations", Location);
router.use("/users", Usuario);
router.use("/payments",Payment)
router.use("/", Auth);

module.exports = router;
