import { NavbarTab } from "@/utils/types";
import { usePathname } from "next/navigation";
import { FC } from "react";
import NavbarTabItem from "./NavbarTabItem";

interface Props {
  tabs: NavbarTab[];
}

const NavbarTabList: FC<Props> = ({ tabs }) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4">
      {tabs.map((item, index) => {
        const isActive = pathname === item.link;
        return <NavbarTabItem key={index} isActive={isActive} tab={item} />;
      })}
    </ul>
  );
};

export default NavbarTabList;
