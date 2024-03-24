"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

export default function SignUpForm() {
  const [visible, setvisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retype, setRetype] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  function isLengthValid(password: string) {
    return password.length >= 8;
  }

  function hasUppercase(password: string) {
    return /[A-Z]/.test(password);
  }

  function hasSpecialCharacter(password: string) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }

  useEffect(() => {
    if (password !== retype) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, retype]);

  return (
    <div className="h-[550px] min-w-[300px] md:w-[25%] flex flex-col p-6 justify-between rounded-lg shadow-md border-2  z-[2] bg-white">
      <div className="flex flex-col gap-2">
        <p className="text-3xl md:text-4xl font-bold">Sign Up</p>
        <p className="text-[10px] md:text-[12px] font-semibold">
          Already have an account?
          <Link
            className="ml-2 font-semibold text-blue-500 hover:text-blue-600"
            href={"/"}
          >
            Log In
          </Link>
        </p>
        <p className="text-sm font-semibold">
          Create an Account to get started!
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Input
          type="text"
          id="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          id="re-type"
          value={retype}
          placeholder="Confirm Password"
          onChange={(e) => setRetype(e.target.value)}
        />
        {passwordError ? (
          <div className="mt-2 text-red-600 font-normal text-sm">
            Passwords do not Match
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 w-full ">
        <div className="flex flex-row gap-4 w-full items-center">
          <FaCheckCircle color={`${isLengthValid(password) ? "green" : ""}`} />
          <p className="text-sm">Minimum length of 8 characters</p>
        </div>
        <div className="flex flex-row gap-4 w-full items-center">
          <FaCheckCircle color={`${hasUppercase(password) ? "green" : ""}`} />
          <p className="text-sm">Contain atleast 1 uppercase character</p>
        </div>
        <div className="flex flex-row gap-4 w-full items-center">
          <FaCheckCircle
            color={`${hasSpecialCharacter(password) ? "green" : ""}`}
          />
          <p className="text-sm">Contain atleast 1 special character</p>
        </div>
      </div>

      <Button
        variant={"outline"}
        className="bg-gradient-to-r from-pink-800 to-pink-600"
      >
        <div className="w-full">
          <p className="text-white">Log In</p>
        </div>
      </Button>
    </div>
  );
}
