"use client";

import { logout } from "@/app/actions/auth";
import { useTypedDispatch, useTypedSelector } from "@/store/store";
import Link from "next/link";

export const UserBlock = () => {
  const isUser = useTypedSelector((state) => state.user.isAuthorized);
  const user = useTypedSelector((state) => state.user.user);
  const dispatch = useTypedDispatch();

  const userName = `${user?.firstName} ${user?.lastName}`;

  const handleLogout = () => {
    dispatch(logout());
  };

  return isUser ? (
    <div className="flex flex-row gap-10 self-center text-2xl ">
      <h2 className="text-orange-600">Wellcome {userName}</h2>
      <button
        onClick={handleLogout}
        className="text-2xl px-4 rounded hover:bg-orange-600"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex flex-row gap-10 mr-5">
      <Link
        className="text-2xl px-4 rounded-xl hover:bg-orange-600 transition-all duration-300 ease-in-out"
        href="/signIn"
      >
        Sign In
      </Link>
      <Link
        className="text-2xl px-4 rounded-xl hover:bg-orange-600 transition-all duration-300 ease-in-out"
        href="/signUp"
      >
        Sign Up
      </Link>
    </div>
  );
};
