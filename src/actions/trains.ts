import { AppThunk } from "@/store/store";
import { setTrains, setLoading } from "@/store/reducers/trainsSlice";

export const fetchTrains = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("/api/trains");
    const trains = await response.json();
    dispatch(setTrains(trains));
  } catch (err) {
    console.error(`Error logout: ${err}`);
  } finally {
    dispatch(setLoading(false));
  }
};
