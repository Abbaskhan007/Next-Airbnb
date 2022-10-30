import Image from "next/image";
import React, { useState } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";

export default function Header() {
  return (
    <header className="stickty top-0 grid grid-cols-3 bg-white shadow-md px-5 py-4 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://res.cloudinary.com/dlxyvl6sb/image/upload/v1667000453/samples/1200px-Airbnb_Logo_B_C3_A9lo.svg_kzjx3w.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          width="80"
          height="40"
        />
      </div>
      <div className="flex items-center justify-between border-gray-200  md:border-2 rounded-full p-[6px] px-4 md:shadow-sm">
        <input type="text" placeholder="Start your Search" className="outline-none flex-1 mr-2" />
        <div className="bg-red-400 hidden md:inline-flex  rounded-full p-[6px] cursor-pointer">
          <BiSearch size={16} className="text-white" />
        </div>
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <BsGlobe cursor="pointer" size={24} />
        <div className="flex items-center border-2 border-gray-200 rounded-full p-2 space-x-2">
          <BiMenu size={24} cursor="pointer" />
          <IoPersonCircle cursor="pointer" size={24} />
        </div>
      </div>
    </header>
  );
}
