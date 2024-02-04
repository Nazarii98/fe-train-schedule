import { NavbarTab } from "@/utils/types";
import Link from "next/link";
import { FC } from "react";

interface Props {
  tab: NavbarTab;
  isActive: boolean;
}

const NavbarTabItem: FC<Props> = ({ tab, isActive }) => {
  return (
    <Link
      className={`${
        isActive && "bg-orange-600"
      } hover:bg-orange-500 rounded-2xl p-4 transition-all duration-300 ease-in-out`}
      href={tab.link}
    >
      {tab.title}
    </Link>
  );
};

export default NavbarTabItem;
