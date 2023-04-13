import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

function App() {
  // data to pass to Card Component
  const [starWarsData, setStarWarsData] = useState([]);
  // data from Search Bar
  const [searchData, setSearchData] = useState("");
  const childToParent = (childdata) => {
    setSearchData(childdata);
  };

  // data from Star Wars API
  const fetchStarWarsData = async () => {
    const response =
      await fetch(`https://swapi.dev/api/${searchData.toString()}/
    `);
    if (!response.ok) {
      throw new Error("Data Not Available");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchStarWarsData()
      .then((res) => {
        setStarWarsData(res.results);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [searchData]); // rerender on selection changes

  return (
    <>
      <SearchBar childToParent={childToParent} />
      <Card starWarsData={starWarsData} />
      <a href="https://swapi.dev/" target="/">
        Link to the Star Wars API
      </a>
    </>
  );
}

export default App;
