"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import SocialButton from "./SocialButton";
import PasswordInput from "./PasswordInput";
import { useSession } from "next-auth/react";

export default function SignInForm() {
  const [visible, setvisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();

  return (
    <div className="h-[500px] min-w-[300px] md:w-[25%] flex flex-col p-6 justify-between rounded-lg shadow-md border-2  z-[2] bg-white">
      <div className="flex flex-col gap-2">
        <p className="text-3xl md:text-4xl font-bold">Sign In</p>
        <p className="text-[10px] md:text-[12px] font-semibold">
          Don&#39;t have an account?
          <Link
            className="ml-2 font-semibold text-blue-500 hover:text-blue-600"
            href={"/signup"}
          >
            Sign Up
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          visible={visible}
          onVisibilityChange={() => {
            setvisible(() => !visible);
          }}
        />
      </div>

      <Button variant={"default"}>
        <div className="w-full">
          <p className="text-white">Log In</p>
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
