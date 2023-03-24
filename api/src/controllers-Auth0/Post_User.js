const bcrypt = require('bcrypt');
const {User} = require('../db');

const Post_User = async (request, response) => {
    const { body } = request
    const { username, name, password } = body
  
    console.log(username, name, password);
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
  
   
    const savedUser = await User.create ({
      username,
      name,
      passwordHash
    })
  
    response.status(201).json(savedUser)
  }

module.exports = Post_User;
  