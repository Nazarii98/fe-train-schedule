import { Station, Train } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StationSlice = {
  trains: Train[] | null;
  isLoading: boolean;
};

const initialState: StationSlice = {
  trains: null,
  isLoading: false,
};

export const trainsSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {
    setTrains: (state, action: PayloadAction<Train[]>) => {
      state.trains = action.payload;
    },
    clearTrains: (state) => {
      state.trains = null;
    },
    updateTrains: (state, action) => {
      state.trains = { ...state.trains, ...action.payload };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer } = trainsSlice;

export const { setTrains, clearTrains, updateTrains, setLoading } = actions;

export default reducer;
