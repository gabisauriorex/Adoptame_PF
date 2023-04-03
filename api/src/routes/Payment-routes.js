const express = require("express");
const { createPay, getPay } = require("../controllers-Pet/MercadoPago");

const router = express.Router();


router.get("/",createPay)
router.post("/",getPay)

module.exports = router;