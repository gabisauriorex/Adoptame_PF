const express = require("express");
const router = express.Router();
const Auth = require("../controllers/FunctionAuth")

// req.isAuthenticated is provided from the auth router
// router.get('/', Auth);

module.exports = router;