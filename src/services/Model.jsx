import { createSlice } from "@reduxjs/toolkit";

const ModelSlice = createSlice({
  name: "Model",
  initialState: {
    curr: null,
  },
  reducers: {
    setCurr: (state, action) => {
      state.curr = action.payload;
    },
  },
});

export const { setCurr } = ModelSlice.actions;

export default ModelSlice.reducer;
