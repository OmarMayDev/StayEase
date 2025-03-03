import React from "react";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import DisplaySaved from "./Components/DisplaySaved";
import { Helmet } from "react-helmet-async";

const Saved = () => {
  return (
    <div>
      <Helmet>
        <title>Saved - StayEase Hotel Website </title>
        <meta
          name="description"
          content="This is the saved page of StayEase."
        />
        <meta name="keywords" content="React, Vite, Web App" />
      </Helmet>
      <Header />
      <Navigation label="Saved Hotels" />
      <DisplaySaved />
    </div>
  );
};

export default Saved;
