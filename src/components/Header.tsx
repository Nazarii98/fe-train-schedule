import Link from "next/link";
import { UserBlock } from "./UserBlock";

export const Header = () => {
  return (
    <header className="flex flex-col gap-10 py-4 px-8 rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2">
      <div className="flex flex-row justify-between">
        <Link className="text-3xl" href="/">
          Train Schedule
        </Link>
        <UserBlock />
      </div>
    </header>
  );
};
