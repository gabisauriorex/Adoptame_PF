import axios from "axios";

//conexion entre front y back

export const getPets = () => {
  axios.get("/pets");
};
