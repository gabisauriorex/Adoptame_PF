const { parse } = require("path");

const {Diseases} = require("../db.js");


//CRUD API MASCOTAS

const createDiseases = async (req, res) => {
  try {
    let {name, severity} = req.body;

// : parseInt(height) || 0,: parseInt(weight) || 0,
    const newDiseases = await Diseases.create({name, severity});
 
    newDiseases
      ? res.status(200).send("Vaccine created successfully 👌")
      : res.status(404).json("Vaccine not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getDiseases = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
    const diasease = await Diseases.findAll();

    if (name) {
      const DiseasesName = diasease.filter( (d) => d.name.toLowerCase().includes(name.toLowerCase()));
      DiseasesName.length ? res.status(200).send(DiseasesName): res.status(404).send({message:error.message})
    }else{
      res.status(200).send(diasease)
    }
  
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  createDiseases,
  getDiseases
};