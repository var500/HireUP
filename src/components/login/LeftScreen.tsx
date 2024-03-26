import React from "react";

export default function LeftScreen() {
  return (
    <div className="hidden lg:flex h-[500px] min-w-[300px] md:w-[40%] p-6">
      <div className="flex relative flex-col z-[2] text-white gap-4 h-full justify-center">
        <p className="text-4xl lg:text-6xl 2xl:text-[80px] font-bold">
          Empowering
        </p>
        <p className="text-4xl lg:text-6xl 2xl:text-[80px] font-bold">
          Connections
        </p>
        <p className="text-4xl lg:text-6xl 2xl:text-[80px] font-bold">
          Everywhere
        </p>
      </div>
    </div>
  );
}
