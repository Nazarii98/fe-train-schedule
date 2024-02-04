import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import stationsSlice from "./stationsSlice";
import trainsSlice from "./trainsSlice";

const rootReducer = combineReducers({
  user: userSlice,
  stations: stationsSlice,
  trains: trainsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
