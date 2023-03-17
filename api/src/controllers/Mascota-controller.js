const { parse } = require("path");
//const Pet = require("../models/Pet");
const { Pet } = require("../db")

//CRUD API MASCOTAS

const createMascota = async (req, res) => {
  try {
    let { id, name, animal, breed, height, weight, age, color, description, image, isLost} = req.body;

    //console.log(id, name,  animal, breed, height, weight, age, color, description, image, isLost)
    if (!name, !animal || !breed || !height || !weight || !age || !color || !isLost) {
      throw new Error("Faltan Datos");
    }

    if (image && !(image.match( /^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null )) {
      throw new Error("El link provisto no es una imagen");
    } 
    
    if (!image) image = " ";

    const newMascota = await Pet.create({
      name,
      animal,
      breed,
      height: parseInt(height) || 0,
      weight: parseInt(weight) || 0, 
      age, 
      color,
      description, 
      image,
      isLost
    });

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
    const pets = await Pet.findAll();

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

      //mascotaById.save()
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

//CRUD API MASCOTAS
/*
id:{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  allowNull: false,
  primaryKey: true
},
name:{
  type: DataTypes.STRING,
  allowNull: false,
},
height:{
  type: DataTypes.INTEGER,
  allowNull: false
},
weight:{
  type: DataTypes.INTEGER,
  allowNull: false
},
age:{
  type: DataTypes.INTEGER,
  allowNull: false
},
color:{
  type: DataTypes.STRING,
  allowNull: false
},
description:{
  type: DataTypes.STRING,
  allowNull: true
},
image:{
  type: DataTypes.STRING,
  allowNull: true
},
});
};*/