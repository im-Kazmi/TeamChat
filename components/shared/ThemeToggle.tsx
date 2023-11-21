"use client";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import { Button } from "../ui/button";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";

interface IThemeContext {
  theme: string | undefined;
  handleThemeChange: () => void | undefined;
}
const ThemeToggle = () => {
  const { theme, handleThemeChange } = useThemeContext() as IThemeContext;
  return (
    <div>
      {theme === "light" ? (
        <Button
          onClick={handleThemeChange}
          className=" text-orange bg-light-200 rounded-md w-fit p-3 text-lg  dark:bg-dark-200"
        >
          <IoMdSunny />
        </Button>
      ) : (
        <Button
          onClick={handleThemeChange}
          className="   text-orange bg-light-200 rounded-md w-fit p-3 text-lg dark:bg-dark-200"
        >
          <FaMoon />
        </Button>
      )}
    </div>
  );
};

export default ThemeToggle;
