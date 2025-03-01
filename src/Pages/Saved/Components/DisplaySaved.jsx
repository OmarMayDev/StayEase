import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useApiContext } from "../../../context/ApiContext";
import { useNavigate } from "react-router";

const DisplaySaved = () => {
  const { savedHotels, setSavedHotels, setDetails } = useApiContext();
  const navigate = useNavigate();

  const handleView = (hotel) => {
    setDetails(hotel);
    navigate("/HotelDetails");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = savedHotels.slice(firstPostIndex, lastPostIndex);

  // Set page numbers correctly
  let pages = [];
  for (let i = 1; i <= Math.ceil(savedHotels.length / postsPerPage); i++) {
    pages.push(i);
  }

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="m-auto max-w-[1200px] p-[10px] flex flex-col gap-[70px] xl:grid xl:grid-cols-4 ">
      {currentPost.map((hotel, index) => (
        <div
          key={index}
          className="bg-white flex flex-col min-w-[290px] rounded-[10px]"
        >
          <img
            src={hotel.image}
            className="min-w-[290px] rounded-[10px] object-cover"
            alt={hotel.name}
            style={{ height: "245px" }}
          />
          <div className="flex flex-col items-center justify-center p-[20px] gap-[20px]">
            <div className="font-sans font-[500] hover:text-[#dd3842]">
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
            <button
              className="w-[150px] h-[46px] font-sans outline outline-gray-500/70 rounded-[5px] bg-white transition-colors duration-300 ease-in-out hover:bg-[#dd3842] hover:text-white hover:outline-none hover:cursor-pointer"
              onClick={() => {
                const filtered = savedHotels.filter(
                  (ele) => ele.name !== hotel.name
                );
                setSavedHotels(filtered);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="col-span-4 flex justify-center gap-2 mt-4">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`rounded-[5px] w-[100px] h-[40px] font-sans hover:cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:outline hover:outline-gray-500/70 ${
              currentPage === page
                ? "bg-white text-black outline outline-gray-500/70"
                : "bg-[#dd3842] text-white"
            }`}
            onClick={() => {
              setCurrentPage(page);
              ScrollToTop();
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplaySaved;
