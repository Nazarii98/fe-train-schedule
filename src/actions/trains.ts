import { AppThunk } from "@/store/store";
import axiosInterceptorInstance from "../utils/axiosInterceptorInstance";
import { setLoading } from "@/store/reducers/stationsSlice";
import { setTrains } from "@/store/reducers/trainsSlice";

export const fetchTrains =
  (pagination: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInterceptorInstance.get("/trains/all", {
        params: { ...pagination },
      });
      const trains = response.data.data;
      dispatch(setTrains(trains));
    } catch (err) {
      console.error(`Error logout: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };
