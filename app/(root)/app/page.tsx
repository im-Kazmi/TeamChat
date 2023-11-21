"use client";
import { fakeUsers } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";

const Page = () => {
  return (
    <div className=" flex  flex-col w-full h-full  justify-between ">
      <div className="flex justify-between w-full border-b border-b-light-500 dark:border-b-dark-200 px-5 py-3 ">
        <h1 className=" text-xl font-sans dark:text-light-200">Design Team</h1>
        <div className="users flex">
          {fakeUsers.map((user) => (
            <div key={user.id} className="">
              <Image
                src={user.avatar}
                width={25}
                height={25}
                alt={user.username}
                className=" rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* TODO:TO ADD MESSAGES */}
      <div>d</div>
      <div className=" w-full flex ">
        <div className=" flex w-full bg-light-300 rounded-sm py-4 px-5  dark:bg-dark-600">
          <span className=" text-dark-400 dark:text-light-200">
            <FaMicrophone />
          </span>
          <input
            type="text"
            placeholder="Type Something..."
            className=" w-full h-full bg-light-300 dark:bg-dark-600 outline-none dark:text-light-200 ml-4 "
          />
          <span className=" text-xl  cursor-pointer dark:text-light-200">
            <BiSolidImageAdd />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
