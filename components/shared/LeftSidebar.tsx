import React from "react";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import { fakeChannels } from "@/constants";

const LeftSidebar = () => {
  return (
    <div className=" w-60 max-md:hidden min-h-screen  bg-light-400 dark:bg-[#1D2127] ">
      <div className=" mt-5 flex flex-col px-3">
        <div className="flex flex-col w-full">
          <div className="w-full rounded-md flex gap-2 bg-light-200 dark:bg-dark-400 px-3 py-2">
            <span className=" dark:text-light-100 my-auto">
              <CiSearch />
            </span>
            <input
              type="text"
              className="  w-full h-full rounded-md outline-none dark:text-light-200 bg-light-200 dark:bg-dark-400"
              placeholder="Search Chat"
            />
          </div>
          <Button className=" w-full bg-primary text-light-100 mt-2">
            Start new chat
          </Button>
        </div>
        <div className="flex flex-col">
          {fakeChannels.map((channel) => {
            return (
              <div key={channel.id}>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
