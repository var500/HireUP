"use client";
import { AddressCard } from "@/components/newJobs/AddressCard";
import { PostJobCard } from "@/components/newJobs/PostJobCard";
import { CarouselDemo } from "@/components/newJobs/SingleCarousel";
import React, { useEffect, useState } from "react";

export default function PostJob() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    console.log("clicked");
    console.log(currentIndex);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <CarouselDemo />
      {/* {currentIndex === 0 ? (
        <PostJobCard onButtonClick={handleNext} />
      ) : (
        <AddressCard onButtonClick={handleNext} />
      )} */}
    </div>
  );
}
