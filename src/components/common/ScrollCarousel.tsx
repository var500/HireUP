"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        active: true,
      }}
      //   plugins={[
      //     Autoplay({
      //       delay: 4000,
      //     }),
      //   ]}
      className="w-full max-w-7xl"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3">
          <div className="flex flex-col h-full w-full justify-center rounded-md items-center border-2"></div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3 ">
          <div className="flex flex-col justify-center items-center rounded-md border-2">
            111
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-2/3 \">
          <div className="flex flex-col h-full w-full justify-center rounded-md items-center border-2">
            111
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
