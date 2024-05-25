"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaPhoenixFramework } from "react-icons/fa";
import Link from "next/link";
import DialogDemo from "../newJobs/PostNewDialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex flex-row w-full flex-wrap justify-between bg-gradient-to-r from-purple-800 to-pink-800 fixed z-10">
      <div className="flex flex-row w-full justify-between px-4 md:px-10 my-4 items-center text-white font-bold ">
        {/* logo */}
        <Link href={"#"} className="flex flex-row gap-1 items-center">
          <p className="text-lg md:text-2xl font-bold">HireUp</p>
          <FaPhoenixFramework className="h-10 w-10" />
        </Link>

        {/* nav menu */}
        <ul className="hidden sm:flex flex-row gap-10">
          <Link href={"#"} className="hover:cursor-pointer hover:text-black">
            Home
          </Link>
          <Link href={"#"} className="hover:cursor-pointer hover:text-black">
            Explore Opportunities
          </Link>
          <DialogDemo />
        </ul>

        {/* profile */}
        <div className="flex flex-row gap-4 ">
          <Button
            variant={"outline"}
            className="bg-transparent"
            onClick={() => router.push("/signin")}
          >
            Login
          </Button>
          {/* <Button
            size={"sm"}
            variant={"outline"}
            className="bg-transparent"
            onClick={() => router.push("/signup")}
          >
            Signup
          </Button> */}
          {/* <Avatar className="hover:cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
    </div>
  );
}
