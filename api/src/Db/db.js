const mongoose = require("mongoose");

const url = "mongodb+srv://admin:4Uu2hniHQ0UnmpWd@cluster0.5visjvr.mongodb.net/test"
//const URL = "mongodb+srv://<nombre usuario>:password@cluster0.bsvp1kl.mongodb.net/Adoptame?retryWrites=true&w=majority";
// "mongodb+srv://arieltecnico:1NOcCreyIcc5UnvH@cluster0.bsvp1kl.mongodb.net/Adoptame";

const cnn = async () => {
  await mongoose.connect(url, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = cnn;
