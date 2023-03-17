import { GET_PETS ,GET_DETAIL_PETS} from "../ActionsTypes/actions_types";
const initialState = {
  pets: [],
  detail:[]
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
    default:
      return state;
  }
}
