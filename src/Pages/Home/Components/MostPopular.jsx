import React from "react";
import { useApiContext } from "../../../context/ApiContext";

import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";

const MostPopular = () => {
  //delcare useNavigate
  const navigate = useNavigate();
  const { cardApiFinal, setDetails } = useApiContext();

  //slice for most popular
  const popularSlice = cardApiFinal.slice(9, 10);

  const handleView = (hotel) => {
    setDetails(hotel);
    navigate("/HotelDetails");
  };

  return (
    <div className="flex flex-col gap-[20px] mt-[80px] p-[10px] max-w-[1200px] mb-[80px]  m-auto">
      <div className="flex flex-col gap-[30px] items-center p-[20px]">
        <h1 className="text-[30px] md:text-[40px]">Most Popular Hotels</h1>
        <p className="font-sans font-[500] text-center md:text-[18px]">
          Explore the hottest hotels and discover your perfect stay with
          top-rated amenities and unbeatable locations.
        </p>
      </div>
      <div className="flex flex-col gap-[30px] lg:grid lg:grid-cols-3 lg:gap-[20px] ">
        {popularSlice?.map((city) => {
          return city.hotels.map((hotel) => {
            const { ref, inView } = useInView({
              threshold: 0.3, // Trigger when 20% of the element is visible
              triggerOnce: true, // Only trigger animation once
            });
            return (
              <div
                ref={ref}
                key={hotel.id}
                className={`bg-white  min-h-[428px] min-w-[290px]   rounded-[10px] ${
                  inView
                    ? "opacity-100 translate-y-0 grow-animation"
                    : "opacity-0 translate-y-10"
                }`}
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
          });
        })}
      </div>
    </div>
  );
};

export default MostPopular;
