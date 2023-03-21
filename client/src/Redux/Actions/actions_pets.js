import axios from "axios";

//conexion entre front y back

import {GET_PETS,POST_SUCCESS, GET_DETAIL_PETS,FILTER_BY_ANIMAL,FILTER_BY_COLOR,FILTER_BY_SIZE,FILTER_BY_BREED } from '../ActionsTypes/actions_types'


 export const postPet = (payload)=>{
  return async (dispatch) => {

    console.log(payload)
    try {
    await axios.post('pets', payload);
      dispatch({
        type: POST_SUCCESS,
        //payload: response.data,
      });
    } catch (error) {
     
      console.log({message:error.message})
    }  
  }
}



export const getPets =() => {
 return async function (dispatch) {
   try {
    let response = await axios.get("pets");
    console.log(response.data)
    dispatch({
      type: GET_PETS,
       payload:response.data,
    });
   } catch (error) {
    console.error("Error in get Pets: ", error);
   }
  };
};
/* 
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
} */

export function getDetails(id) {
 if (id) {
    return async function (dispatch) {
      try {
 
       const response = await axios.get(`pets/${id}`);
       console.log(response.data)
        dispatch({
          type: GET_DETAIL_PETS,
          payload: response.data,
        });  
      } catch (error) {
        console.log({message:error.message});
      }
    };
  }

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
