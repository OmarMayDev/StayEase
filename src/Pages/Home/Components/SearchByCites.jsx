import React from "react";

import { useApiContext } from "../../../context/ApiContext";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";

const SearchByCites = () => {
  const { setclickedCity, cardApi, setcitiesApi } = useApiContext();
  //delcare useNavigate
  const navigate = useNavigate();

  //handle card click
  const handleCardClick = (card) => {
    setclickedCity(card);
    setcitiesApi((prevState) => ({
      ...prevState,
      [card]: true, // Dynamically set the city to true
    }));
    navigate("/AllHotels");
  };
  return (
    <div className="flex flex-col gap-[20px] pl-[10px] pr-[10px]  mt-[140px] items-center ">
      <div className="flex flex-col gap-[30px] text-center max-w-[800px]  transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
        <h2 className="text-[30px] md:text-[40px] lg:text-[48px]">
          SEARCH BY CITES
        </h2>
        <p className="text-[18px] font-sans font-[500]">
          Discover What You Need Effortlessly Browse Our Diverse Cites to Find
          Exactly What You’re Looking For!
        </p>
      </div>
      {/* clickable cards  */}
      <div className="flex flex-col gap-[10px] lg:gap-[20px] lg:p-[40px] max-w-[1200px]  w-full  pt-[20px]  sm:grid sm:grid-cols-2 lg:grid-cols-5">
        {cardApi.map((card) => {
          const { ref, inView } = useInView({
            threshold: 0.3, // Trigger when 20% of the element is visible
            triggerOnce: true, // Only trigger animation once
          });
          return (
            <div
              key={card.id}
              className="group"
              onClick={() => handleCardClick(card.city)}
            >
              <div
                ref={ref}
                className={`relative w-full min-w-[290px] h-[154px] lg:w-[193px] lg:min-w-0 flex flex-col gap-[30px] text-center justify-center items-center bg-white border border-gray-600/30 overflow-hidden transition-all cursor-pointer ${
                  inView
                    ? "opacity-100 translate-y-0 grow-animation"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Red Overlay */}
                <div className="absolute inset-0 bg-red-500 scale-0 origin-top-left transition-transform duration-1000 ease-in-out group-hover:scale-100 group-hover:opacity-100 opacity-0"></div>

                {/* Logo - Changes color on hover */}
                <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {card.logo && (
                    <card.logo
                      size={40}
                      className="group-hover:text-white text-gray-500"
                    />
                  )}
                </div>

                {/* Text - Changes color on hover */}
                <div className="relative z-10 text-[#808080] text-[20px] font-[700] font-sans transition-colors duration-300 group-hover:text-white">
                  {card.city}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchByCites;
