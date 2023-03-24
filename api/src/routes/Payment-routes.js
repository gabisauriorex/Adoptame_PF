const express = require("express");
const { getPay, createPay } = require("../controllers/MercadoPago");
const router = express.Router();


router.get("/",getPay)
router.post("/",createPay)

module.exports = router;