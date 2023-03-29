const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const cors = require("cors");
const app = express();
const authConfig  =require('./src/auth_config.json')
//const decoded =require('./src/decoded')
const axios = require('axios');
app.use(cors());

const port = 3000;
// ${authConfig.domain}
// authConfig.audience

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-ta62vlpo2ibk36hv.us.auth0.com/.well-known/jwks.json`,
  }),

  audience: "Auth0Front",
  issuer: 'https://dev-ta62vlpo2ibk36hv.us.auth0.com/',
  algorithms: ["RS256"],
}).unless({ path:[ "/" ] });

 
  //===================
// const auth0LoginUrl = `https://${AUTH0_DOMAIN}/authorize?` +
//   `response_type=code&` +
//   `client_id=${AUTH0_CLIENT_ID}&` +
//   `redirect_uri=${REDIRECT_URI}&` +
//   `scope=${SCOPE}&` +
//   `state=${STATE}`;

// axios.get(auth0LoginUrl)



app.use(checkJwt);



app.get("/", (req, res) => console.log("Estas en la landing"));

app.get("/home", async (req, res) => {
  try{
    console.log('Estoy adentro')
    const accessToken = req.headers.authorization.split(" ")[1];
  
    const response = await axios('https://dev-ta62vlpo2ibk36hv.us.auth0.com/userinfo', {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })  
    console.log({
      msg: "Your access token was successfully validated!",
    });
     if (response) {
        const header=response.headers;
        const user=response.data;
        console.log("encabezado", header ,"\n", "usuario", user)
        const userinfo = response.data
        console.log(userinfo);
        res.json(userinfo);
     }

  }catch(error) {
     res.json({mge: error.message});
   };

 
});




app.use(async (req, res, next) => {
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
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



/* 

jwt
const jwt = require('jsonwebtoken')

const UserExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  let token = ''
 
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.slice(7)
  }

  console.log(token);
  
  const decodedToken = jwt.verify(token, process.env.SECRET)

  console.log(decodedToken.id)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const { id: userId } = decodedToken

  request.userId = userId

  next()


}


module.exports = UserExtractor;

*/