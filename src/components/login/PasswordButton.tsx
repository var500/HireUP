import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordButton({
  visible,
  onChange,
}: {
  visible: boolean;
  onChange: () => void;
}) {
  return (
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
          onClick={onChange}
        >
          {visible ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>
    </div>
  );
}
