import React from "react";
import { useApiContext } from "../../../context/ApiContext";
import { useState } from "react";

const Search = () => {
  const { searchData, setSearchData } = useApiContext();
  const [userSeached, setUserSearched] = useState(searchData);

  //handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchData(userSeached);
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
      <input
        onChange={(v) => setUserSearched(v.target.value)}
        type="text"
        placeholder={searchData}
        className="min-w-[290px] h-[54px] bg-[#e6e6e6] border border-gray-400 rounded-[5px] placeholder: focus:outline-red-600 placeholder:text-[14px] font-serif pl-[10px] placeholder:text-black"
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
