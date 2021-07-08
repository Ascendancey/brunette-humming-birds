import React, { useState } from "react";

import SearchBar from "../components/SearchBar";

const Home = (props) => {
  return (
        <SearchBar searchHandler={props.searchHandler} dummy={props.dummy} > </SearchBar>
  );
};

export default Home;

      {/* <div className="App-content">
        <button
          onClick={() =>
            props.addSomeHandler({ id: Math.random(), name: "Username" })
          }
        >
          Click me
        </button>
        {props.dummy &&
          props.dummy
            // .filter((comment) => comment.memeid === this.state.currentmeme._id)
            // .filter((entries) => entries.name === entries.name)
            .map((entries) => <p key={entries.id}>{entries.name}</p>)}
      </div> */}