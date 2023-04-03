const axios = require('axios');
const authConfig  = require('../auth_config.json');

const middlewareToken = async (req, res, next) => { 

  try{
        console.log('aca tomo el token ')
        const accessToken = req.headers.authorization.split(" ")[1];
      
        const response = await axios(`https://${authConfig.domain}/userinfo`, {
          headers: {
            authorization: `Bearer ${accessToken}`
          }
        })  
<<<<<<< HEAD:api/src/middleware/userAutenticated.js
        res.send(200).json(response)
=======

        console.log('Datos del middleware: \n', response.data)
  
>>>>>>> 9f773f5c0259dbaad4525c5c8e4528a9c8c53007:api/src/middleware/middlewareToken.js
      }catch(error) {
         res.send(error.message);
       }
      
       next();
    }

    module.exports = middlewareToken;