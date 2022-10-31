import Image from "next/image";
import React, { useState } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { HiUsers } from "react-icons/hi";
import { useRouter } from "next/router";
import Axios from "axios";

export default function Header({ placeholder = "Start your Search" }) {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchInput, setSearchInput] = useState("");
  const [guests, setGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetSearch = () => {
    setSearchInput("");
  };

  const onSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        guests,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
    });
  };

  return (
    <header className="stickty top-0 grid grid-cols-3 bg-white shadow-md px-5 py-4 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://res.cloudinary.com/dlxyvl6sb/image/upload/v1667000453/samples/1200px-Airbnb_Logo_B_C3_A9lo.svg_kzjx3w.png"
          layout="fill"
          alt="logo"
          objectPosition="left"
          width="80"
          height="40"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex items-center justify-between border-gray-200  md:border-2 rounded-full p-[6px] px-4 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none flex-1 mr-2"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex flex-row items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-1">Number of Guests</h2>
            <HiUsers />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={guests}
              onChange={e => setGuests(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <button onClick={resetSearch} className="text-gray-500 flex-1">
              Cancel
            </button>
            <button onClick={onSearch} className="text-red-400 flex-1">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
