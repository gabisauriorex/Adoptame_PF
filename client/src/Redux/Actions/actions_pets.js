import axios from "axios";

//conexion entre front y back

import {GET_PETS, POST_REQUEST, POST_FAILURE, POST_SUCCESS} from '../ActionsTypes/actions_types'



//estos datos vienen del array harckodeado
import {pets} from '../../Datos.js';


/*como no tenemos datos del back por el momento traeremos
 datos de un array cargado de nosotros 😁😁😁*/
 export const postPet = (payload)=>{
  return async (dispatch) => {
    dispatch({ type: POST_REQUEST });
    console.log(payload)
    try {
      const response = await axios.post('pets', payload);
      dispatch({
        type: POST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POST_FAILURE,
        payload: error.message,
      })
    }  
  }
}

export const getPets = () => {
 return function (dispatch) {
   try {
    dispatch({
      type: GET_PETS,
       payload:pets,
    });
   } catch (error) {
    console.error("Error in get Pets: ", error);
   }
  };
};

export const filterByBreed = (payload) => {
  return {
    type: FILTER_BY_BREED, 
    payload
  }
}

export const filterByAnimal = (payload) => {
  return {
    type: FILTER_BY_ANIMAL, 
    payload
  }
}

export const filterBySize = (payload) => {
  return {
    type: FILTER_BY_SIZE, 
    payload
  }
}

export const filterByColor = (payload) => {
  return {
    type: FILTER_BY_COLOR, 
    payload
  }
}

export const filterByIdent = (payload) => {
  return {
    type: FILTER_BY_IDENT, 
    payload
  }
}

export function getDetails(id) {
  //console.log(id)


  if (id) {
    return async function (dispatch) {
      try {
       // const response = await axios.get(`Pet/${id}`);
      dispatch({
          type: GET_DETAIL_PETS,
          payload:pets
        });  
      } catch (error) {
        console.log(error);
      }
    };
  }
  /*  return {
    type: "RESET",
  }; */

}



/* 


modo promesas




export function getVideogames() {
  return function (dispatch) {
    axios
      .get("videogames/")

      .then((r) => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: r.data,
        });
      })

      .catch((error) => {
        console.error("Error in getVideogames: ", error);
      });

    // console.log(r.data);
  };
}

*/
