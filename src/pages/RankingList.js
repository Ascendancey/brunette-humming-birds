import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import StarRating from "../components/StarRating";

const RankingList = (props) => {
  return (
    <div>
      <div className="App-content">
        <SearchBar searchHandler={props.searchHandler} dummy={props.dummy}/>
        <p>Example star rating:</p>
        <StarRating numberOfStars="4" />
        <h1>Ranking list</h1>
      </div>
    </div>
  );
};

export default RankingList;
