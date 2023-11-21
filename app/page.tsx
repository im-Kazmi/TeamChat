import Navbar from "@/components/shared/Navbar";
import { Raleway, Actor, Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const questrial = Cabin({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  style: "normal",
});
export default function Home() {
  return (
    <main className="  background_light200_dark_300  min-h-screen lg:px-40 max-md:px-20 md:px-20 max-sm:px-10 flex flex-col">
      <Navbar />
      <div className=" m-auto flex flex-col">
        <h1
          className={`max-lg:text-[80px] lg:text-[80px] max-sm:text-[60px] gradient-text font-extrabold mx-auto ${questrial.className}`}
        >
          Team chat
        </h1>
        <h1
          className={`max-lg:text-[80px] lg:text-[80px] max-sm:text-[60px]  gradient-text-2 font-extrabold  mx-auto ${questrial.className}`}
        >
          Reimagined
        </h1>
      </div>
      <p className="text_light100_dark300 text-xs mx-auto">
        {" "}
        Amplify Collaboration, Elevate Communication – Where Teams Unite!
      </p>
      <Link
        href={"/app"}
        className=" bg-gradient-to-r from-[#F45E84] to-[#99F8D0] mt-5 w-fit rounded-md mx-auto px-10 py-2 text-light-100 "
      >
        Try it Now!
      </Link>
      <Image
        src={"/project.png"}
        width={800}
        height={600}
        alt="Team Chat"
        className=" mt-5 rounded-lg mx-auto "
      />
    </main>
  );
}
