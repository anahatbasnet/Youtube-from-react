import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./Features/toggleslic";
import ytRecucer from "./Features/ytslice";

const store = configureStore({
  reducer: {
    toggle:toggleReducer,
    yt:ytRecucer
  },
});
export default store;
