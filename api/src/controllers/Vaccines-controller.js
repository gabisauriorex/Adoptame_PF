const { parse } = require("path");

const {Vaccines} = require("../db.js");

//CRUD API MASCOTAS

const createVaccines = async (req, res) => {
  try {
    let {name} = req.body;

// : parseInt(height) || 0,: parseInt(weight) || 0,
    const newVaccine = await Vaccines .create({name});
 
    newVaccine
      ? res.status(200).send("Vaccine created successfully 👌")
      : res.status(404).json("Vaccine not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getVaccines = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
    const vaccine = await Vaccines.findAll();

    if (name) {
      const VaccineName = vaccine.filter( (v) => v.name.toLowerCase().includes(name.toLowerCase()));
      VaccineName.length ? res.status(200).send(VaccineName): res.status(404).send({message:error.message})
    }else{
      res.status(200).send(vaccine)
    }
  
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  createVaccines,
  getVaccines
};

//CRUD API MASCOTAS
