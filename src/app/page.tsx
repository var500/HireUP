import React from "react";
import ExploreCard from "@/components/common/ExploreCard";
import Navbar from "@/components/common/Navbar";
import workers from "@/assets/workers.png";
import rocket from "@/assets/rocket.png";
import standing from "@/assets/standing.png";
import {
  MdHealthAndSafety,
  MdOutlineStars,
  MdOutlineVerified,
} from "react-icons/md";
import Image from "next/image";
import InfoCard from "@/components/common/InfoCard";
import FeaturesPoints from "@/components/common/FeaturesPoints";
import { FaAward } from "react-icons/fa";
export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col gap-4 bg-gradient-to-r from-purple-800 to-pink-800">
        <Navbar />
        <div className="border-[1px] w-full border-gray-500" />
      </div>

      <div className="relative h-screen flex flex-col items-center justify-center mt-20 ">
        <video
          autoPlay
          loop
          muted
          className="absolute w-screen opacity-40 top-0 left-0"
        >
          <source src="home.mp4"></source>
        </video>
        <div className="flex flex-col gap-4 items-center z-[2] ">
          <p className="text-xl md:text-6xl font-bold flex ">
            Empowering{" "}
            <span className="ml-4 text-purple-600">Independence</span>
          </p>
          <p className="text-xl md:text-6xl font-bold flex flex-wrap mr-2">
            Connecting <span className="ml-4 text-pink-600">Talents</span>
          </p>
          <p className="text-xs md:text-lg font-semibold ">
            Find a job that fits your skills or needs
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center md:flex-row px-2 py-10 justify-center gap-10 mx-auto">
        <ExploreCard
          image={workers}
          color="cherry"
          heading="For Employees"
          content="Explore Opportunities that match your skills"
          buttonText="Find Jobs"
        />
        <ExploreCard
          image={rocket}
          color="blue"
          heading="For Clients"
          content="Find young talents appropriate for the task"
          buttonText="Hire Talents"
        />
      </div>

      <InfoCard />
      <div className="relative flex flex-col h-screen w-full justify-center px-24 py-12">
        <Image
          src={standing}
          alt="standing"
          className="absolute left-[50%] bottom-0 "
        />
        <div className="grid grid-cols-3 gap-10 h-full w-full ">
          <div className=" p-10 col-span-2 h-full rounded-md bg-[#e5e0e6] ">
            <div className="w-[70%] h-full justify-between flex flex-col">
              <p className="text-5xl font-bold leading-[80px]">
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

          <div className="flex flex-col p-10 justify-end h-full rounded-md bg-[#bc3660]">
            <div className="flex flex-col gap-10 text-white ml-6">
              <p className="text-4xl font-semibold">
                We&apos;re the world&apos;s work marketplace
              </p>
              <div className="flex flex-row gap-4 ml-6">
                <div>{<MdHealthAndSafety size={30} />}</div>
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-semibold">4.9/5</p>
                  <p className="text-sm font-normal">
                    Clients rate professions on HireUp
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 ml-6">
                <div>{<FaAward size={30} />}</div>
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-semibold">Award Winner</p>
                  <p className="text-sm font-normal">
                    2023 Best Software Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
