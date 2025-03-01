import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useApiContext } from "../../../context/ApiContext";
import { useRef } from "react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
const SlideShowOverlay = () => {
  const {
    activeIndex,
    setActiveIndex,
    isSlide,
    setIsSlide,
    slicedPics,
    swiperRef,
  } = useApiContext();
  return (
    <div
      className={`flex-col gap-[100px] w-full h-screen bg-black/90 fixed z-11 justify-center transition-all transform opacity-0 duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards] ${
        isSlide ? "flex" : "hidden"
      }`}
    >
      <IoClose
        className="absolute top-5 right-5 hover:cursor-pointer "
        onClick={() => setIsSlide(false)}
        size={60}
        color="white"
      />

      <div className="flex items-center justify-center">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update activeIndex on slide change
          ref={swiperRef} // Use the ref to access the Swiper instance
        >
          {slicedPics.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="flex items-center justify-center h-full">
                <img
                  src={image.pic}
                  alt={`Slide ${image.name}`}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
                .swiper-button-prev::after,
                .swiper-button-next::after {
                  color: white !important;
                }
              `}
        </style>
      </div>

      <div className="grid gap-[10px] max-w-[464px] grid-cols-4 justify-self-center self-center">
        {slicedPics.map((hotel, index) => (
          <img
            key={hotel.id}
            src={hotel.pic}
            onClick={() => {
              setActiveIndex(index);
              swiperRef.current.swiper.slideTo(index); // Directly change the slide
            }}
            className={`rounded-[5px] w-full h-full hover:cursor-pointer ${
              activeIndex === index ? "opacity-50" : "opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShowOverlay;
