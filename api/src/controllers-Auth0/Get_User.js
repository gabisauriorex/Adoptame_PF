const bcrypt = require('bcrypt');
const {User} = require('../db');

const Get_User = async (request, response) => {
    const users = await User.findAll({})
    response.json(users)
  }

  module.exports = Get_User;