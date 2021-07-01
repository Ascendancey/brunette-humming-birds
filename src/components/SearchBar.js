import React, { useState } from 'react';

import "./SearchBar.css";

const SearchBar = (props) => {

  return (
    <div className="SearchBar">
        {/* <p>{props.hi}</p> */}
        <input 
        className="SearchBar-input"
        ></input>
        <button className="SearchBar-button">Search</button>
    </div>
  );
};

export default SearchBar;