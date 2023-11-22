"use client";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/Navbar";
import RightSidebar from "@/components/shared/RightSidebar";
import ServersSidebar from "@/components/shared/ServersSidebar";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-light-200 dark:bg-[#13181E] flex min-h-screen justify-between">
      <ServersSidebar />
      <LeftSidebar />
      <div className=" p-5 w-full min-h-screen">{children}</div>
      <RightSidebar />
    </div>
  );
};

export default RootLayout;
