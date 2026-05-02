import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    Increment: (state) => {
      state.value += 1;
    },
    Decrement: (state) => {
      state.value -= 1;
    },
    IncreaseByAmount: (state, action) => {
      state.value += action.payload;
    },
    DecreaseByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { Increment, Decrement, IncreaseByAmount, DecreaseByAmount } =
  CounterSlice.actions;
export default CounterSlice.reducer;
