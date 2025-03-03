import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import titleImg from "../../../Pictures/listPageImg.webp";
import { useApiContext } from "../../../context/ApiContext";

const HotelsDisplay = () => {
  const {
    cardApiFinal,
    click,
    setDetails,
    citiesApi,
    values,
    isAllChecked,
    setisAllChecked,
    setList,
    list,
    currentPage,
    setCurrentPage,
  } = useApiContext();

  const navigate = useNavigate();

  useEffect(() => {
    const filteredList = cardApiFinal.filter((api) => citiesApi[api.city]);

    if (
      filteredList.length > 0 &&
      JSON.stringify(list) !== JSON.stringify(filteredList)
    ) {
      setisAllChecked(false);
      setList(filteredList);
    }

    if (
      Object.values(citiesApi).every((value) => value === false) &&
      !isAllChecked
    ) {
      window.location.reload();
    }

    setCurrentPage(1);
  }, [citiesApi, isAllChecked, click]);

  //handle viewDetilas
  const handleView = (hotel) => {
    setDetails(hotel);
    navigate("/HotelDetails");
  };

  //set states

  const [postPerPage, setPostPerPage] = useState(3);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  //use slice to cut hotles
  const currentPost = list.slice(firstPostIndex, lastPostIndex);

  //set page numbers
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let newPages = [];
    for (let i = 1; i <= Math.ceil(list.length / postPerPage); i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [list, values, postPerPage]); // Recalculate when `list` or `postPerPage` changes

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //handle money slider

  return (
    <div className="flex flex-col xl:w-[935px] lg:gap-[20px]">
      {/* titlePic */}
      <div className="p-[10px] lg:p-0">
        <div
          className="flex justify-center items-center h-[147px] min-w-[290px]  m-auto max-w-[1300px] bg-cover bg-center"
          style={{ backgroundImage: `url(${titleImg})` }}
        >
          <div className=" flex justify-center items-center   text-white bg-black/50  w-full min-h-[147px]  ">
            <div className="p-[20px] text-[24px]  ">
              Find Your Perfect Stay—Quick, Easy, and Hassle-Free!
            </div>
          </div>
        </div>
      </div>
      {/* display current list */}
      <div className="flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-3 p-[10px] gap-[20px] xl:p-0 xl:gap-[20px]">
        {currentPost.map((city) => {
          return city.hotels.map((hotel) => {
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
          });
        })}
      </div>
      <div className="flex w-full items-center justify-center gap-[20px] mt-[80px]">
        {pages?.map((page, index) => {
          return (
            <button
              key={index}
              className={` rounded-[5px] w-[100px] h-[40px] font-sans  hover:cursor-pointer  transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:outline hover:outline-gray-500/70 ${
                currentPage === page
                  ? "bg-white text-black outline outline-gray-500/70 "
                  : "bg-[#dd3842] text-white"
              }`}
              onClick={() => {
                setCurrentPage(page);
                ScrollToTop();
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HotelsDisplay;
