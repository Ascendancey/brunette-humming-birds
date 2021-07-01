import React, { useState } from "react";

import SearchBar from "../components/SearchBar";

const Home = (props) => {
  return (
    <div>
      <div className="App-content">
        <h1 className="App-header">
          Hello, {props.dummy && props.dummy[0].name}
        </h1>
        <SearchBar searchHandler={props.searchHandler}/>
      </div>
      <div className="App-content">
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
            .map((entries) => <p key={entries.id}>{entries.name}</p>)}
      </div>
    </div>
  );
};

export default Home;
