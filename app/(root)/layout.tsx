"use client";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/Navbar";
import RightSidebar from "@/components/shared/RightSidebar";
import ServersSidebar from "@/components/shared/ServersSidebar";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" background_light200_dark_300 flex min-h-screen justify-between">
      <ServersSidebar />
      <LeftSidebar />
      <section className=" p-5">{children}</section>
      <RightSidebar />
    </div>
  );
};

export default RootLayout;
