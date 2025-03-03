import Header from "../../Components/Header";
import Search from "./Components/Search";
import Result from "./Components/Result";
import { Helmet } from "react-helmet-async";

const SearchResults = () => {
  return (
    <div>
      <Helmet>
        <title>Search Results - StayEase Hotel Website </title>
        <meta
          name="description"
          content="This is the search results page of StayEase."
        />
        <meta name="keywords" content="React, Vite, Web App" />
      </Helmet>
      <Header />
      <Search />
      <Result />
    </div>
  );
};

export default SearchResults;
