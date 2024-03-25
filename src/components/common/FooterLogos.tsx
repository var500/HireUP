import React from "react";
import { IconType } from "react-icons/lib";

export default function FooterLogos({ icon: Icon }: { icon: IconType }) {
  return (
    <div className="border-2 rounded-full p-1  text-white hover:bg-white hover:cursor-pointer hover:text-black">
      <Icon size={20} />
    </div>
  );
}
