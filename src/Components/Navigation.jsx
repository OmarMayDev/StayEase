import React from "react";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const Navigation = ({ label }) => {
  return (
    <nav className="bg-[#e6e6e6] w-screen mb-[40px]">
      <div className="transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards] font-sans text-[15px] font-[500] text-[#545454] p-[10px] flex items-center">
        <Link
          to="/"
          className="hover:cursor-pointer hover:text-[#dd3842] transition-colors duration-500s"
        >
          Home
        </Link>
        <IoIosArrowForward />
        <div>{label}</div>
      </div>
    </nav>
  );
};

export default Navigation;
