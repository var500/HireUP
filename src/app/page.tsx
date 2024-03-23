"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Eye, Facebook, EyeOff } from "lucide-react";
import Image from "next/image";
import Google from "@/assets/logos/google.png";
import { useState } from "react";

export default function Home() {
  const [visible, setvisible] = useState(false);
  const handleVisible = () => {
    setvisible(() => !visible);
    console.log(visible);
  };
  return (
    <main className="flex w-full h-screen">
      <div className="flex flex-col flex-wrap md:flex-row mx-auto justify-center items-center w-full ">
        <div className="hidden md:block h-[500px] w-full md:w-[40%]">1</div>
        <div className="h-[500px] w-full min-w-[300px] md:w-[25%] flex flex-col p-4 md:p-10 justify-between">
          <p className="text-xl md:text-3xl font-bold">Sign In</p>
          <div className="flex flex-col gap-4 w-full">
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative flex flex-row w-full items-center">
                <Input
                  type={`${visible ? "text" : "password"}`}
                  id="password"
                  placeholder="Password"
                />
                <div
                  className={`absolute right-2 ${
                    visible
                      ? "text-red-600 hover:text-red-700"
                      : "text-gray-600 hover:text-black"
                  } hover:cursor-pointer 
                  `}
                  onClick={handleVisible}
                >
                  {visible ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>
          </div>

          <Button variant={"default"}>
            <div className="relative w-full">
              <p>Continue</p>
              <ArrowRight className="absolute right-0 top-0" />
            </div>
          </Button>

          <div className="flex flex-row w-full gap-2 items-center justify-center">
            <div className="border-2 w-[20%] h-0" />
            <p className="text-xs">Or Sign In using</p>
            <div className="border-2 w-[20%] h-0" />
          </div>

          <Button variant={"outline"}>
            <div className="flex flex-row justify-center items-center gap-2 w-full">
              <Image src={Google} alt="Google" height={24} width={24} />
              <p>Google</p>
            </div>
          </Button>
          <Button
            variant={"destructive"}
            className="bg-blue-600 hover:bg-blue-800"
          >
            <div className="flex flex-row justify-center items-center gap-2 w-full">
              <Facebook />
              <p>Facebook</p>
            </div>
          </Button>
        </div>
      </div>
    </main>
  );
}
