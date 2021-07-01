import React, { useState } from "react";

import SearchBar from "../components/SearchBar";

const RankingList = (props) => {
  return (
    <div>
      <div className="App-content">
        <SearchBar searchHandler={props.searchHandler} dummy={props.dummy}/>
        <h1>Ranking list</h1>
      </div>
    </div>
  );
};

export default RankingList;