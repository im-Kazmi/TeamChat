"use client";
import { fakeServers } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useThemeContext } from "@/context/ThemeContext";
interface IThemeContext {
  theme: string | undefined;
  handleThemeChange: () => void | undefined;
}
const ServersSidebar = () => {
  const { theme, handleThemeChange } = useThemeContext() as IThemeContext;
  return (
    <div className=" bg-light-300 dark:bg-[#13181E] w-16 min-h-full bg-sidebar max-h-screen fixed flex flex-col justify-between">
      <div className=" mt-5 flex flex-col gap-4 mx-auto">
        <div className=" flex  space-x-1 mx-auto">
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-red"></span>
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-yellow"></span>
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-green"></span>
        </div>
        <button className=" bg-light-100 w-12 h-12 flex  items-center rounded-full text-black text-2xl justify-center text-status-online">
          <FaPlus />
        </button>
        <hr className=" w-full px-3 mx-auto border border-light-500 dark:border-dark-200" />
        {fakeServers.map((server) => {
          return (
            <div
              key={server.id}
              className="  rounded-full cursor-pointer w-fit mx-auto ring-2 ring-light-500  "
            >
              <Image
                src={server.image}
                width={40}
                height={40}
                alt={server.name}
                className=" rounded-full "
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col pb-5">
        <div className="flex flex-col mx-auto gap-3">
          {theme === "light" ? (
            <Button
              onClick={handleThemeChange}
              className=" text-orange bg-light-200 rounded-full w-fit p-3 text-lg  dark:bg-dark-200"
            >
              <IoMdSunny />
            </Button>
          ) : (
            <Button
              onClick={handleThemeChange}
              className="   text-orange bg-light-200 rounded-full w-fit p-3 text-lg dark:bg-dark-200"
            >
              <FaMoon />
            </Button>
          )}
          <div className=" mx-auto">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServersSidebar;
