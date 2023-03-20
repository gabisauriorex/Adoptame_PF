import { GET_DETAIL_PETS, GET_PETS, POST_SUCCESS} from "../ActionsTypes/actions_types";



const initialState = {
  pets: [],
  detail:[],
  // isLoading: false,
  // error: null,
  formData: {},
};

export default function rootReducer(state = initialState, action) {
  // en esta accion mando todos los videogames al arrglo vacio
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
      };
    case GET_DETAIL_PETS:
      return {
        ...state,
        detail: action.payload,
      };
 
     case POST_SUCCESS:
     return {
      ...state
     } 
 
    default:
      return state;
  }
}
