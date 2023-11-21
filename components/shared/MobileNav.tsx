import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
} from "../ui/sheet";
import Link from "next/link";
const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" text_light100_dark300">
          <HiMenuAlt1 />
        </SheetTrigger>
        <SheetContent side={"left"} className=" w-64 ">
          {/* <SheetHeader>hi</SheetHeader> */}
          <SheetDescription>
            <div className=" flex gap-5 mt-5 text_light100_dark300 flex-col">
              <Link
                href={"/"}
                className=" px-3 py-2 rounded-md bg-gradient-to-r from-[#ffffff] dark:from-dark-100 ring-2 dark:ring-dark-100"
              >
                Product
              </Link>
              <Link
                href={"/"}
                className=" px-3 py-2 rounded-md bg-gradient-to-r from-[#ffffff] dark:from-dark-100 ring-2 ring-light-100 dark:ring-dark-100 "
              >
                Pricing
              </Link>
              <Link
                href={"/"}
                className=" px-3 py-2 rounded-md bg-gradient-to-r from-[#ffffff] dark:from-dark-100"
              >
                Download
              </Link>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
