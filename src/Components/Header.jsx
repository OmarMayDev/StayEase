import React, { useEffect } from "react";
import pic3 from "../Pictures/pic3.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LuUserRound } from "react-icons/lu";

const Header = () => {
  //hanlde isOpen for menu/x button
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //handle navigate
  const navigate = useNavigate();

  //handle if breakpoint make menu go away
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-white sticky top-0 z-10  ">
        <div className="transition-all transform opacity-0  duration-900 ease-out flex justify-between items-center max-w-[1300px] m-auto p-[10px] animate-[fadeInFromBottom_1s_ease-out_forwards] ">
          {/* logo */}
          <img
            src={pic3}
            alt="StayEaseLogo"
            className="w-[150px] hover:cursor-pointer"
            onClick={() => navigate("/")}
          />
          {/* navSection */}
          <nav className="gap-[30px] font-[400] font-serif hidden lg:flex ">
            <Link
              to="/"
              className="hover:cursor-pointer hover:text-[#dd3842] transition-colors duration-500"
            >
              Home
            </Link>
            <Link
              to="/AllHotels"
              className="hover:cursor-pointer hover:text-[#dd3842] transition-colors duration-500"
            >
              All Hotels
            </Link>
            <Link
              to="/About"
              className="hover:cursor-pointer hover:text-[#dd3842] transition-colors duration-500"
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="hover:cursor-pointer hover:text-[#dd3842] transition-colors duration-500"
            >
              Contact
            </Link>
          </nav>
          {/* accountPic */}
          <button
            className="bg-[#dd3842] text-white rounded-[5px] w-[100px] h-[40px] font-sans hover:cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:outline hover:outline-gray-500/70 hidden lg:block"
            onClick={() => navigate("/Saved")}
          >
            Saved
          </button>
          {/* menu button */}
          <div className="flex justify-end p-4 lg:hidden">
            <div
              className="space-y-2 cursor-pointer w-8 h-6 flex flex-col justify-between items-center"
              onClick={toggleMenu}
            >
              <div
                className={`w-full h-1 bg-black transition-all duration-300 ${
                  isOpen ? "rotate-42 translate-y-2.5 h-full" : ""
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-black transition-all duration-300 ${
                  isOpen ? "-rotate-42 -translate-y-2.5 h-full" : ""
                }`}
              ></div>
            </div>
          </div>
          {/* after logo button */}
        </div>
        {/* dropdown */}
        <div>
          {/* The content will expand smoothly */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden flex justify-center items-center ${
              isOpen ? "h-[330px] bg-[#dd3842]" : "h-0 bg-transparent"
            }`}
            style={{
              maxHeight: isOpen ? "330px" : "0",
            }}
          >
            {/* dropdown Content */}
            <nav className="text-white p-[20px] flex flex-col gap-[20px] font-[400] font-serif">
              <Link to="/" className="hover:cursor-pointer">
                Home
              </Link>
              <Link to="/AllHotels" className="hover:cursor-pointer">
                All Hotels
              </Link>
              <Link to="/About" className="hover:cursor-pointer">
                About
              </Link>
              <Link to="/Contact" className="hover:cursor-pointer">
                Contact
              </Link>
              <Link to="/Saved" className="hover:cursor-pointer">
                Saved
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
