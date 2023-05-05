import { createSlice } from "@reduxjs/toolkit";

const ytslice = createSlice({
  name: "yt",
  initialState: {
    videos: " ",
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
      console.log(state.videos);
    },
  },
});
export const { setVideos } = ytslice.actions;
export default ytslice.reducer;
