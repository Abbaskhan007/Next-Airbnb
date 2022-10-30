import Image from "next/image";
import React from "react";

export default function MediumCard({ item }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={item.img} fill className="rounded-md" />
      </div>
      <h3 className="text-2xl mt-3">{item.title}</h3>
    </div>
  );
}
