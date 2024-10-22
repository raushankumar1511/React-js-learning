import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name : 'counter',
  initialState : {counterVal : 0},
  reducers : {
    increament : (state) =>{
      state.counterVal += 1;
    },
    decreament : (state) => {
      state.counterVal -= 1;
    },
    add : (state,action) => {
      state.counterVal += action.payload;
    },
    subtract : (state, action) =>{
      state.counterVal -= action.payload;
    },
    reset : (state) =>{
      state.counterVal = 0;
    }
  }
})

export const counterActions = counterSlice.actions;

export default counterSlice;