import React, { useState } from "react";
import MapBox, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";
export default function Map({ searchResult }) {
  const [location, setLocation] = useState({});
  const coordinates = searchResult.map(item => {
    return { longitude: item.long, latitude: item.lat };
  });

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    latitude: center.latitude,
    longitude: center.longitude,
  });

  return (
    <MapBox
      initialViewState={viewport}
      mapStyle="mapbox://styles/abi756/cl9vvtx3o005j14o4z6681he4"
      mapboxAccessToken={process.env.mapbox_key}
      onViewportChange={nextViewPort => setViewport(nextViewPort)}
    >
      {searchResult.map(item => (
        <div key={item.long}>
          <Marker
            latitude={item.lat}
            longitude={item.long}
            offsetTop={-10}
            offsetLeft={-20}
            onClick={() => setLocation(item)}
          >
            <img
              className="w-6 h-6 cursor-pointer animate-bounce"
              alt="marker"
              src="https://icons.veryicon.com/512/System/Small%20%26%20Flat/map%20marker.png"
            />
          </Marker>
          {location.long && (
            <Popup
              onClose={() => setLocation({})}
              closeOnClick={false}
              latitude={location.lat}
              longitude={location.long}
            >
              <div className="flex items-center space-x-2 ">
                <div className="relative w-24 h-16 ">
                  <Image className="rounded-md" fill src={location.img} />
                </div>
                <div className="">
                  <h4 className="text-xs ">{location.location}</h4>
                  <div className="flex mt-2 items-center justify-between text-gray-500">
                    <span>{location.price}</span>
                    <span>{location.star}</span>
                  </div>
                </div>
              </div>
            </Popup>
          )}
        </div>
      ))}
    </MapBox>
  );
}
