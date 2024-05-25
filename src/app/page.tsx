import React from "react";
import ExploreCard from "@/components/common/ExploreCard";
import Navbar from "@/components/common/Navbar";
import workers from "@/assets/workers.png";
import rocket from "@/assets/rocket.png";

import {
  MdHealthAndSafety,
  MdOutlineStars,
  MdOutlineVerified,
} from "react-icons/md";
import Image from "next/image";
import InfoCard from "@/components/common/InfoCard";
import FeaturesPoints from "@/components/common/FeaturesPoints";
import { FaAward } from "react-icons/fa";
import FeatureCard from "@/components/common/FeatureCard";
import { CarouselSize } from "@/components/common/ScrollCarousel";
export default function HomePage() {
  return (
    <div>
      <div className="relative h-[200px] md:h-fit flex flex-col items-center justify-center mt-10 sm:mt-16">
        <video autoPlay loop muted className="w-screen opacity-40">
          <source src="home.mp4"></source>
        </video>
        <div className="absolute flex flex-col gap-2 md:gap-4 items-center z-[2] ">
          <p className="text-base md:text-5xl font-bold flex ">
            Empowering{" "}
            <span className="ml-4 text-purple-600">Independence</span>
          </p>
          <p className="text-base md:text-5xl font-bold flex flex-wrap mr-2">
            Connecting <span className="ml-4 text-pink-600">Talents</span>
          </p>
          <p className="text-xs md:text-lg font-semibold ">
            Find a job that fits your skills or needs
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center md:flex-row px-2 py-4 md:py-10 justify-center gap-10 mx-auto">
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

      <FeatureCard />
    </div>
  );
}
