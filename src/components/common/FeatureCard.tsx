import React from "react";
import { FaAward } from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdOutlineStars,
  MdOutlineVerified,
} from "react-icons/md";
import FeaturesPoints from "./FeaturesPoints";
import Image from "next/image";
import standing from "@/assets/standing.png";

export default function FeatureCard() {
  return (
    <div className="relative flex flex-col h-fit md:h-screen w-full justify-center px-2 md:px-24 py-12">
      <Image
        src={standing}
        alt="standing"
        className="absolute hidden md:flex md:left-[50%] bottom-0 "
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-full w-full ">
        <div className="w-full p-2 md:p-10 col-span-1 md:col-span-2 h-full rounded-md bg-[#e5e0e6] ">
          <div className="w-full md:w-[70%] h-full justify-between flex flex-col gap-6 md:gap-0">
            <p className="text-2xl md:text-5xl font-bold md:leading-[80px]">
              Why professionals choose HireUP ?
            </p>
            <FeaturesPoints
              logo={MdOutlineStars}
              contentTop="Proof of quality"
              contentBottom="Check any pro’s work samples, client reviews, and identity verification."
            />
            <FeaturesPoints
              logo={MdOutlineVerified}
              contentTop="Verified Users"
              contentBottom="Interview potential fits for your job, verified by us."
            />
            <FeaturesPoints
              logo={MdHealthAndSafety}
              contentTop="Safe and secure"
              contentBottom="Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it."
            />
          </div>
        </div>

        <div className="flex flex-col col-span-1 p-4 md:p-10 justify-end h-full rounded-md bg-[#bc3660]">
          <div className="flex flex-col gap-2 md:gap-10 text-white md:ml-6">
            <p className="text-lg md:text-4xl font-semibold">
              We&apos;re the world&apos;s work marketplace
            </p>
            <div className="flex flex-row gap-4 md:ml-6">
              <div>{<MdHealthAndSafety size={30} />}</div>
              <div className="flex flex-col gap-2">
                <p className="text-lg md:text-3xl font-semibold">4.9/5</p>
                <p className="text-xs md:text-sm font-normal">
                  Clients rate professions on HireUp
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 md:ml-6">
              <div>{<FaAward size={30} />}</div>
              <div className="flex flex-col gap-2">
                <p className="text-lg md:text-3xl font-semibold">
                  Award Winner
                </p>
                <p className="text-xs md:text-sm font-normal">
                  2023 Best Software Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
