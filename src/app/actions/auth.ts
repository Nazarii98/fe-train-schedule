import { loginUser, logoutUser, setLoading } from "@/store/reducers/userSlice";
import { AppThunk } from "@/store/store";
import { SignInInput, SignUpInput } from "@/utils/types";
import Cookies from "js-cookie";
import axiosInterceptorInstance from "../axiosInterceptorInstance";

export const logout = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    Cookies.remove("access_token");
    localStorage.clear();
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
      const response = await axiosInterceptorInstance.post("/auth/login", data);
      const accessToken = response.data.access_token;
      const cookieOptions: Cookies.CookieAttributes = {
        expires: 1,
        secure: process.env.NODE_ENV === "production",
      };

      Cookies.set("access_token", accessToken, cookieOptions);

      const userResponse = await axiosInterceptorInstance.get(
        "/users/currentUser"
      );

      const user = userResponse.data;

      for (let key in user) {
        localStorage.setItem(key, user[key]);
      }

      dispatch(loginUser(user));
      return user;
    } catch (err) {
      console.error(`Error login: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const signUp =
  (data: SignUpInput): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInterceptorInstance.post(
        "/auth/signUp",
        data
      );
      const accessToken = response.data.access_token;
      const cookieOptions: Cookies.CookieAttributes = {
        expires: 1,
        secure: process.env.NODE_ENV === "production",
      };

      Cookies.set("access_token", accessToken, cookieOptions);

      console.log("accessToken", accessToken);

      const userResponse = await axiosInterceptorInstance.get(
        "/users/currentUser"
      );

      const user = userResponse.data;

      for (let key in user) {
        localStorage.setItem(key, user[key]);
      }

      dispatch(loginUser(user));
      return user;
    } catch (err) {
      console.error(`Error login: ${err}`);
    } finally {
      dispatch(setLoading(false));
    }
  };
