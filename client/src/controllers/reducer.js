import { createSlice } from "@reduxjs/toolkit";


export const dogs = createSlice({
  name: "dogs",
  initialState: {
    list: [],
    filter: [],
    temperament: []
  },
  reducers:{
    setDogsList: (state, action) => {
      state.list = action.payload
    },
    setDogsFilter: (state, action) => {
      state.filter = action.payload
    },
    setTemperaments: (state, action) => {
      state.temperament = action.payload
    },
  }
})

export const {setDogsList, setDogsFilter, setTemperaments} = dogs.actions


export default dogs.reducer