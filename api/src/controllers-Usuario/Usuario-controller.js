const { Usuario, Pet } = require("../db.js");
const { Op } = require("sequelize");
//const Validation = require("./Validation");


//CRUD API MASCOTAS

const createUsuario = async (req, res) => {
  try {
    let {
        fullname,
        address,
        province,
        phone,
        email, 
        pet
    } = req.body;

    //const msg = await Validation(req.body);
    //if (msg) throw new Error(msg);

    const newUsuario = await Usuario.create({
        fullname,
        address,
        province,
        phone,
        email
    });
    //await newUsuario.addPet(pet);
  
    newUsuario
      ? res.status(200).send("Usuario created successfully 👌")
      : res.status(404).json("Usuario not created ☹ ");
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getUsuario = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
    const pets = await Pet.findAll({
      include: [
        {
          model: Vaccines,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
        {
          model: Diseases,
          attributes: ["name", "severity"],
          through: { attributes: [] },
        },
        {
          model: Location,
          attributes: ["id", "province"],
          through: { attributes: [] },
        },
      ],
    });

    if (name) {
      const queryPets = await Pet.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: [
          {
            model: Vaccines,
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
          {
            model: Diseases,
            attributes: ["name", "severity"],
            through: { attributes: [] },
          },
          {
            model: Location,
            attributes: ["id", "province"],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).send(queryPets);
    } else {
      res.status(200).send(pets);
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const UsuarioById = async (req, res) => {
  try {
    const { id } = req.params;

    const mascotaById = await Pet.findByPk(id, {
      include: [
        {
          model: Vaccines,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Diseases,
          attributes: ["name", "severity"],
          through: { attributes: [] },
        },
        {
          model: Location,
          attributes: ["province"],
          through: { attributes: [] },
        },
      ],
    });

    mascotaById
      ? res.json(mascotaById)
      : res.status(400).json("There are no pets with that id in the db");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const mascotaById = await Pet.findByPk(id);

    if (mascotaById) {
      mascotaById.identified = false;
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

const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const {
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
  } = req.body;

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
      if (identified) mascotaById.identified = identified;
      if (timewait) mascotaById.timewait = timewait;
      if (adopted) mascotaById.adopted = adopted;
      // for (let prop in body) {
      //       var aux = body[prop];
      //       mascotaById.prop = aux;
      //   }

      mascotaById.save();
      console.log(mascotaById);
      res.json("El cambio fue realizado con exito");
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
    createUsuario,
    getUsuario,
    UsuarioById,
    deleteUsuario,
    updateUsuario,
};