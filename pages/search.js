import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import Axios from "axios";
import InfoCard from "./InfoCard";
import Map from "../components/Map";

export default function Search({ searchResult }) {
  console.log("Search Result", searchResult);
  const router = useRouter();
  const { location, guests, startDate, endDate } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />
      <main className="flex flex-col lg:flex-row overflow-x-hidden">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} for {guests} numbers of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
          <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="space-y-4">
            {searchResult.map(item => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                long={item.long}
                lat={item.lat}
              />
            ))}
          </div>
        </section>
        <section className="min-w-[500px] h-[700px]  ">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await Axios.get("https://www.jsonkeeper.com/b/5NPS");

  return {
    props: {
      searchResult: data,
    },
  };
}
