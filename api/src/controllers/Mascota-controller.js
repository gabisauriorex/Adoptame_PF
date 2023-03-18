const { parse } = require("path");
const {Pet, Vaccines} = require("../db.js");
const Validation = require("./Validation");
const sumarDias = require("./sumarDias");

//CRUD API MASCOTAS

const createMascota = async (req, res) => {
  try {
    let {name, animal, breed, height, weight, age, color, description, image, identified, timewait, adopted, arrayvacine} = req.body;

    const msg = await Validation(req.body);
    if (msg) throw new Error(msg);
            
    if (identified){ 
      var d = new Date();
      timewait = sumarDias(d, 30);
      adopted = false;
    } else {
        timewait = new Date();
        adopted = true;
    }

// : parseInt(height) || 0,: parseInt(weight) || 0,
    const newMascota = await Pet.create({
      name,
      animal,
      breed,
      height,
      weight,
      age, 
      color,
      description, 
      image,
      identified,
      timewait,
      adopted,
    });
    await newMascota.addVaccines(arrayvacine);
    newMascota
      ? res.status(200).send("Pet created successfully 👌")
      : res.status(404).json("Pet not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getMascotas = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
    const pets = await Pet.findAll({
      include: {
        model: Vaccines,
        attributes: ["name"],
        througth: {
          attributes: [],
        },
      },
    });

    if (name) {
      const petName = pets.filter( (p) => p.name.toLowerCase().includes(name.toLowerCase()));
      petName.length ? res.status(200).send(petName): res.status(404).send({message:error.message})
    }else{
      res.status(200).send(pets)
    }
  
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const mascotaById = async (req, res) => {
  try {
    const { id } = req.params;

    //============de la BD==============================
    const mascotaById = await Pet.findByPk(id);

    mascotaById
      ? res.json(mascotaById)
      : res.status(400).json("There are no pets with that id in the db");

    //=============================================
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteMascota = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const mascotaDB = await Pet.findByIdAndDelete({ _id: id });

      if (!mascotaDB) {
        return res.json({
          estado: false,
          mensaje: "could not delete",
        });
      } else {
        return res.json({
          estado: true,
          mensaje: "The pet has been removed",
        });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateMascota = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const mascotaDB = await Pet.findByIdAndUpdate(id, body);
      //console.log(mascotaDB);
      res.json({
        estado: true,
        mensaje: "modified pet",
      });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createMascota,
  getMascotas,
  mascotaById,
  deleteMascota,
  updateMascota,
};

//CRUD API MASCOTAS
