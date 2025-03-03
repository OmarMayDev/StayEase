import React from "react";
import { useApiContext } from "../../../context/ApiContext";
import { useState } from "react";
import Select from "react-select";

const Search = () => {
  const { searchData, setSearchData, cardApiFinal } = useApiContext();
  const [userSeached, setUserSearched] = useState(searchData);

  //handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchData(userSeached);
  };

  //handle autocomplete
  // Generate dynamic options based on cardApiFinal
  const dynamicOptions = cardApiFinal
    .map((card) =>
      card.hotels.map((hotel) => ({
        value: hotel.name, // Assuming `hotel.city` contains the city name
        label: hotel.name,
      }))
    )
    .flat(); // Flatten the nested array

  const cityNames = cardApiFinal.map((card) => ({
    value: card.city,
    label: card.city,
  }));

  // Combine static and dynamic options
  const options = [...cityNames, ...dynamicOptions];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#e6e6e6",
      borderColor: state.isFocused ? "red" : "#9ca3af",
      borderRadius: "5px",
      minHeight: "54px",
      paddingLeft: "10px",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(220, 38, 38, 0.5)" : "none",
      "&:hover": {
        borderColor: "red",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "black",
      fontSize: "14px",
      fontFamily: "serif",
    }),
  };
  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex flex-col gap-[20px] pl-[15px] pr-[20px]  pt-[40px] max-w-[1300px] m-auto "
    >
      <div className="text-black text-[30px] md:text-[40px] transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
        SEARCH RESULTS
      </div>
      <div className="text-[#333333] text-[20px] font-[700] font-sans">
        Search
      </div>

      <Select
        options={options}
        isSearchable
        openMenuOnClick={false}
        onChange={(v) => setUserSearched(v.value)}
        styles={customStyles}
        className="min-w-[290px]"
      />
      <button
        type="submit"
        className="bg-[#dd3842] text-white rounded-[5px] w-[110px] h-[56px] font-sans border  hover:border-[#dd3842] hover:cursor-pointer hover:bg-white hover:text-[#dd3842]  transition-colors duration-300 ease-in-out"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
