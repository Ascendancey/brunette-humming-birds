import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (event) => {
    setInputValue(() => {
      return event.target.value;
    });
  };

  const clickHandler = (event) => {
    props.searchHandler(inputValue);
  };

  const dummy = props.dummy;
  let langs = [];
  dummy.forEach((element) => {
    let langsCombined = langs.concat(element.language);
    langs = langs.concat(langsCombined);
  });

  const uniqueLangs = [...new Set(langs)];

  return (
    <div className="SearchBar">
      <p>{inputValue}</p>
      <input className="SearchBar-input" onChange={inputHandler}></input>
      <button className="SearchBar-button" onClick={clickHandler}>
        Search
      </button>
      <select
      // onChange={}
      >
        {uniqueLangs.map((item, i) => {
          return <option key={i}> {item} </option>;
        })}
      </select>
      <select
      // onChange={}
      >
        {props.dummy.map((item, i) => {
          return <option key={i}> {item.location.city} </option>;
        })}
      </select>

      <select
      // onChange={}
      >
        {props.dummy.map((item, i) => {
          return <option key={i}> {item.specialization} </option>;
        })}
      </select>
      <div>
        <label>Price range:</label>
        <select
        // onChange={}
        >
          {props.dummy.map((item, i) => {
            return <option key={i}> {item.price} </option>;
          })}
        </select>
        <label>Rating:</label>
        <select
        // onChange={}
        >
          {props.dummy.map((item, i) => {
            return <option key={i}> {item.rating} </option>;
          })}
        </select>
      </div>
      <div>
        <label>Available in (hours):</label>
        <select
        // onChange={}
        >
          {props.dummy.map((item, i) => {
            return <option key={i}> {item.availablein} </option>;
          })}
        </select>
      </div>
      <div>

      </div>
    </div>
  );
};

export default SearchBar;
