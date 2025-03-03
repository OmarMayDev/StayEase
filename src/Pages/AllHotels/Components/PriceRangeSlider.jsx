import React, { useState } from "react";
import { Range } from "react-range";
import { useApiContext } from "../../../context/ApiContext";

function PriceRangeSlider() {
  const { values, setValues } = useApiContext();

  // Changed initial values

  return (
    <div className="flex flex-col gap-[20px] mt-[10px] max-w-[290px]">
      <div className="text-[30px]">SELECT PRICE</div>
      <div className="flex flex-col items-center">
        <Range
          step={1}
          min={150}
          max={750}
          values={values}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => {
            const { key, ...restProps } = props; // Extract key
            return (
              <div
                key={key} // Pass key explicitly
                {...restProps} // Spread the rest
                className="w-full h-2 bg-gray-200 rounded-md"
                style={{
                  background: `linear-gradient(to right, #dd3842 0%, #dd3842 100%)`,
                }}
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props; // Extract key
            return (
              <div
                key={key} // Pass key explicitly
                {...restProps} // Spread the rest
                className="w-5 h-5 border-2 border-[#dd3842] bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#dd3842]"
              />
            );
          }}
        />
        <div className="flex justify-between w-full mt-2">
          <span className="text-gray-700">${values[0]}</span>{" "}
          {/* Changed currency to $ */}
          <span className="text-gray-700">${values[1]}</span>{" "}
          {/* Changed currency to $ */}
        </div>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
