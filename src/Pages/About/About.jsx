import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Video from "./Components/Video";
import Navigation from "../../Components/Navigation";
import Details from "./Components/Details";

const About = () => {
  return (
    <div>
      <Header />
      <Navigation label="About" />
      <Video />
      <Details />
      <Footer />
    </div>
  );
};

export default About;
