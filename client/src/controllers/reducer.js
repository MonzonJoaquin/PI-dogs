import { createSlice } from "@reduxjs/toolkit";


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

export const {setDogsList} = dogs.actions


export default dogs.reducer