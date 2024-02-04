import { AppThunk } from "@/store/store";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import { setLoading, setStations } from "@/store/reducers/stationsSlice";
import { Pagination } from "@/utils/types";

export const fetchStations =
  (pagination: Pagination): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInterceptorInstance.get("/stations/all", {
        params: {
          pagination,
        },
      });
      const stations = response.data;
      dispatch(setStations(stations));
    } catch (err) {
      console.error(`Error logout: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };
