import axios from "axios"
import { setDogsFilter, setDogsList } from "./reducer"

export const fetchAllDogs = () => (dispatch) => {
  axios.get("http://localhost:3001/dogs")
    .then(response => { 
      dispatch(setDogsList(response.data))
      return response.data
    })
    .then(result => {dispatch(setDogsFilter(result))})
    .catch(e => console.log(e))
}

