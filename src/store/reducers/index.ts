import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import stationsSlice from "./stationsSlice";

const rootReducer = combineReducers({
  user: userSlice,
  stations: stationsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
