import Image from "next/image";
import React from "react";

export default function SmallCard({ item }) {
  return (
    <div
      className="flex flex-row items-center m-2 mt-5 
    space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-in-out"
    >
      <div className="relative w-16 h-16">
        <Image fill src={item.img} className="rounded-lg" />
      </div>

      <div>
        <h3>{item.location}</h3>
        <h3 className="text-gray-500">{item.distance}</h3>
      </div>
    </div>
  );
}
