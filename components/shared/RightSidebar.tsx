import React from "react";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import { fakeChannels } from "@/constants";
import Image from "next/image";
import { Users } from "lucide-react";
import { UserButton, useSession } from "@clerk/nextjs";
import { useThemeContext } from "@/context/ThemeContext";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const RightSidebar = () => {
  // const { isLoaded, session } = useSession();

  return (
    <div className=" w-[400px] max-md:hidden min-h-screen bg-light-400 dark:bg-[#1D2127] ">
      <div className=" mt-5 flex flex-col px-3">
        <div className="w-full flex gap-3 px-4 py-2 rounded-md bg-light-300 dark:bg-dark-200">
          <UserButton />
          {/* <div className=" flex flex-col dark:text-light-200">
            <h1 className=" text-sm font-semibold">{session?.user.fullName}</h1>
            <h1 className="  font-semibold text-[10px]">
              @{session?.user.emailAddresses[0].emailAddress.split("@")[0]}
            </h1>
          </div> */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
