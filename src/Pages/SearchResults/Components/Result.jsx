import React from "react";
import { useApiContext } from "../../../context/ApiContext";
import { useState, useEffect } from "react";
const Result = () => {
  const { searchData, cardApiFinal } = useApiContext();

  const [activeCity, setAcitveCity] = useState(null);

  useEffect(() => {
    const currentCity = cardApiFinal.find(
      (card) =>
        card.city.toLowerCase().trim() === searchData.toLowerCase().trim()
    );
    setAcitveCity(currentCity);
  }, [searchData]);

  return (
    <>
      {activeCity ? (
        <div className="flex flex-col gap-[20px] pl-[10px] pr-[10px] pt-[30px]  md:grid md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] m-auto">
          {activeCity.hotels.map((hotel) => {
            return (
              <div
                key={hotel.id}
                className="min-w-[290px] min-h-[140px]  border border-gray-500/50 rounded-[5px] bg-white flex flex-col p-[20px] gap-[20px]"
              >
                <h1 className="font-sans font-[700] text-[20px]">
                  {hotel.name}
                </h1>
                <p className="font-sans text-[#333333] ">{hotel.description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="font-sans text-[30px] pt-[40px]  text-center max-w-[1300px] m-auto">
          <span className="text-red-600">No cites to display!</span> StayEase
          only has hotels in Barcelona, Seattle, Kathmandu, Florence, Singapore,
          Vienna, Cambridge, Cape Town, Portland, and Houston.
        </div>
      )}
    </>
  );
};

export default Result;
