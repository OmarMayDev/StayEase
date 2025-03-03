import React from "react";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import Video from "./Components/Video";
import Navigation from "../../Components/Navigation";
import Details from "./Components/Details";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - StayEase Hotel Website </title>
        <meta
          name="description"
          content="This is the About page of StayEase."
        />
        <meta name="keywords" content="React, Vite, Web App" />
      </Helmet>
      <Header />
      <Navigation label="About" />
      <Video />
      <Details />
      <Footer />
    </div>
  );
};

export default About;
