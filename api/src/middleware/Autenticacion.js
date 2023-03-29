const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const cors = require("cors");
const router = express();
const authConfig  = require('../auth_config.json');
router.use(cors());

const Autenticacion = (req, res, next) => {
  console.log("Entrando a Autenticacion")
  const verifyJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"],
  }); 

  
  router.use(async (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    error.status = 403;
    next(error);
    });
    
    router.use(async (error, req, res) => {
    const status = error.status || 500;
    const message = error.message || "internal server error";
    
    //res.sendStatus(status);
    res.status(status).send(message);
    });
 
  console.log("pase por Autenticacion");
  return verifyJwt;
}
module.exports = Autenticacion;