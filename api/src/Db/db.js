const mongoose = require("mongoose");

//const { database } = require("./config.js");

const URL = "mongodb://localhost:27017/Adoptame";
//const URL = "mongodb+srv://<nombre usuario>:password@cluster0.bsvp1kl.mongodb.net/Adoptame?retryWrites=true&w=majority";
//const URL = "mongodb+srv://arieltecnico:1NOcCreyIcc5UnvH@cluster0.bsvp1kl.mongodb.net/Adoptame";

/* const { URL } = process.env; */
const cnn = async () => {
  await mongoose.connect(URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = cnn;
