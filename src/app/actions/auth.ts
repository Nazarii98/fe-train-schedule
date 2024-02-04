import { loginUser, logoutUser, setLoading } from "@/store/reducers/userSlice";
import { AppThunk } from "@/store/store";
import { SignInInput } from "@/utils/types";
import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:4000";

export const logout = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    Cookies.remove("access_token");
    dispatch(logoutUser());
  } catch (err) {
    console.error(`Error logout: ${err}`);
  } finally {
    dispatch(setLoading(false));
  }
};

export const login =
  (data: SignInInput): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(API_URL + "/auth/login", data);
      const accessToken = response.data.access_token;
      const cookieOptions: Cookies.CookieAttributes = {
        expires: 1,
        secure: process.env.NODE_ENV === "production",
      };

      Cookies.set("access_token", accessToken, cookieOptions);

      const userResponse = await axios.get(API_URL + "/users/currentUser", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const user = userResponse.data;
      dispatch(loginUser(user));
      return user;
    } catch (err) {
      console.error(`Error login: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };
