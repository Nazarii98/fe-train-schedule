import { NextRequest, NextResponse } from "next/server";
import { Routes, privateRoutes } from "./utils/routes";

export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname as Routes;
  const accessToken = request.cookies.get("access_token");

  if (privateRoutes.includes(pathname) && !accessToken) {
    return NextResponse.redirect(new URL(Routes.LOGIN, request.url));
  }

  return NextResponse.next();
};
