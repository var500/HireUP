"use client";

import LoginAbstract from "@/assets/login.jpg";
import Image from "next/image";
import LeftScreen from "@/components/login/LeftScreen";
import SignInForm from "@/components/login/SignInForm";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-center items-center w-full h-screen p-2">
      <Image
        src={LoginAbstract}
        alt="Login"
        className="absolute left-0 top-0 h-full w-full object-cover opacity-90"
      />
      <LeftScreen />
      <SignInForm />
    </main>
  );
}
