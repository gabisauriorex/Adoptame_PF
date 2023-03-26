const express = require("express");
const cors = require("cors");
const app = express();
/* const { auth } = require("express-oauth2-jwt-bearer"); */
///token opcion 2

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

app.use(cors());

//const router = express.Router();
const port = 3000;
const domain = "dev-sy67e2ky1xdydqgt.us.auth0.com";
//========token=== myrian======

/* const jwtToken = auth({
  audience: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  issuerBaseURL: "https://dev-sy67e2ky1xdydqgt.us.auth0.com/",
  tokenSigningAlg: "RS256",
}); */

//console.log(jwtToken);
/* const jwtChecked = jwt({
secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }), //unless({ path: ["/"] }),

  // Validate the audience and the issuer.
  audience: "https://Learning-express",
  issuer: `https://${domain}/`,
  algorithms: ["RS256"],
});



console.log(jwtChecked); */

const authConfig = {
  domain: domain,
  audience: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  issuer: `https://${domain}/`,
  algorithms: ["RS256"],
};

app.use(
  jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${domain}/.well-known/jwks.json`,
    }),
    ...authConfig,
  }).unless({ path: ["/"] })
);

app.get("/", (req, res) => console.log("Estas en la landing"));

app.get("/home", (req, res) => {
  console.log("Ruta protegida");

  const { name, email, nickname } = req.user;
  res.send(`¡Bienvenido ${name} (${email}) (${nickname})`);
});

/* app.use(async (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  error.status = 403;
  next(error);
});
app.use(async (error, req, res) => {
  const status = error.status || 500;
  const message = error.message || "internal server error";

  //res.sendStatus(status);
  res.status(status).send(message);
}); */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
