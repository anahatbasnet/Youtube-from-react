import { createSlice } from "@reduxjs/toolkit";
const toggleslice = createSlice({
  name: "toggle",
  initialState: {
    togglevalue: true,
  },
  reducers: {
    settogglevalue: (state, action) => {
      state.togglevalue = !state.togglevalue;
    },
  },
});

export const { settogglevalue } = toggleslice.actions;
export default toggleslice.reducer;
