import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import { ApiProvider } from "./context/ApiContext";
import SearchResults from "./Pages/SearchResults/SearchResults";
import AllHotels from "./Pages/AllHotels/AllHotels";
import HotelDetails from "./Pages/HotelDetails/HotelDetails";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import ScrollToTop from "./Components/ScrollToTop";
import Saved from "./Pages/Saved/Saved";

const App = () => {
  return (
    <div>
      <ApiProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/AllHotels" element={<AllHotels />} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Saved" element={<Saved />} />
        </Routes>
      </ApiProvider>
    </div>
  );
};

export default App;
