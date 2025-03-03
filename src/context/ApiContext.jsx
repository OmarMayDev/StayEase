// src/context/ApiContext.js
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import pic1 from "../Pictures/1.webp";
import pic2 from "../Pictures/2.webp";
import pic3 from "../Pictures/3.webp";
import pic4 from "../Pictures/4.webp";
import pic5 from "../Pictures/5.webp";
import pic6 from "../Pictures/6.webp";
import pic7 from "../Pictures/7.webp";
import pic8 from "../Pictures/8.webp";
import pic9 from "../Pictures/9.webp";
import picTen from "../Pictures/picTen.webp";
import picEleven from "../Pictures/piceleven.webp";
import picTwelve from "../Pictures/picTwelve.webp";
import picThrenteen from "../Pictures/picThrenteen.webp";
import picFourteen from "../Pictures/picFourteen.webp";
import picFifteen from "../Pictures/picFifteen.webp";
import picSixteen from "../Pictures/picSixteen.webp";
import picEighteen from "../Pictures/picEighteen.webp";
import picNineteen from "../Pictures/picNineteen.webp";
import picTwenty from "../Pictures/picTwenty.webp";
import picTwentyOne from "../Pictures/picTwentyOne.webp";
import picTwentytwo from "../Pictures/picTwentytwo.webp";
import picTwentyThree from "../Pictures/picTwentyThree.webp";
import picTwentyFour from "../Pictures/picTwentyFour.webp";
import picTwentyFive from "../Pictures/picTwentyFive.webp";
import picTwentySix from "../Pictures/picTwentySix.webp";
import picTwentyEight from "../Pictures/picTwentyEight.webp";
import picTwentyNine from "../Pictures/picTwentyNine.webp";
import picTherty from "../Pictures/picTherty.webp";
import fix from "../Pictures/fix.webp";
import newOne from "../Pictures/newOne.webp";

import {
  FaCity,
  FaPlane,
  FaMountain,
  FaPalette,
  FaStore,
  FaTheaterMasks,
  FaUniversity,
  FaShip,
  FaTree,
  FaRocket,
} from "react-icons/fa";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  //state for home page
  const [searchData, setSearchData] = useState("");
  const [clickedCity, setclickedCity] = useState("");
  //for hotelDetails
  const [details, setDetails] = useState(null);
  const cardApiFinal = [
    {
      id: 1,
      city: "Barcelona",
      logo: "FaCity",
      hotels: [
        {
          id: 1,
          name: "Hotel Deluxia Center",
          image: newOne,
          alt: "Hotel Deluxia Center - A luxurious 4-star hotel in the heart of Barcelona.",
          description: "A luxurious 4-star hotel in the heart of Barcelona.",
          price: "$150/night",
          location: "Central Barcelona, Spain",
        },
        {
          id: 2,
          name: "Hotel El Palace",
          image: pic2,
          alt: "Hotel El Palace - Classic hotel with old-world charm, near the beach.",
          description: "Classic hotel with old-world charm, near the beach.",
          price: "$300/night",
          location: "Barcelona Beachfront, Spain",
        },
      ],
    },
    {
      id: 2,
      city: "Seattle",
      logo: "FaPlane",
      hotels: [
        {
          id: 1,
          name: "The Edgewater Hotel",
          image: pic3,
          alt: "The Edgewater Hotel - Waterfront hotel offering stunning views of the Puget Sound.",
          description:
            "Waterfront hotel offering stunning views of the Puget Sound.",
          price: "$180/night",
          location: "Seattle Waterfront, USA",
        },
        {
          id: 2,
          name: "Hotel Sorrento",
          image: pic4,
          alt: "Hotel Sorrento - Elegant and stylish hotel with a blend of classic and modern.",
          description:
            "Elegant and stylish hotel with a blend of classic and modern.",
          price: "$220/night",
          location: "Downtown Seattle, USA",
        },
        {
          id: 3,
          name: "The Fairmont Olympic",
          image: pic5,
          alt: "The Fairmont Olympic - A historic hotel with old-world charm.",
          description: "A historic hotel with old-world charm.",
          price: "$350/night",
          location: "Seattle, USA",
        },
        {
          id: 4,
          name: "The Arctic Club",
          image: pic6,
          alt: "The Arctic Club - Stylish hotel with a unique Alaskan theme.",
          description: "Stylish hotel with a unique Alaskan theme.",
          price: "$230/night",
          location: "Downtown Seattle, USA",
        },
        {
          id: 5,
          name: "The Inn at the Market",
          image: pic7,
          alt: "The Inn at the Market - Charming hotel with a market view.",
          description: "Charming hotel with a market view.",
          price: "$250/night",
          location: "Seattle Pike Place Market, USA",
        },
      ],
    },
    {
      id: 3,
      city: "Kathmandu",
      logo: "FaMountain",
      hotels: [
        {
          id: 1,
          name: "Hotel Yak & Yeti",
          image: pic8,
          alt: "Hotel Yak & Yeti - A five-star hotel offering stunning views of the Himalayas.",
          description:
            "A five-star hotel offering stunning views of the Himalayas.",
          price: "$130/night",
          location: "Kathmandu, Nepal",
        },
      ],
    },
    {
      id: 4,
      city: "Florence",
      logo: "FaPalette",
      hotels: [
        {
          id: 1,
          name: "Hotel Savoy",
          image: pic9,
          alt: "Hotel Savoy - Luxury hotel in the heart of Florence, near major attractions.",
          description:
            "Luxury hotel in the heart of Florence, near major attractions.",
          price: "$450/night",
          location: "Florence, Italy",
        },
        {
          id: 2,
          name: "Hotel Lungarno",
          image: picTen,
          alt: "Hotel Lungarno - Luxury hotel with beautiful views of the Arno River.",
          description: "Luxury hotel with beautiful views of the Arno River.",
          price: "$500/night",
          location: "Florence, Italy",
        },
        {
          id: 3,
          name: "Hotel Plaza Lucchesi",
          image: picEleven,
          alt: "Hotel Plaza Lucchesi - Historic hotel with charming rooms and rooftop bar.",
          description: "Historic hotel with charming rooms and rooftop bar.",
          price: "$320/night",
          location: "Florence, Italy",
        },
        {
          id: 4,
          name: "The Westin Excelsior",
          image: picTwelve,
          alt: "The Westin Excelsior - Elegant hotel with scenic river views.",
          description: "Elegant hotel with scenic river views.",
          price: "$380/night",
          location: "Florence, Italy",
        },
        {
          id: 5,
          name: "Four Seasons Hotel Florence",
          image: picThrenteen,
          alt: "Four Seasons Hotel Florence - Upscale hotel with lush gardens and a relaxing atmosphere.",
          description:
            "Upscale hotel with lush gardens and a relaxing atmosphere.",
          price: "$700/night",
          location: "Florence, Italy",
        },
        {
          id: 6,
          name: "Villa Cora",
          image: picFourteen,
          alt: "Villa Cora - Boutique hotel with a rich historical background and opulent decor.",
          description:
            "Boutique hotel with a rich historical background and opulent decor.",
          price: "$550/night",
          location: "Florence, Italy",
        },
        {
          id: 7,
          name: "Hotel Berchielli",
          image: picFifteen,
          alt: "Hotel Berchielli - Classic hotel with luxury rooms and modern amenities.",
          description: "Classic hotel with luxury rooms and modern amenities.",
          price: "$400/night",
          location: "Florence, Italy",
        },
      ],
    },
    {
      id: 5,
      city: "Singapore",
      logo: "FaStore",
      hotels: [
        {
          id: 1,
          name: "Marina Bay Sands",
          image: picSixteen,
          alt: "Marina Bay Sands - Iconic hotel with a rooftop infinity pool and city views.",
          description:
            "Iconic hotel with a rooftop infinity pool and city views.",
          price: "$500/night",
          location: "Singapore",
        },
        {
          id: 2,
          name: "Raffles Hotel Singapore",
          image: picEighteen,
          alt: "Raffles Hotel Singapore - Historic luxury hotel offering top-notch services.",
          description: "Historic luxury hotel offering top-notch services.",
          price: "$700/night",
          location: "Singapore",
        },
      ],
    },
    {
      id: 6,
      city: "Vienna",
      logo: "FaTheaterMasks",
      hotels: [
        {
          id: 1,
          name: "Hotel Sacher",
          image: picNineteen,
          alt: "Hotel Sacher - Luxury hotel with historic charm, home to the famous Sachertorte.",
          description:
            "Luxury hotel with historic charm, home to the famous Sachertorte.",
          price: "$600/night",
          location: "Vienna, Austria",
        },
        {
          id: 2,
          name: "The Ritz-Carlton Vienna",
          image: picTwenty,
          alt: "The Ritz-Carlton Vienna - Elegant hotel with impeccable service and a central location.",
          description:
            "Elegant hotel with impeccable service and a central location.",
          price: "$650/night",
          location: "Vienna, Austria",
        },
      ],
    },
    {
      id: 7,
      city: "Cambridge",
      logo: "FaUniversity",
      hotels: [
        {
          id: 1,
          name: "The Varsity Hotel & Spa",
          image: picTwentyOne,
          alt: "The Varsity Hotel & Spa - Contemporary hotel with stunning views of Cambridge.",
          description: "Contemporary hotel with stunning views of Cambridge.",
          price: "$220/night",
          location: "Cambridge, UK",
        },
        {
          id: 2,
          name: "The Gonville Hotel",
          image: picTwentytwo,
          alt: "The Gonville Hotel - Stylish hotel with excellent facilities and city views.",
          description:
            "Stylish hotel with excellent facilities and city views.",
          price: "$250/night",
          location: "Cambridge, UK",
        },
      ],
    },
    {
      id: 8,
      city: "Cape Town",
      logo: "FaShip",
      hotels: [
        {
          id: 1,
          name: "One&Only Cape Town",
          image: picTwentyThree,
          alt: "One&Only Cape Town - Luxury hotel offering stunning views of Table Mountain.",
          description:
            "Luxury hotel offering stunning views of Table Mountain.",
          price: "$500/night",
          location: "Cape Town, South Africa",
        },
      ],
    },
    {
      id: 9,
      city: "Portland",
      logo: "FaTree",
      hotels: [
        {
          id: 1,
          name: "The Nines, a Luxury Collection Hotel",
          image: picTwentyFour,
          alt: "The Nines, a Luxury Collection Hotel - Stylish luxury hotel in the heart of Portland.",
          description: "Stylish luxury hotel in the heart of Portland.",
          price: "$300/night",
          location: "Portland, USA",
        },
        {
          id: 2,
          name: "Hotel deLuxe",
          image: picTwentyFive,
          alt: "Hotel deLuxe - Vintage-inspired boutique hotel with modern amenities.",
          description: "Vintage-inspired boutique hotel with modern amenities.",
          price: "$220/night",
          location: "Portland, USA",
        },
        {
          id: 3,
          name: "The Heathman Hotel",
          image: picTwentySix,
          alt: "The Heathman Hotel - Historic hotel with luxury rooms and a central location.",
          description:
            "Historic hotel with luxury rooms and a central location.",
          price: "$250/night",
          location: "Portland, USA",
        },
      ],
    },
    {
      id: 10,
      city: "Houston",
      logo: "FaRocket",
      hotels: [
        {
          id: 1,
          name: "The Post Oak Hotel",
          image: picTwentyEight,
          alt: "The Post Oak Hotel - Luxury hotel with modern amenities and a central location.",
          description:
            "Luxury hotel with modern amenities and a central location.",
          price: "$450/night",
          location: "Houston, USA",
        },
        {
          id: 2,
          name: "Hotel Zaza",
          image: picTwentyNine,
          alt: "Hotel Zaza - Chic and stylish hotel with upscale rooms.",
          description: "Chic and stylish hotel with upscale rooms.",
          price: "$400/night",
          location: "Houston, USA",
        },
        {
          id: 3,
          name: "The St. Regis Houston",
          image: picTherty,
          alt: "The St. Regis Houston - Elegant hotel offering first-class service.",
          description: "Elegant hotel offering first-class service.",
          price: "$500/night",
          location: "Houston, USA",
        },
      ],
    },
  ];

  //make small card api for clickable cards section
  const cardApi = [
    {
      id: 1,
      city: "Barcelona",
      logo: FaCity,
    },
    {
      id: 2,
      city: "Seattle",
      logo: FaPlane,
    },
    {
      id: 3,
      city: "Kathmandu",
      logo: FaMountain,
    },
    {
      id: 4,
      city: "Florence",
      logo: FaPalette,
    },
    {
      id: 5,
      city: "Singapore",
      logo: FaStore,
    },
    {
      id: 6,
      city: "Vienna",
      logo: FaTheaterMasks,
    },
    {
      id: 7,
      city: "Cambridge",
      logo: FaUniversity,
    },
    {
      id: 8,
      city: "Cape Town",
      logo: FaShip,
    },
    {
      id: 9,
      city: "Portland",
      logo: FaTree,
    },
    {
      id: 10,
      city: "Houston",
      logo: FaRocket,
    },
  ];

  //set up reviews api
  const reviews = [
    {
      name: "Mark Andrew",
      post: "This site is a fantastic resource for finding hotels. Their search filters are incredibly detailed, and the photos are stunning. It's the perfect place to start your hotel research, but keep in mind that you'll need to book directly with the hotel.",
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa67289cb6ece78ad82d7_Ellipse%20165%20(1).webp",
      alt: "Profile Pic",
    },
    {
      name: "Jane Doe",
      post: "I love using this site to browse hotels and get inspiration for my next trip. The search functionality is top-notch, and the website is beautifully designed. I can easily filter by price, amenities, and even neighborhood. It's a great tool for discovering hidden gems, but remember to contact the hotel directly for reservations.",
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa67689cb6ece78ad843c_image.webp",
      alt: "Profile Pic",
    },
    {
      name: "John Smith",
      post: "This hotel site is a dream for travel enthusiasts! I spend hours exploring the site, browsing through amazing hotels and dreaming of my next adventure. The photos are incredible, and the descriptions are so enticing. It's the best place to start your hotel research.",
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa67389cb6ece78ad834b_Ellipse%20131.webp",
      alt: "Profile Pic",
    },
  ];

  //set up marquee api
  const imagesMarquee = [
    {
      id: 1,
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa2e26bb7795aef363fe7_Frame-1.webp",
      alt: "Fake logo",
    },
    {
      id: 2,
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa2e16bb7795aef363e2a_logo-53.webp",
      alt: "Fake logo",
    },
    {
      id: 3,
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa2e26bb7795aef364017_logo-78.webp",
      alt: "Fake logo",
    },
    {
      id: 4,
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa2e16bb7795aef363e00_Frame.webp",
      alt: "Fake logo",
    },
    {
      id: 5,
      pic: "https://cdn.prod.website-files.com/66e96a440f831f93d1b5a8ff/66eaa2e16bb7795aef363e2a_logo-53.webp",
      alt: "Fake logo",
    },
  ];

  //set up small city api
  const [citiesApi, setcitiesApi] = useState({
    Barcelona: false,
    Seattle: false,
    Kathmandu: false,
    Florence: false,
    Singapore: false,
    Vienna: false,
    Cambridge: false,
    "Cape Town": false,
    Portland: false,
    Houston: false,
  });

  //state for list in allhotels
  const [list, setList] = useState(cardApiFinal);
  const [isAllChecked, setisAllChecked] = useState(true);
  const [click, setClick] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  //random pics static api for hotelDetails
  const randomPics = [
    {
      id: 1,
      pic: "https://media.istockphoto.com/id/172233561/photo/small-european-hotel-room.jpg?s=612x612&w=0&k=20&c=ks5_eBzHvyIoztEgkK_pVzqXlOqnHiHUrYTs2vDMIZo=",
    },
    {
      id: 2,
      pic: "https://media.istockphoto.com/id/1193594203/photo/modern-interior-design-of-the-living-room.jpg?s=612x612&w=0&k=20&c=hv7TjvqlkJ_fwrAipV5uIvEcWMA8S6mzXN0_UGyMbxU=",
    },
    {
      id: 3,
      pic: "https://media.istockphoto.com/id/881475252/photo/shower-in-small-white-bathroom.jpg?s=612x612&w=0&k=20&c=6T1Z6nJ2mbXNEs454jukIBSwdg1h1k1t5fGvboBMS6k=",
    },
    {
      id: 4,
      pic: "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=",
    },
    {
      id: 5,
      pic: "https://media.istockphoto.com/id/1189775335/photo/zen-style-bedroom.jpg?s=612x612&w=0&k=20&c=1cdKLSN1kw-qYO2BWlgBDNH055T5QEk8gFf9zcA6mEA=",
    },
    {
      id: 6,
      pic: "https://media.istockphoto.com/id/2046945081/photo/modern-style-luxury-black-living-room-with-city-view-in-the-night-3d-render.jpg?s=612x612&w=0&k=20&c=EptmKtc17Hg_1JloU11XTQdxmXoWBIC0mCwXeXimk08=",
    },
    {
      id: 7,
      pic: "https://media.istockphoto.com/id/1203029609/photo/modern-living-room-in-the-evening.jpg?s=612x612&w=0&k=20&c=JBWNvQDSDiRaWSP5tjS4XMw6MBPISS5kLrDCBs2vcDY=",
    },
    {
      id: 8,
      pic: "https://media.istockphoto.com/id/483572813/photo/hotel-bedroom.jpg?s=612x612&w=0&k=20&c=63oUzWpyXusFYUVuoUdLczcCMezjs2SJI_C8t6naVNI=",
    },
  ];

  //for slide show
  //handle slideShow
  const [isSlide, setIsSlide] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slicedPics, setSlicedPics] = useState([]);
  const swiperRef = useRef(null);

  //set state for saved
  const [savedHotels, setSavedHotels] = useState(() => {
    // Initialize from localStorage if available
    const storedHotels = localStorage.getItem("savedHotels");
    return storedHotels ? JSON.parse(storedHotels) : [];
  });

  useEffect(() => {
    // Update localStorage when savedHotels changes
    localStorage.setItem("savedHotels", JSON.stringify(savedHotels));
  }, [savedHotels]);

  const [values, setValues] = useState([150, 750]);

  return (
    <ApiContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        click,
        setClick,
        values,
        setValues,
        savedHotels,
        setSavedHotels,
        swiperRef,
        slicedPics,
        setSlicedPics,
        activeIndex,
        setActiveIndex,
        isSlide,
        setIsSlide,
        isAllChecked,
        setisAllChecked,
        cardApiFinal,
        searchData,
        setSearchData,
        clickedCity,
        setclickedCity,
        details,
        setDetails,
        cardApi,
        reviews,
        imagesMarquee,
        citiesApi,
        setcitiesApi,
        list,
        setList,
        randomPics,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  return useContext(ApiContext);
};
