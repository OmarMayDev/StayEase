import React from "react";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { useApiContext } from "../../context/ApiContext";
import { useEffect } from "react";
import Navigation from "../../Components/Navigation";
import { useNavigate } from "react-router";
import SlideShow from "./Components/SlideShow";
import SlideShowOverlay from "./Components/SlideShowOverlay";
import Description from "./Components/Description";

const HotelDetails = () => {
  //use apiContext
  const { details } = useApiContext();

  //usenavigate
  const navigate = useNavigate();

  //handle send user back to list page if refresh
  useEffect(() => {
    if (!details) {
      navigate("/AllHotels");
    }
  }, []);

  return (
    <div className="overflow-y-hidden ">
      <SlideShowOverlay />
      <Header />
      <Navigation label="Hotel Details" />
      <SlideShow />
      {/* desciption  */}
      <Description />
      <Footer />
    </div>
  );
};

export default HotelDetails;
