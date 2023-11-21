import { fakeServers } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";

const ServersSidebar = () => {
  return (
    <div className=" bg-light-300 dark:bg-[#13181E] w-16 min-h-full bg-sidebar flex flex-col">
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
    </div>
  );
};

export default ServersSidebar;
