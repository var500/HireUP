import React from "react";
import Image from "next/image";
import relax from "@/assets/relax.jpg";
export default function InfoCard() {
  return (
    <div className="flex flex-col h-screen w-full justify-center px-10 md:px-24 py-12">
      <div className="relative flex flex-col justify-between h-full w-full ">
        <Image
          src={relax}
          alt="door"
          className="absolute object-cover h-full w-full top-0 left-0 rounded-md z-[1]"
        />
        <div className="absolute h-full w-full top-0 left-0 rounded-md bg-black opacity-70 z-[2]" />
        <div className="flex flex-col h-full p-14 w-full z-[3] justify-center text-white gap-4">
          <p className="text-7xl font-bold max-w-[600px]">
            Find talent your way
          </p>
          <p className="max-w-[500px]">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
        </div>
      </div>
    </div>
  );
}
