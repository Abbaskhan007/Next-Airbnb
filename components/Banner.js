import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        priority
        src="https://res.cloudinary.com/dlxyvl6sb/image/upload/v1667176310/samples/57b9f708-bb12-498c-bc33-769f8fc43e63_jhmq1h.jpg"
        fill
        objectFit="cover"
      />
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
