import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import stationsSlice from "./stationsSlice";
import trainsSlice from "./trainsSlice";
import scheduleSlice from "./scheduleSlice";

const rootReducer = combineReducers({
  user: userSlice,
  stations: stationsSlice,
  trains: trainsSlice,
  schedule: scheduleSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
