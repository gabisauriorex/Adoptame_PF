const {Pet} = require("../db");

const Validation = async (body) => {

        let {name, animal, breed, height, weight, age, color, image, identified} = body;
    
        if (!name) return "Coloque un nombre";
        if (!animal) return "Coloque un tipo de animal"; 
        if (!breed) return "Coloque una raza";
        if (!height) return "Coloque la altura de la mascota";
        if (!weight) return "Coloque el peso de la mascota";
        if (!age) return "Coloque la edad de la mascota";
        if (!color) return "Coloque el color de pelo de la mascota";
        
        if (image && !(image.match( /^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null )) {
            return "El link provisto no es una imagen";
        } 

        if (name === " ") return "Coloque algun nombre a la mascota";
        const pets = await Pet.findAll();

        if (name) {
            const petName = pets.filter( (p) => p.name.toLowerCase().includes(name.toLowerCase()));
            if (petName.length) return "Nombre ya existe";
        }
    
        if (!image) image = " ";

 }

module.exports = Validation;