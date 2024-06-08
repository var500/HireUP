"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaPhoenixFramework } from "react-icons/fa";
import Link from "next/link";
import PostJobDialog from "../newJobs/PostNewDialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        isScrolled
          ? "fixed p-2 md:p-4 duration-200"
          : "relative p-6 md:p-10 duration-200"
      } flex flex-1 w-full flex-wrap justify-between bg-gradient-to-r from-purple-800 to-pink-800 z-10 items-center text-white font-bold`}
    >
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
        <PostJobDialog />
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
  );
}
