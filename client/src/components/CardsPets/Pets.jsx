
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPets } from "../../Redux/Actions/actions_pets";

import CardPet from "../Card/CardPet";
/* import {pets} from '../../Datos.js' */
import style from "./Pets.module.css";
//============MUI===============


function Pets() {
  const dispatch = useDispatch(); 
  const pets = useSelector((state) => state.pets);

/*   console.log(pets);
 */
  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);
 
  


  return (
    <div className={style.gridContainer}>
      {pets?.map((p) => {
        // esta card es solo patra mostrar ya se va ir cuando mateo mande la card de el
        return (
        <CardPet
        id={p.id}
        imagen={p.image}
        name={p.name}
        fecha={p.timewait}
        descripcion={p.description}
  
        /* 
        
        animal={p.animal}
        descripcion={p.description}
        color={p.color}
        edad={p.age}
        especie={p.breed}
        sexo={p.sex}
        altura={p.height}
        peso={p.weight}
        
        */
         />
        );
      })}
    </div>
  );
}

export default Pets;











