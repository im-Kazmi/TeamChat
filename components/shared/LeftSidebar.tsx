import React from "react";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import { fakeChannels } from "@/constants";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className=" w-[400px] max-md:hidden min-h-screen ml-20  bg-light-400 dark:bg-[#1D2129] ">
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
        <div className="flex  flex-col mt-3 gap-1">
          {fakeChannels.map((channel) => {
            return (
              <div
                key={channel.id}
                className=" w-full h-14 rounded-lg gap-2 flex cursor-pointer px-3 py-2 hover:bg-light-200  hover:dark:bg-dark-400 "
              >
                <div className="flex flex-col   ">
                  {channel.users.length > 2 && (
                    <span className=" w-5 h-5 flex mx-auto items-center justify-center text-xs rounded-full p-0.5 bg-orange">
                      {channel.users.length - 2}
                    </span>
                  )}
                  <div className="flex my-auto   ">
                    {channel.users.slice(0, 2).map((user) => (
                      <Image
                        key={user.username}
                        width={20}
                        height={20}
                        src={user.avatar}
                        alt={user.username}
                        className=" rounded-full h-fit my-auto  "
                      />
                    ))}
                  </div>
                </div>
                <div className=" flex flex-col">
                  <h1 className="  text-dark-300 my-auto text-sm font-semibold first-letter:uppercase dark:text-light-200">
                    {channel.name}
                  </h1>
                  {/* <div className=" flex">
                    {channel.users.slice(0, 3).map((user) => (
                      <p key={user.id} className=" text text-[10px] ">
                        {user.username} ,
                      </p>
                    ))}
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
