import React from "react";
import { Button } from "../ui/button";
import { GrUserWorker } from "react-icons/gr";
import Image, { StaticImageData } from "next/image";

export default function ExploreCard({
  heading,
  content,
  buttonText,
  color,
  image,
}: {
  heading: string;
  content: string;
  color: string;
  buttonText: string;
  image: StaticImageData;
}) {
  return (
    <div
      className={`flex flex-col justify-between w-[400px] h-[550px]  rounded-lg shadow-lg p-4 hover:cursor-pointer hover:scale-105 transition ${
        color == "blue" ? "gradient-blue" : "gradient-cherry"
      }`}
    >
      <div
        className={`flex flex-col gap-1 text-center mt-4 ${
          color === "blue" ? "text-[#333A73]" : "text-[#5E1675]"
        }`}
      >
        <p className={`text-xl md:text-3xl font-extrabold `}>{heading}</p>
        <p className="text-base font-normal">{content}</p>
      </div>

      <Image
        src={image}
        alt="workers"
        className="h-[300px] w-full object-contain"
      />

      <div className="w-full">
        <Button
          size={"sm"}
          variant={"outline"}
          className="w-full shadow-md font-bold"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
