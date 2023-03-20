import { GET_PETS, POST_FAILURE, POST_REQUEST, POST_SUCCESS} from "../ActionsTypes/actions_types";



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
    //⬇️⬇️ CASE FORM....
    // case POST_REQUEST:
    //   return{
    //     ...state,
    //     isLoading: true,
    //     error: null,
    //   };
    // case POST_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     form: action.payload,
    //   }
    // case POST_FAILURE:
    //   return{
    //     ...state,
    //     isLoading: false,
    //     error: action.payload
    //   }
//---!FORM!
    default:
      return state;
  }
}
