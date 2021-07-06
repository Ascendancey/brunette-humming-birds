import React, { useState } from "react";

import SearchBar from "../components/SearchBar";

const Home = (props) => {
  return (
    <div>
      <div className="App-content">
        <h1 className="App-header">
          Hello, Jens
        </h1>
        <SearchBar searchHandler={props.searchHandler} dummy={props.dummy}/>
      </div>
      <div className="App-content">
      </div>
    </div>
  );
};

export default Home;
