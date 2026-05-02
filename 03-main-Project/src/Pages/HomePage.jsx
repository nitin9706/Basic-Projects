import React from "react";
import SearchBar from "../Component/SearchBar";
import Tabs from "../Component/Tabs";
import ResultGrid from "../Component/ResultGrid";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      {" "}
      <SearchBar />
      {query != "" ? (
        <div>
          {" "}
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
