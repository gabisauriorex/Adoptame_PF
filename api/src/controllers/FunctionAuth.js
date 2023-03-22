// const { Router } = require("express");
// const router = Router();
// const { auth } = require('express-openid-connect');

// require("dotenv").config();    
// const { CLIENTID, DOMINIO, SECRET } = process.env;

// const config = {
//         authRequired: false,
//         auth0Logout: true,
//         secret: SECRET,
//         baseURL: 'http://localhost:3000',
//         clientID: CLIENTID,
//         issuerBaseURL: DOMINIO
// };


//   // auth router attaches /login, /logout, and /callback routes to the baseURL
//     router.use(auth(config)); 

// const FunctionAuth = async (req, res) => {

//     console.log(req)
//     res.send(await req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
   
// };

// module.exports = FunctionAuth;


// // const { auth } = require('express-openid-connect');

// // const config2 = {
// //   authRequired: false,
// //   auth0Logout: true,
// //   secret: 'a long, randomly-generated string stored in env',
// //   baseURL: 'http://localhost:3000',
// //   clientID: 'b2oMyGG2lRegxZyU1BpCqX3qCnEQ3bTo',
// //   issuerBaseURL: 'https://dev-l1ijdiq721iqrm83.us.auth0.com'
// // };

// // // auth router attaches /login, /logout, and /callback routes to the baseURL
// // app.use(auth(config));

// // // req.isAuthenticated is provided from the auth router
// // app.get('/', (req, res) => {
// //   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// // });
