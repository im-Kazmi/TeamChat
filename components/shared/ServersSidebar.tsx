"use client";
import { fakeServers } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useThemeContext } from "@/context/ThemeContext";
import ServerCard from "./ServerCard";
import ThemeToggle from "./ThemeToggle";

const ServersSidebar = () => {
  return (
    <div className=" bg-light-300 dark:bg-[#13181E] w-20 min-h-full bg-sidebar max-h-screen fixed flex flex-col justify-between">
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
          return <ServerCard key={server.id} server={server} />;
        })}
      </div>
      <div className="flex flex-col pb-5">
        <div className="flex flex-col mx-auto gap-3">
          <ThemeToggle />
          <div className=" mx-auto">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServersSidebar;
