import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https:links.papareact.com/0fm" fill objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className=" text-center text-sm sm:text-lg">
          Don't know where to go?
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 rounded-full my-3 
        shadow-md font-bold hover:shadow-xl active:scale-90 transition duration-1500"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}
