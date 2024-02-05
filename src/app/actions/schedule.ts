import { AppThunk } from "@/store/store";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import {
  deleteScheduleItem,
  setLoading,
  setSchedule,
} from "@/store/reducers/scheduleSlice";

export const fetchSchedule =
  (pagination: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInterceptorInstance.get("/schedule/all", {
        params: { ...pagination },
      });
      const schedule = response.data.data;
      dispatch(setSchedule(schedule));
    } catch (err) {
      console.error(`Error logout: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const deleteSchedule =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInterceptorInstance.delete(
        "/schedule/delete",
        {
          params: {
            id,
          },
        }
      );

      dispatch(deleteScheduleItem(id));
    } catch (err) {
      console.error(`Error logout: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };
