import React from "react";
import { useApiContext } from "../../../context/ApiContext";

const Marquee = () => {
  const { imagesMarquee } = useApiContext();
  return (
    <div className="lg:w-[1200px] m-auto overflow-hidden mt-[70px] ">
      <div className="flex gap-[60px] animate-marquee whitespace-nowrap">
        {imagesMarquee.map((src, i) => (
          <img key={src.id} src={src.pic} className=" w-[175px] h-[40px]" />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
