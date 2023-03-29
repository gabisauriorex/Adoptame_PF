const axios = require('axios');
const authConfig  = require('../auth_config.json');

const userAutenticated = async (req, res, next) => { 

  try{
        console.log('Estoy adentro')
        const accessToken = req.headers.authorization.split(" ")[1];
      
        const response = await axios(`https://${authConfig.domain}/userinfo`, {
          headers: {
            authorization: `Bearer ${accessToken}`
          }
        })  
        res.send(200).json(response)
      }catch(error) {
         res.send(error.message);
       }
      
       next();
    }

    module.exports = userAutenticated;