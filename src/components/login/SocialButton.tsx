"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function SocialButton({ socialType }: { socialType: string }) {
  const router = useRouter();
  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => router.push("/api/auth/signin")}
        className={
          socialType === "google"
            ? ""
            : `w-full bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-200`
        }
      >
        <div className="flex flex-row justify-center items-center gap-2 ">
          {socialType === "google" ? <FaGoogle /> : <FaFacebook />}
          <p>{socialType}</p>
        </div>
      </Button>
    </>
  );
}
