import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="flex border-b cursor-pointer bg-white space-x-4 px-2 py-7 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t  pr-4 ">
      <div className="relative h-24 w-40 md:w-80 md:h-52 flex-shrink-0">
        <Image src={img} fill className="contain rounded-2xl" />
      </div>
      <div className="flex flex-1 flex-col">
        <h5 className="text-gray-400 text-sm mb-[6px]">{location}</h5>
        <h4 className="text-lg mb-3">{title}</h4>
        <p className="flex-1 text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-end">
          <div className="flex items-center space-x-1">
            <AiFillStar className="text-red-400" /> <h6>{star}</h6>
          </div>
          <div className="text-right">
            <h5 className="text-lg font-semibold">{price}</h5>
            <h6 className="text-sm text-gray-400">{total}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
