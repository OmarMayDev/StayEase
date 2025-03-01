import React from "react";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import DisplaySaved from "./Components/DisplaySaved";

const Saved = () => {
  return (
    <div>
      <Header />
      <Navigation label="Saved Hotels" />
      <DisplaySaved />
    </div>
  );
};

export default Saved;
