
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");


const authConfig  = require('../auth_config.json');


/* const Autenticacion = (req, res, next) => {
  console.log("Entrando a Autenticacion") */


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

  
 /* 
  console.log("Ya esta encriptado ");
  console.log(checkJwt) */

//}
module.exports = verifyJwt;




//const express = require("express");
//const router = express();
//router.use(cors());




/*   router.use(async (req, res, next) => {
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
    }); */