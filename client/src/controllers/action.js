import axios from "axios"
import { setDogsFilter, setDogsList, setTemperaments } from "./reducer"

export const fetchAllDogs = () => (dispatch) => {
  axios.get("http://localhost:3001/dogs")
    .then(response => { 
      dispatch(setDogsList(response.data))
      return response.data
    })
    .then(result => {dispatch(setDogsFilter(result))})
    .catch(e => console.log(e))
}

export const fetchAllTemperaments = () => (dispatch) => {
  axios.get("http://localhost:3001/temperament")
    .then(response => { 
      dispatch(setTemperaments(response.data))
    })
    .catch(e => console.log(e))
}

export const postDogInDb = (dog) => {
  axios.post("http://localhost:3001/dog", dog)
    .then(response => console.log("salio bien, chequeate esto", response))
    .catch(error => console.log(error))
}