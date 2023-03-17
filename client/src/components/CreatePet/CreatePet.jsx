import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
/* import { useNavigate } from "react-router-dom"; */


function CreatePet(){
    const { register, handleSubmit, formState: { errors }} = useForm({ mode: "onTouched" });
    const [ input, setInput ] = useState({
        name: '',
        animal: '',
        height: '',
        breed: '',
        weight: '',
        age: '',
        color: '',
        description: '',
        image: '',
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = evento =>{
        console.log(evento)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
        if(errors){
            alert("Revise los campos...")
        }else{
            dispatch(postPet(input));
        navigate('/'); 
        }
    }



  return (
    <div>
        <form onSubmit={ (e) => handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    ref={register("name", {required: true})
                }
                onChange={(e) => handleChange(e)}/>
                {errors.name && <span>Nombre no puede estar vacio</span>}
            </div>
            <div>
                <label>Animal</label>
                <input 
                    type="text" 
                    name="animal" 
                    id="animal" 
                    ref={ register("animal", { 
                        required: {
                            value: true,
                            message: "Este campo no puede estar vacio"
                        },
                        pattern:{
                            value: "^[a-zA-Z]+$",
                            message: "El tipo de animal solo puede contener letras"
                        },
                        minLength:{
                            value: 3,
                            message: "Minimo 3 caracteres"
                        },
                        maxLength:{
                            value: 20,
                            message: "Maximo 20 caracteres"
                        }
                    })
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            { errors.animal && <span><br/>{errors.animal.message} </span>}
            </div>
            <div>
                <label>Raza</label>
                <input 
                    type="text" 
                    name="breed" 
                    id="breed" 
                    ref={ register("breed", { 
                        required: {
                            value: true,
                            message: "Este campo no puede estar vacio"
                        },
                        pattern:{
                            value: "^[a-zA-Z]+$",
                            message: "La raza solo puede contener letras"
                        },
                        minLength:{
                            value: 3,
                            message: "Minimo 3 caracteres"
                        },
                        maxLength:{
                            value: 20,
                            message: "Maximo 20 caracteres"
                        }
                    })
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            { errors.breed && <span><br/>{errors.breed.message} </span>}
            </div>
            <div>
                <label>Altura</label>
                <input 
                    type="number"
                    step="0.01" 
                    name="height" 
                    id="height" 
                    ref={ register("height", { 
                        required: {
                            value: true,
                            message: "Este campo no puede estar vacio"
                        },
                        pattern:{
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: "La altura solo puede contener numeros"
                        },
                    })
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            { errors.height && <span><br/>{errors.height.message} </span>}
            </div>
            <div>
                <label>Peso</label>
                <input 
                    type="number" 
                    name="weight" 
                    id="weight" 
                    ref={ register("weight", { 
                        required: {
                            value: true,
                            message: "Este campo no puede estar vacio"
                        },
                        pattern:{
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: "Peso solo debe ser un numero"
                         },
                    })
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            { errors.weight && <span><br/>{errors.weight.message} </span>}
            </div>
            <div>
                <label>Edad</label>
                <input 
                    type="text" 
                    name="age" 
                    id="age" 
                    ref={ register("age", { 
                        required: {
                            value: true,
                            message: "Este campo no puede estar vacio"
                        },
                    })
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            { errors.age && <span><br/>{errors.age.message} </span>}
            </div>
            <div>
                <label>Color</label>
                <input 
                    type="text" 
                    name="color" 
                    id="color" 
                    ref={ register("color", { 
                        required: {
                            value: true,
                            message: "Este campo no puede estar vacio"
                        },
                        pattern:{
                            value: "^[a-zA-Z]+$",
                            message: "El color solo puede contener letras"
                        },
                        minLength:{
                            value: 3,
                            message: "Minimo 3 caracteres"
                        },
                        maxLength:{
                            value: 20,
                            message: "Maximo 20 caracteres"
                        }
                    })
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            { errors.color && <span><br/>{errors.color.message} </span>}
            </div>
            <div>
                <label>Descripcion</label>
                <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    ref={ register("description")
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label>Imagen</label>
                <input 
                    type="image" 
                    name="image" 
                    id="image" 
                    ref={ register("image")
                }
                onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <button 
                type="button" 
                onClick={(e) => handleSubmit2(e)}>Iniciar</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePet;
