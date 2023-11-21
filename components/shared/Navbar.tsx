import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between  h-14 bg-none  items-center">
      <div className="">
        <h1 className={`" text-xl text_light100_dark300`}>TeamChat</h1>
      </div>
      <div className=" flex gap-5 text_light100_dark300 max-sm:hidden">
        <Link href={"/"}>Product</Link>
        <Link href={"/"}>Pricing</Link>
        <Link href={"/"}>Download</Link>
      </div>
      <div className=" hidden max-sm:flex">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
