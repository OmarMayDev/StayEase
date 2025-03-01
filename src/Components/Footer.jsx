import React from "react";
import pic3 from "../Pictures/pic3.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
const Footer = () => {
  return (
    <div className="bg-black mt-[140px]">
      <div className="flex flex-col gap-[30px] md:flex-row max-w-[1200px] md:m-auto md:justify-between md:p-[40px]">
        <div className="flex flex-col gap-[30px] p-[20px] max-w-[450px]">
          <Link to="/">
            <img src={pic3} alt="logo" className="w-[170px]" />
          </Link>
          <p className="font-sans text-white">
            At StayEase, we make finding the perfect hotel effortless. Our
            curated selection ensures comfort and convenience, with dedicated
            support to assist you. Search with ease today!
          </p>
          <div className="flex gap-[10px] ">
            <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] h-[40px] ">
              <FaFacebookF color="white" size={20} />
            </div>
            <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] h-[40px] ">
              <FaXTwitter color="white" size={20} />
            </div>
            <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] h-[40px] ">
              <FaLinkedin color="white" size={20} />
            </div>
            <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] h-[40px] ">
              <FaPinterestP color="white" size={20} />
            </div>
            <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] h-[40px] ">
              <FaYoutube color="white" size={20} />
            </div>
          </div>
        </div>
        <div className="border border-white/50 m-auto w-[95%] md:hidden"></div>
        {/* section2 */}
        <div className="flex flex-col gap-[20px] text-white p-[20px]">
          <div className="font-sans font-[700] text-[22px]">Useful Links</div>
          <nav className="flex flex-col gap-[10px] font-sans">
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
        </div>
        <div className="border border-white/50 m-auto w-[95%] md:hidden"></div>
        {/* section3 */}
        <div className="flex flex-col gap-[20px] p-[20px] text-white">
          <div className="font-sans font-[700] text-[22px]">
            Contact Address
          </div>
          <div className="font-sans">
            4517 Washington Ave. Manchester, Kentucky 39495
          </div>
          <div className="font-sans font-[700] text-[22px]">
            Contact Support
          </div>
          <div className="flex gap-[10px] items-center">
            <FiPhone color="white" size={20} />
            <div className="font-sans text-white">(000)-000-0000</div>
          </div>
          <div className="flex gap-[10px] items-center">
            <GoMail color="white" size={20} />
            <div className="font-sans text-white">Example@gmail.com</div>
          </div>
        </div>
        <div className="border border-white/50 m-auto w-[95%] md:hidden"></div>
        {/* section4 */}
        <div className="flex flex-col gap-[20px] p-[20px] text-white font-sans text-center md:hidden">
          Copyright © 2025 StayEase Inc | Designed by StayEase Inc | Powered by
          StayEase
        </div>
      </div>
      <div className="hidden border border-white/50 m-auto w-[95%] md:block"></div>
      <div className="hidden flex-col gap-[20px] p-[20px] text-white font-sans text-center md:flex">
        Copyright © 2025 StayEase Inc | Designed by StayEase Inc | Powered by
        StayEase
      </div>
    </div>
  );
};

export default Footer;
