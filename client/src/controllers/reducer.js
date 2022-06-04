import { createSlice } from "@reduxjs/toolkit";


export const dogs = createSlice({
  name: "dogs",
  initialState: {
    list: [],
    filter: []
  },
  reducers:{
    setDogsList: (state, action) => {
      state.list = action.payload
    },
    setDogsFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const {setDogsList, setDogsFilter} = dogs.actions


export default dogs.reducer