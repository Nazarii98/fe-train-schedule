export enum Routes {
  HOME = "/",
  LOGIN = "/signIn",
  TRAINS = "/trains",
  STATIONS = "/stations",
}

export const privateRoutes = [Routes.TRAINS, Routes.STATIONS];
