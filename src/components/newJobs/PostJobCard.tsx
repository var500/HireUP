"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function PostJobCard() {
  const router = useRouter();
  const [salary, setSalary] = useState(0);
  const [sliderValue, setSliderValue] = useState<number[]>();
  const handleInputChange = (e: any) => {
    const inputValue = parseInt(e.target.value);
    setSalary(inputValue);
    setSliderValue([inputValue]);
  };

  const handleSliderChange = (values: number[]) => {
    setSliderValue(values);
    setSalary(values[0]);
  };
  return (
    <div className="grid w-full items-center gap-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-left">
          Job Title
        </Label>
        <Input id="name" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-left">
          Description
        </Label>
        <Textarea id="username" className="col-span-3" />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-left col-span-3">
          Salary Range
        </Label>
        <Input
          id="salary"
          className="col-span-1 text-right"
          placeholder="INR"
          value={salary || 0}
          onChange={handleInputChange}
        />
      </div>
      <Slider
        defaultValue={[0]}
        max={50000}
        step={1}
        value={sliderValue}
        onValueChange={handleSliderChange}
      />
    </div>
  );
}
