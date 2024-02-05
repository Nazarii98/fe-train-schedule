import Image from "next/image";
import { Navbar } from "./navbar/Navbar";

export const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex flex-1 gap-10 overflow-scroll overflow-y-auto">
      <Navbar />
      {children}
    </main>
  );
};
