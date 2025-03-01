import React from "react";

import { useEffect } from "react";
import { useApiContext } from "../../../context/ApiContext";
const SlideShow = () => {
  const {
    details,
    randomPics,
    setActiveIndex,
    setIsSlide,
    slicedPics,
    setSlicedPics,
    swiperRef,
  } = useApiContext();
  //handle slideShow
  //get pics at random
  // Function to shuffle the array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  //useeffect to do it once on render
  useEffect(() => {
    const shuffled = shuffleArray(randomPics);
    const sliced = shuffled.slice(0, 4);
    setSlicedPics(sliced);
  }, []);

  return (
    <div className="flex flex-col gap-[40px] lg:flex-row max-w-[1100px] m-auto lg:p-[20px] items-center lg:items-stretch transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
      <div className="flex flex-col gap-[30px] p-[10px]">
        <div className="flex flex-col gap-[20px]">
          <img
            src={details?.image}
            alt="hotel pic"
            className="min-w-[276px] min-h-[243px] rounded-[5px] lg:max-w-[564px] lg:h-[402px] "
          />
          {/* slide Pics */}
          <div className="grid grid-cols-2 gap-[10px] lg:max-w-[564px] lg:grid-cols-4 ">
            {slicedPics.map((hotel, index) => {
              return (
                <img
                  key={hotel.id}
                  src={hotel.pic}
                  onClick={() => {
                    setIsSlide(true);
                    setActiveIndex(index);
                    swiperRef.current.swiper.slideTo(index); // Directly change the slide
                  }}
                  className=" rounded-[5px] w-full h-full hover:cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] p-[10px] md:justify-center max-w-[500px] items-center lg:items-stretch">
        <h1 className="font-sans text-[20px] font-[700] lg:text-[30px]">
          {details?.name}
        </h1>
        <p className="font-sans lg:text-[18px]">{details?.description}</p>
        <div className="text-[30px] text-[#dd3842] lg:text-[35px]">
          {details?.price}
        </div>
        <div className="flex gap-[5px] items-center">
          <div className="font-sans font-[500] text-[18px] lg:text-[20px]">
            Location:
          </div>
          <div className="font-sans font-[500] text-[#545454] lg:text-[20px]">
            {details?.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
