const { parse } = require("path");

const {Location} = require("../db.js");

//CRUD API MASCOTAS

const createLocation = async (req, res) => {
  try {
    let {province} = req.body;

// : parseInt(height) || 0,: parseInt(weight) || 0,
const location = await Location.findAll();
if (province) {
    const locationName = location.filter( (l) => l.province.toLowerCase().includes(province.toLowerCase()));
    if (locationName.length) throw new Error ("Nombre ya existe");
}
    const newLocation = await Location.create({province});
 
    newLocation
      ? res.status(200).send("Vaccine created successfully 👌")
      : res.status(404).json("Vaccine not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getLocation = async (req, res) => {
  try {
    const { province } = req.query; //opcion por name
    const location = await Location.findAll();

    if (province) {
      const LocationName = location.filter( (l) => l.province.toLowerCase().includes(province.toLowerCase()));
      LocationName.length ? res.status(200).send(LocationName): res.status(404).send({message:error.message})
    }else{
      res.status(200).send(location)
    }
  
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = {
  createLocation,
  getLocation
};