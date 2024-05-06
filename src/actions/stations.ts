import { AppThunk } from "@/store/store";
import { setLoading, setStations } from "@/store/reducers/stationsSlice";

export const fetchStations = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("/api/stations");
    const stations = await response.json();
    dispatch(setStations(stations));
  } catch (err) {
    console.error(`Error logout: ${err}`);
  } finally {
    dispatch(setLoading(false));
  }
};
