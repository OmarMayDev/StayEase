import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import HeroSection from "./Components/HeroSection";
import MostPopular from "./Components/MostPopular";
import SearchByCites from "./Components/SearchByCites";
import Marquee from "./Components/Marquee";
import SlideShow from "./Components/SlideShow";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="flex flex-col overflow-y-hidden ">
      <Helmet>
        <title>Home - StayEase Hotel Website </title>
        <meta name="description" content="This is the home page of StayEase." />
        <meta name="keywords" content="React, Vite, Web App" />
      </Helmet>
      <Header />
      <HeroSection />
      <SearchByCites />
      <MostPopular />
      <SlideShow />
      <Marquee />
      <Footer />
    </div>
  );
};

export default Home;
