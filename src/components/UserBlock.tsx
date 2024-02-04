"use client";

import { MdExitToApp } from "react-icons/md";
import { logout } from "@/app/actions/auth";
import { useTypedDispatch, useTypedSelector } from "@/store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export const UserBlock = () => {
  const dispatch = useTypedDispatch();
  const user = useTypedSelector((state) => state.user.user);
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const role = localStorage.getItem("role");
  const [isAuth, setIsAuth] = useState(!!firstName);

  const userNameFromLocalStorage = `${firstName} ${lastName}`;
  const userNameFromRedax = `${user?.firstName} ${user?.lastName}`;
  const userName = user ? userNameFromRedax : userNameFromLocalStorage;
  const handleLogout = () => {
    dispatch(logout());
    setIsAuth(false);
  };

  useEffect(() => {
    if (user || firstName) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user, firstName]);

  return isAuth ? (
    <div className="flex flex-row gap-10 self-center text-2xl ">
      <h2 className="text-orange-600">
        Wellcome <strong>{userName}</strong> you have <strong>{role}</strong>{" "}
        role
      </h2>
      <button
        onClick={handleLogout}
        className="text-2xl px-4 rounded hover:bg-orange-600 flex flex-row gap-4"
      >
        <h1>Logout</h1> <MdExitToApp size={36} />
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
