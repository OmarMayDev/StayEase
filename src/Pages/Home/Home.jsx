import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import HeroSection from "./Components/HeroSection";
import MostPopular from "./Components/MostPopular";
import SearchByCites from "./Components/SearchByCites";
import Marquee from "./Components/Marquee";
import SlideShow from "./Components/SlideShow";

const Home = () => {
  return (
    <div className="flex flex-col overflow-y-hidden ">
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
