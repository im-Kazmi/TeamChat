"use client";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/Navbar";
import ServersSidebar from "@/components/shared/ServersSidebar";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { handleThemeChange } = useThemeContext();
  return (
    <div className=" background_light200_dark_300 flex min-h-screen">
      <ServersSidebar />
      <LeftSidebar />
      <span
        onClick={handleThemeChange}
        className=" text-xl bg-status-idle w-fit h-fit cursor-pointer rounded-full p-2"
      >
        a
      </span>
      <section>{children}</section>
    </div>
  );
};

export default RootLayout;
