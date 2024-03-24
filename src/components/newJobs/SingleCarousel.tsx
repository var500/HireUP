import * as React from "react";
import { AddressCard } from "@/components/newJobs/AddressCard";
import { PostJobCard } from "@/components/newJobs/PostJobCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <Carousel className="w-full max-w-lg">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <PostJobCard />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <AddressCard />
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
