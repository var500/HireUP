import React from "react";
import { Button } from "../ui/button";
import { GrUserWorker } from "react-icons/gr";

export default function ExploreCard({
  heading,
  content,
  buttonText,
}: {
  heading: string;
  content: string;
  buttonText: string;
}) {
  return (
    <div className="flex flex-col justify-between max-w-[600px] w-full min-h-[150px] border-2 rounded-lg shadow-lg p-4">
      <div className="flex flex-col gap-1">
        <p className="text-xl md:text-3xl font-bold">{heading}</p>
        <p className="text-base font-normal">{content}</p>
      </div>
      <div>
        <Button size={"sm"} variant={"default"}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
