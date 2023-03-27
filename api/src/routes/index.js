const { Router } = require("express");
const router = Router();
<<<<<<< HEAD


=======
>>>>>>> d499ff1e3cd0a7a4c90961fda1a8a6a06cea0677
const Pet = require("./Mascota-routes");
const Vaccines = require("./Vaccines-routes");
const Diseases = require("./Diseases-routes");
const Location = require("./Location-routes");
const Usuario = require("./Usuario-routes");
<<<<<<< HEAD
const Payment = require("./Payment-routes")

=======
const Payment = require("./Payment-routes");

const usersRouter = require("./user-routes");
const loginRouter = require("./login-routes");

router.use("/api/users", usersRouter);
router.use("/api/login", loginRouter);
>>>>>>> d499ff1e3cd0a7a4c90961fda1a8a6a06cea0677

router.use("/pets", Pet);
router.use("/vaccines", Vaccines);
router.use("/diseases", Diseases);
router.use("/locations", Location);
router.use("/users", Usuario);
router.use("/payments", Payment);

module.exports = router;

