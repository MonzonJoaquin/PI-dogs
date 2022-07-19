import { createSlice } from "@reduxjs/toolkit";



export const dogs = createSlice({
  name: "dogs",
  initialState: {
    list: [],
    filter: [],
    temperament: [],
    current: 1
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
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    restartCurrent: (state, _) => {
      state.current = 1
    }
  }
})

export const {setDogsList, setDogsFilter, setTemperaments, restartCurrent, setCurrent} = dogs.actions


export default dogs.reducer