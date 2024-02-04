"use client";
import NavbarTabList from "./NavbarTabList";

const navbarTopTabs = [
  {
    title: "Stations",
    link: "/stations",
  },
  {
    title: "Trains",
    link: "/trains",
  },
];

const navbarUserTabs = [
  {
    title: "Favorite stations",
    link: "/favoriteStations",
  },
  {
    title: "Favorite Trains",
    link: "/favoriteTrains",
  },
];

const navbarAdminTabs = [
  {
    title: "Create New Something",
    link: "/",
  },
];

const navbarBottomTabs = [
  {
    title: "About User",
    link: "/aboutUser",
  },
  {
    title: "About Admin",
    link: "/aboutAdmin",
  },
];

export const Navbar = () => {
  const isUser = false;
  const isAdmin = false;
  return (
    <nav className="h-full flex flex-col justify-between rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2 p-4 w-max overflow-scroll overflow-y-auto">
      <NavbarTabList tabs={navbarTopTabs} />
      {isUser && <NavbarTabList tabs={navbarUserTabs} />}
      {isAdmin && <NavbarTabList tabs={navbarAdminTabs} />}
      <NavbarTabList tabs={navbarBottomTabs} />
    </nav>
  );
};
