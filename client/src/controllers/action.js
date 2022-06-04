import axios from "axios"
import { setDogsList } from "./reducer"

export const fetchAllDogs = () => (dispatch) => {
  axios.get("http://localhost:3001/dogs")
    .then(response => { 
      dispatch(setDogsList(response.data))
    })
    .catch(e => console.log(e))
}

