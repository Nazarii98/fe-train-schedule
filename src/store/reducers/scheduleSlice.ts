import { Schedule } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ScheduleSlice = {
  schedule: Schedule[] | null;
  isLoading: boolean;
};

const initialState: ScheduleSlice = {
  schedule: null,
  isLoading: false,
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedule: (state, action: PayloadAction<Schedule[]>) => {
      state.schedule = action.payload;
    },
    clearSchedule: (state) => {
      state.schedule = null;
    },
    updateSchedule: (state, action) => {
      state.schedule = { ...state.schedule, ...action.payload };
    },
    deleteScheduleItem: (state, action) => {
      const data = state.schedule?.filter((item) => {
        return item.id !== action.payload;
      });

      console.log("data", data);
      if (data) {
        state.schedule = [...data];
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer } = scheduleSlice;

export const {
  setSchedule,
  deleteScheduleItem,
  clearSchedule,
  updateSchedule,
  setLoading,
} = actions;

export default reducer;
