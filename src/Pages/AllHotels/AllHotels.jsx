import Navigation from "../../Components/Navigation";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import FilterSideBar from "./Components/FilterSideBar";
import HotelsDisplay from "./Components/HotelsDisplay";

const AllHotels = () => {
  return (
    <div>
      <Header />
      <Navigation label="All Hotels" />
      <div className="flex flex-col m-auto xl:flex-row xl:gap-[20px] max-w-[1300px] ">
        <FilterSideBar />
        <HotelsDisplay />
      </div>
      <Footer />
    </div>
  );
};

export default AllHotels;
