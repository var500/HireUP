import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  visible,
  onVisibilityChange,
}: {
  visible: boolean;
  onVisibilityChange: () => void;
}) {
  const [password, setPassword] = useState("");
  return (
    <div className="relative flex flex-row w-full items-center">
      <Input
        type={`${visible ? "text" : "password"}`}
        id="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        className={`absolute right-2 ${
          visible
            ? "text-red-600 hover:text-red-700"
            : "text-gray-600 hover:text-black"
        } hover:cursor-pointer 
                  `}
        onClick={onVisibilityChange}
      >
        {visible ? <EyeOff size={20} /> : <Eye size={20} />}
      </div>
    </div>
  );
}
