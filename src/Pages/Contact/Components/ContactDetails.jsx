import React from "react";

import { BsHouse } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* office */}
      <div className="flex gap-[20px]">
        <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] min-w-[40px]  h-[40px] ">
          <BsHouse color="white" size={20} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="text-[20px] font-[700] font-sans">Office:</div>
          <p className="font-sans">
            93x Hilgard Ave, Los Angeles, CA 90024, United States.
          </p>
        </div>
      </div>
      {/* contact num */}
      <div className="flex gap-[20px]">
        <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] min-w-[40px] h-[40px] ">
          <FiPhone color="white" size={20} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="text-[20px] font-[700] font-sans">
            Contact Number:
          </div>
          <p className="font-sans">000-000-0000</p>
        </div>
      </div>
      {/* email */}
      <div className="flex gap-[20px]">
        <div className="bg-[#dd3842] rounded-full flex items-center justify-center w-[40px] min-w-[40px] h-[40px] ">
          <GoMail color="white" size={20} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="text-[20px] font-[700] font-sans">Email:</div>
          <p className="font-sans">example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
