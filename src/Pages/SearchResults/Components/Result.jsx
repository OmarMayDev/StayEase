import React from "react";
import { useApiContext } from "../../../context/ApiContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const Result = () => {
  const { searchData, cardApiFinal, setDetails } = useApiContext();

  const [activeCity, setAcitveCity] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const currentCity = cardApiFinal.find(
      (card) =>
        card.city.toLowerCase().trim() === searchData.toLowerCase().trim()
    );

    setAcitveCity(currentCity);

    cardApiFinal.map((card) => {
      card.hotels.map((hotel) => {
        if (hotel.name.toLowerCase() === searchData.toLowerCase()) {
          setDetails(hotel);
          navigate("/HotelDetails");
        }
      });
    });

    //take to hotel detials
    //take to city  //already displaying words so just gotta display pictures
  }, [searchData]);

  const handleView = (hotel) => {
    setDetails(hotel);
    navigate("/HotelDetails");
  };

  return (
    <>
      {activeCity ? (
        <div className="flex flex-col gap-[20px] pl-[10px] pr-[10px] pt-[30px]  md:grid md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] m-auto">
          {activeCity.hotels.map((hotel) => {
            return (
              <div
                key={hotel.id}
                className={`bg-white flex flex-col h-[428px] min-w-[290px]   rounded-[10px] `}
              >
                <img
                  src={hotel.image}
                  className="min-w-[290px] min-h-[245px] rounded-[10px]  "
                />
                <div className="flex flex-col items-center justify-center p-[20px] gap-[20px]">
                  <div className="font-sans font-[500] hover:text-[##dd3842]">
                    {hotel.name}
                  </div>
                  <div className="text-[20px] font-[700] text-[#dd3842] font-sans">
                    {hotel.price}
                  </div>
                  <button
                    onClick={() => handleView(hotel)}
                    className="w-[150px] h-[46px] font-sans outline outline-gray-500/70 rounded-[5px] bg-white transition-colors duration-300 ease-in-out hover:bg-[#dd3842] hover:text-white hover:outline-none hover:cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="font-sans text-[30px] pt-[40px] p-[20px]  text-center max-w-[1300px] m-auto">
          <span className="text-red-600">No cites to display!</span> StayEase
          only has hotels in Barcelona, Seattle, Kathmandu, Florence, Singapore,
          Vienna, Cambridge, Cape Town, Portland, and Houston.
        </div>
      )}
    </>
  );
};

export default Result;
