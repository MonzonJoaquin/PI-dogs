import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dogs = createSlice({
  name: "dogs",
  initialState: {
    list: []
  },
  reducers:{
    setDogsList: (state, action) => {
      state.list = action.payload
    }
  }
})

const {setDogsList} = dogs.actions

export const fetchAllDogs = () => (dispatch) => {
  axios.get("http://localhost:3001/dogs")
    .then(response => {
      dispatch(setDogsList(response.data))
    })
    .catch(e => console.log(e))
}

export default dogs.reducer