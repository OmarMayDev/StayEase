import React from "react";
import { useApiContext } from "../../../context/ApiContext";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const FilterSideBar = () => {
  const [filterCheckRed, setFilterCheckRed] = useState(true);
  const [filterCheckBlack, setFilterCheckBlack] = useState(false);

  const { cardApiFinal, citiesApi, setcitiesApi, isAllChecked, setList, list } =
    useApiContext();

  const handleRedClick = () => {
    setFilterCheckRed(true);
    setFilterCheckBlack(false);

    const sortedList = list
      .slice()
      .sort((a, b) => a.id - b.id)
      .map((city) => ({
        ...city,
        hotels: city.hotels.slice().sort((a, b) => a.id - b.id),
      }));

    setList(sortedList);
  };

  //new
  const handleBlackClick = () => {
    setFilterCheckBlack(true);
    setFilterCheckRed(false);

    const sortedList = list
      .slice()
      .sort((a, b) => b.id - a.id)
      .map((city) => ({
        ...city,
        hotels: city.hotels.slice().sort((a, b) => b.id - a.id),
      }));

    setList(sortedList);
  };

  return (
    <div className="flex flex-col gap-[20px] min-w-[300px] xl:max-h-screen p-[15px] transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
      <div className="flex flex-col gap-[20px]">
        <div className="text-[30px]">SORT HOTELS BY</div>
        <div className="flex flex-col gap-[5px]">
          <form className="flex gap-[10px] items-center">
            <div
              className={`w-[18px]  h-[18px] rounded-[2px]  flex items-center justify-center hover:cursor-pointer ${
                filterCheckRed
                  ? "bg-[#dd3842] border-none"
                  : "bg-white border-2 border-gray-500"
              }`}
              onClick={handleRedClick}
            >
              {filterCheckRed ? <IoCheckmark color="white" /> : null}
              <input type="checkbox" name="redBox" className="hidden" />
            </div>
            <label
              htmlFor="redBox"
              className="bg-[#dd3842] rounded-[5px] p-[5px] text-white font-sans"
            >
              Newest to Oldest
            </label>
          </form>

          <form className="flex gap-[10px] items-center">
            <div
              className={`w-[18px]  h-[18px] rounded-[2px]  flex items-center justify-center hover:cursor-pointer ${
                filterCheckBlack
                  ? "bg-[#dd3842] border-none"
                  : "bg-white border-2 border-gray-500"
              }`}
              onClick={handleBlackClick}
            >
              {filterCheckBlack ? <IoCheckmark color="white" /> : null}
              <input type="checkbox" name="blackBox" className="hidden" />
            </div>
            <label
              htmlFor="blackBox"
              className="bg-black rounded-[5px] p-[5px] text-white font-sans"
            >
              Oldest to Newest
            </label>
          </form>
        </div>
      </div>
      {/* select city */}
      <div className="text-[30px]">SELECT CITY</div>
      <form className="bg-white flex flex-col gap-[20px] min-w-[290px]  p-[20px]">
        {/* ALL */}
        <div className="flex gap-[10px] items-center">
          <div
            className={`w-[18px]  h-[18px] rounded-[2px]  flex items-center justify-center hover:cursor-pointer ${
              isAllChecked
                ? "bg-[#dd3842] border-none"
                : "bg-white border-2 border-gray-500"
            }`}
            onClick={() => window.location.reload()}
          >
            {isAllChecked ? <IoCheckmark color="white" /> : null}
            <input type="checkbox" name="blackBox" className="hidden" />
          </div>
          <label
            htmlFor="blackBox"
            className="rounded-[5px] p-[5px] text-black font-sans"
          >
            All
          </label>
        </div>

        {cardApiFinal.map((ele, index) => {
          return (
            <div key={ele.id} className="flex justify-between items-center">
              {/* Custom Checkbox UI */}
              <div className="flex gap-[10px] items-center">
                <div
                  className={`w-[18px] h-[18px] rounded-[2px] flex items-center justify-center hover:cursor-pointer ${
                    citiesApi[ele.city]
                      ? "bg-[#dd3842] border-none"
                      : "bg-white border-2 border-gray-500"
                  }`}
                  onClick={() => {
                    setcitiesApi((prev) => ({
                      ...prev,
                      [ele.city]: !prev[ele.city],
                    }));
                  }}
                >
                  {citiesApi[ele.city] ? <IoCheckmark color="white" /> : null}
                  <input
                    type="checkbox"
                    id={ele.city}
                    name={ele.city}
                    onChange={() =>
                      setcitiesApi((prev) => ({
                        ...prev,
                        [ele.city]: !prev[ele.city],
                      }))
                    }
                    checked={citiesApi[ele.city]}
                    className="hidden"
                  />
                </div>

                {/* Label */}
                <label
                  htmlFor={ele.city}
                  className="rounded-[5px] p-[5px] text-black font-sans"
                >
                  {ele.city}
                </label>
              </div>
              <div className="font-sans font-[500]">({ele.hotels.length})</div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FilterSideBar;
