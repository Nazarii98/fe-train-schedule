import {
  configureStore,
  Action,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: unknown) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, Action>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  null,
  Action
>;
export const useTypedDispatch = (): any => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

export const persistor = persistStore(store);

export default store;
