import Image from "next/image";
import { Navbar } from "./Navbar";

export const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex flex-1 gap-10 overflow-scroll overflow-y-auto">
      <Image
        src="/images/mainImage.jpg"
        alt="Main BG"
        className="absolute inset-0 z-[-10] object-cover w-full h-full"
        width={1088}
        height={608}
      />
      <Navbar />
      {children}
    </main>
  );
};
