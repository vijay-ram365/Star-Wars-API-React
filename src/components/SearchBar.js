import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <h1>The Star Wars API</h1>
      <h2>Make A Selection:</h2>
      <select
        onChange={(e) => {
          props.childToParent(e.target.value);
        }} // gets lifted to App component
        name="selectList"
        id="selectList"
        defaultValue="default"
      >
        <option value="default" disabled>
          Make a selection
        </option>
        <option value="starships">Starships</option>
        <option value="vehicles">Land Vehicles</option>
      </select>
    </div>
  );
};

export default SearchBar;
