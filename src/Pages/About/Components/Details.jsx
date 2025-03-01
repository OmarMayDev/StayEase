import React from "react";

const Details = () => {
  return (
    <div className="max-w-[1200px]  m-auto p-[20px] transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
      <div className="bg-white flex flex-col gap-[30px] border border-gray-500/50 p-[20px]   md:flex-row md:justify-center md:gap-[40px]">
        <div className="flex flex-col gap-[20px] items-center">
          <img
            src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
            alt="hotelImg"
            className="m-w-[248px] md:w-[412px] md:h-[273px]"
          />
          <div className="text-[24px]">LOOKING FOR AN HOTEL?</div>
          <p className="font-sans text-center md:max-w-[362px] ">
            Explore varied hotel categories effortlessly! Discover unique stays
            through detailed filters and visual layouts. Browse diverse options,
            from boutique to luxury. Perfect for planning, no bookings needed.
            Just inspiring hotel discovery.
          </p>
        </div>
        <div className="flex flex-col gap-[20px] items-center">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg"
            alt="hotelImg"
            className="m-w-[248px] md:w-[412px] md:h-[273px]"
          />
          <div className="text-[24px]">Where Will You Stay?</div>
          <p className="font-sans text-center md:max-w-[362px] ">
            Category browsing is intuitive and comprehensive. Find hotels by
            type, location, and style. The site's clear design helps pinpoint
            desired stays. Ideal for research, not booking. A great resource for
            hotel exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
