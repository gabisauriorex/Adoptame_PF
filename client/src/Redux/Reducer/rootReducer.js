import { GET_PETS } from "../ActionsTypes/actions_types";

const initialState = {
  pets: [],
};

export default function rootReducer(state = initialState, action) {
  // en esta accion mando todos los videogames al arrglo vacio
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
      };

    default:
      return state;
  }
}
