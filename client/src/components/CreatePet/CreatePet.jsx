import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function CreatePet(){
    const { register, handleSubmit, formState: { errors }} = useForm({ mode: "onTouched" });
    const [ input, setInput ] = useState({
        name: '',
        height: '',
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
                <label>Animal</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    ref={ register("name", { required: true })
                }
                onChange={(e) => handleChange(e)}/>
                {errors.name && <span>Campo obligatorio</span>}
            </div>
            <div>
                <label>Raza</label>
                <input 
                    type="text" 
                    name="color" 
                    id="color"
                    ref={register("color", {required: true})
                }onChange={(e) => handleChange(e)}/>
                {errors.color && <span>Campo obligatorio</span>}
            </div>
            <div>
                <label>Edad</label>
                <input 
                    type="number" 
                    name="age" 
                    id="age"
                    ref={register("age", { required:true })
                }onChange={(e) => handleChange(e)}/>
                {errors.age && <span>Campo obligatorio</span>}
            </div>
            <div>
                <label>Peso</label>
                <input 
                    type="number" 
                    name="weight" 
                    id="weight"   
                    ref={register("weight", { required: true })
                }onChange={(e) => handleChange(e)}/>
                {errors.weight && <span>Campo obligatorio</span>}
            </div>
            <div>
                <label>Altura</label>
                <input 
                    type="number" 
                    name="height" 
                    id="height"  ref={ register("height", {required: true })
                }onChange={(e) => handleChange(e)}/>
                {errors.height && <span>Campo obligatorio</span>}
            </div>
            <div>
                <label>Imagen</label>
                <input 
                    type="image" 
                    name="image" 
                    id="image"  
                    ref={register("image", { required: true })
                }onChange={(e) => handleChange(e)}/>
                {errors.image && <span>Campo obligatorio</span>}
            </div>
            <div>
                <label>Descripcion</label>
                <input 
                    type="text"
                    name="description" 
                    id="description"  
                    ref={register("description", { required: false, maxLength: 80})}
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

