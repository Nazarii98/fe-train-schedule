import { AppThunk } from "@/store/store";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import { setLoading, setStations } from "@/store/reducers/stationsSlice";
import { Pagination } from "@/utils/types";
import { parse } from "path";

export const fetchStations =
  (pagination: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInterceptorInstance.get("/stations/all", {
        params: { ...pagination },
      });
      const stations = response.data.data;
      dispatch(setStations(stations));
    } catch (err) {
      console.error(`Error logout: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };
