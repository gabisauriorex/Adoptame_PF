
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPets } from "../../Redux/Actions/actions_pets";

import CardPet from "../Card/CardPet";
/* import {pets} from '../../Datos.js' */
import style from "./Pets.module.css";
//============MUI===============


//=================


import {pets} from '../../Datos.js' 


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
        imagen={p.imagen}
        name={p.name}
        descripcion={p.descripcion}
        color={p.color}
        edad={p.edad}
        especie={p.especie}
        sexo={p.sexo}
         />
        );
      })}
    </div>
  );
}

export default Pets;











