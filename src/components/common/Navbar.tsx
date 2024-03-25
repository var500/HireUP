"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaPhoenixFramework } from "react-icons/fa";
import Link from "next/link";
import DialogDemo from "../newJobs/PostNewDialog";

export default function Navbar() {
  return (
    <div className="flex flex-row w-full flex-wrap justify-between bg-gradient-to-r from-purple-800 to-pink-800 shadow-lg">
      <div className="flex flex-row w-full justify-between px-1 md:px-10 mt-4  items-center max-w-[900px] mx-auto text-white font-bold ">
        {/* logo */}
        <Link href={"/home"}>
          <FaPhoenixFramework size={60} />
        </Link>

        {/* nav menu */}
        <ul className="hidden sm:flex flex-row gap-10">
          <Link
            href={"/home"}
            className="hover:cursor-pointer hover:text-black"
          >
            Home
          </Link>
          <Link
            href={"/job-search"}
            className="hover:cursor-pointer hover:text-black"
          >
            Explore Opportunities
          </Link>
          <DialogDemo />
        </ul>

        {/* profile */}
        <Avatar className="hover:cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
