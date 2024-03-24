import React from "react";
import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import ExploreCard from "@/components/common/ExploreCard";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col gap-4 bg-gradient-to-r from-purple-800 to-pink-800">
        <Navbar />
        <div className="border-[1px] w-full border-gray-500" />

        <div className="h-[200px] flex flex-col  items-center justify-center">
          <p className="text-xl md:text-4xl font-bold text-white flex flex-wrap">
            One Place for all Professions
          </p>
          <p className="text-xs md:text-base font-bold text-white">
            Find a job that fits your skills or needs
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center md:flex-row px-2 py-10 justify-center gap-4 mx-auto">
        <ExploreCard
          heading="For Employees"
          content="Explore Opportunities that match your skills"
          buttonText="Find Jobs"
        />
        <ExploreCard
          heading="For Clients"
          content="Find young talents appropriate for the task"
          buttonText="Hire Talents"
        />
      </div>
    </div>
  );
}
