import React from "react";
import { useNavigate } from "react-router";
import { useApiContext } from "../../../context/ApiContext";

import buildingsbg from "../../../Pictures/buildingsbg.webp";
import { GoSearch } from "react-icons/go";

const HeroSection = () => {
  const { searchData, setSearchData } = useApiContext();

  //handle serachSubmit
  const searchSubmit = (e) => {
    e.preventDefault();
    if (!searchData) {
      return;
    } else {
      navigate("/SearchResults");
    }
  };

  //delcare useNavigate
  const navigate = useNavigate();
  return (
    <div
      className=" flex justify-center items-center bg-cover bg-center min-h-[585px]"
      style={{ backgroundImage: `url(${buildingsbg})` }}
    >
      {/* text */}
      <div className=" flex justify-center items-center   text-white bg-black/50  w-full min-h-[585px]  ">
        <div className="flex flex-col items-center  text-center gap-[30px] p-[10px] transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
          <h1 className="text-[40px] sm:text-[60px]  ">
            Find Your Perfect Stay—Quick, Easy, and Hassle-Free!
          </h1>
          <p className="text-[18px] font-[500] font-serif">
            Unlock a world of possibilities. Find the perfect hotel with ease.
            All your travel stays in one place. Experience seamless hotel search
            today!
          </p>
          {/* searchBar */}
          {/* make sure to add search funcinallity */}
          <div className="bg-white rounded-[20px] w-[260px] md:w-[620px]">
            <form
              className="flex  p-[5px] md:justify-between"
              onSubmit={searchSubmit}
            >
              <input
                type="text"
                onChange={(v) => setSearchData(v.target.value)}
                placeholder="What are you looking for?"
                className="placeholder-[#979eb2] placeholder:text-[14px] font-serif outline-hidden  pl-[20px] text-black md:w-[450px] "
              />
              <div
                className="bg-[#dd3842] rounded-[20px] w-[56px] h-[34px] md:w-[127px] md:h-[48px] flex items-center justify-center hover:cursor-pointer "
                onClick={searchSubmit}
              >
                <div className="flex items-center gap-[20px]">
                  <div className="font-sans font-[500] hidden md:block">
                    search
                  </div>
                  <GoSearch size={15} className="md:hidden" />
                  <GoSearch size={20} className="hidden md:block" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
