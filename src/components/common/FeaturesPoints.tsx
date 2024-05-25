import React from "react";
import { IconType } from "react-icons/lib";

export default function FeaturesPoints({
  logo: Logo,
  contentTop,
  contentBottom,
}: {
  logo: IconType;
  contentTop: string;
  contentBottom: string;
}) {
  return (
    <div className="flex flex-row gap-4">
      <div>{<Logo size={30} />}</div>
      <div className="flex flex-col gap-4">
        <p className="text-base md:text-xl font-semibold">{contentTop}</p>
        <p className="text-xs md:text-sm font-normal">{contentBottom}</p>
      </div>
    </div>
  );
}
