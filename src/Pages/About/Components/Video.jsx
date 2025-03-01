import React from "react";
import video from "../../../Video/vid.mp4";
const Video = () => {
  return (
    <div className="flex flex-col gap-[50px] p-[20px] max-w-[1200px]  m-auto transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
      <video
        className="m-auto  min-h-[250px] max-h-[500px] rounded-[5px] object-cover"
        controlsList="nodownload nofullscreen noremoteplayback"
        loop
        autoPlay
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-[30px] text-center md:text-[40px]  ">
        CONNECTING WITH LOCAL STAYS IS EASY WITH THIS PLATFORM. THE COMMUNITY
        ASPECT SHINES THROUGH, OFFERING UNIQUE HOTELS AND EXPERIENCES.
      </div>
    </div>
  );
};

export default Video;
