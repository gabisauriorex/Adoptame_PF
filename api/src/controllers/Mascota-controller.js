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

    const mascotaById = await Pet.findByPk(id);

    mascotaById
      ? res.json(mascotaById)
      : res.status(400).json("There are no pets with that id in the db");

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteMascota = async (req, res) => {
  
  try {
    const { id } = req.params;

    const mascotaById = await Pet.findByPk(id);

    if (mascotaById){
      mascotaById.isLost = false;
      //console.log(mascotaById)
      await mascotaById.save();
      res.json("La mascota fue adoptada con exito");
    } else {
      res.status(400).json("There are no pets with that id in the db");
    }

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateMascota = async (req, res) => {
  const { id } = req.params;
  const { name, animal, breed, height, weight, age, color, description, image, isLost } = req.body;

  try {
    if (!id) {
      res.status(400).json("No se encuentra ID");
    } else {
      const mascotaById = await Pet.findByPk(id);
      if (name) mascotaById.name = name;
      if (animal) mascotaById.animal = animal;
      if (breed) mascotaById.breed = breed;
      if (height) mascotaById.height = height;
      if (weight) mascotaById.weight = weight;
      if (age) mascotaById.age = age;
      if (color) mascotaById.color = color;
      if (description) mascotaById.description = description;
      if (image) mascotaById.image = image;
      if (isLost) mascotaById.isLost = isLost;
      
      // for (let prop in body) {
      //       var aux = body[prop];
      //       mascotaById.prop = aux;
      //   }

      mascotaById.save()
      console.log(mascotaById)
      res.json("El cambio fue realizado con exito")
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

<<<<<<< HEAD
//CRUD API MASCOTAS
=======
>>>>>>> 484a10311f76765ec07312e44b884ce4169fe42f
