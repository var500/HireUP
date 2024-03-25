import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-row w-full flex-wrap bg-gradient-to-r from-purple-800 to-pink-800 p-10 justify-between gap-4">
      <div className="h-[200px] w-[300px] border-2 p-2">Box 1</div>
      <div className="h-[200px] w-[300px] border-2 p-2">Box 2</div>
      <div className="h-[200px] w-[300px] border-2 p-2">Box 3</div>
      <div className="h-[200px] w-[300px] border-2 p-2">Box 4</div>
    </div>
  );
}
