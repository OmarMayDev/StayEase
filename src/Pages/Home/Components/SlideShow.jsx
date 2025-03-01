import React from "react";
import { useApiContext } from "../../../context/ApiContext";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import buildingsbg from "../../../Pictures/buildingsbg.webp";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SlideShow = () => {
  const { reviews } = useApiContext();

  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the element is visible
    triggerOnce: true, // Only trigger animation once
  });
  return (
    <div
      ref={ref}
      className={`max-w-[1200px] xl:m-auto   p-[10px] transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      } `}
    >
      <Swiper modules={[Navigation]} navigation className="rounded-[10px] ">
        {reviews.map((r) => (
          <SwiperSlide key={r.name}>
            <div
              className=" rounded-lg shadow-md  bg-cover bg-center h-[526px]"
              style={{ backgroundImage: `url(${buildingsbg})` }}
            >
              <div className="flex flex-col items-center justify-center mb-4 bg-black/80 w-full h-full gap-[20px]">
                <img src={r.pic} className="rounded-full w-[90px]" />
                <div className="text-[20px] font-[700] font-sans text-white">
                  {r.name}
                </div>
                <div className="font-sans text-white text-center sm:w-[510px] lg:w-[710px] text-[13px] p-[10px] w-[200px] max-w-[710px] sm:text-[16px]">
                  {r.post}
                </div>
                <BiSolidQuoteAltRight color="white" size={50} />
              </div>
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
      <div className="text-center mt-4"></div>
    </div>
  );
};

export default SlideShow;
