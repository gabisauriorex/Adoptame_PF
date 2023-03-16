import axios from "axios";

//conexion entre front y back
export function postPet(){
    return async function(dispatch){
        try {
            let json = await axios.post("http://localhost:3000/", payload);
            return dispatch({
                type: POST_PET,
                payload: json
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPets = () => {
  axios.get("/pets");
};
