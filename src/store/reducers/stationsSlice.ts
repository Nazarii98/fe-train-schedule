import { Station } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StationSlice = {
  stations: Station[] | null;
  isLoading: boolean;
};

const initialState: StationSlice = {
  stations: null,
  isLoading: false,
};

export const stationsSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setStations: (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload;
    },
    clearStations: (state) => {
      state.stations = null;
    },
    updateStations: (state, action) => {
      state.stations = { ...state.stations, ...action.payload };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer } = stationsSlice;

export const { setStations, clearStations, updateStations, setLoading } =
  actions;

export default reducer;
