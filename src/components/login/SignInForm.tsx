"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import SocialButton from "./SocialButton";
import PasswordButton from "./PasswordButton";

export default function SignInForm() {
  const [visible, setvisible] = useState(false);
  const handleVisible = () => {
    setvisible(() => !visible);
    console.log(visible);
  };
  return (
    <div className="h-[500px] min-w-[300px] md:w-[25%] flex flex-col p-6 justify-between rounded-lg shadow-md border-2  z-[2] bg-white">
      <div className="flex flex-col gap-2">
        <p className="text-3xl md:text-4xl font-bold">Sign In</p>
        <p className="text-[10px] md:text-[12px] font-semibold">
          Don&#39;t have an account?
          <Link
            className="ml-2 font-semibold text-blue-500 hover:text-blue-600"
            href={"#"}
          >
            Sign Up
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <PasswordButton visible={visible} onChange={handleVisible} />
      </div>

      <Button
        variant={"outline"}
        className="bg-gradient-to-r from-pink-800 to-pink-600"
      >
        <div className="relative w-full">
          <p className="text-white">Continue</p>
          <ArrowRight className="absolute right-0 top-0 text-white" />
        </div>
      </Button>

      <div className="flex flex-row w-full gap-2 items-center justify-center">
        <div className="border-2 w-[20%] h-0" />
        <p className="text-xs">Or Sign In using</p>
        <div className="border-2 w-[20%] h-0" />
      </div>

      <SocialButton socialType="google" />
      <SocialButton socialType="facebook" />
    </div>
  );
}
