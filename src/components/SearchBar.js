import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import "./SearchBar.css";

const SearchBar = (props) => {
  const history = useHistory();
  
  const [inputValue, setInputValue] = useState({
    text: "",
    language: "English",
    city: "Munich",
    specialization: "General Practitioner",
    price: 20,
    rating: 5,
    availability: 2,
  });
  const inputHandler = (event) => {
    setInputValue((prevState) => {
      return {...prevState, text: event.target.value};
    });
  };

  const clickHandler = (event) => {
    console.log(inputValue);
    props.searchHandler(inputValue);
    history.push({
      pathname: '/rankinglist',
      state: {currentSearch: inputValue}
    })
  };

  const dummy = props.dummy;
  let langs = [];
  dummy.forEach((element) => {
    let langsCombined = langs.concat(element.language);
    langs = langs.concat(langsCombined);
  });

  const uniqueLangs = [...new Set(langs)];

  const setInputLang = (event) => {
    setInputValue((prevState) => {
      return {...prevState, language: event.target.value};
    })
  };

  const setInputCity = (event) => {
    setInputValue((prevState) => {
      return {...prevState, city: event.target.value};
    })
  };

  const setInputSpec = (event) => {
    setInputValue((prevState) => {
      return {...prevState, specialization: event.target.value};
    })
  };

  const setInputPrice = (event) => {
    setInputValue((prevState) => {
      return {...prevState, price: event.target.value};
    })
  };

  const setInputRating = (event) => {
    setInputValue((prevState) => {
      return {...prevState, rating: event.target.value};
    })
  };

  const setInputAvailability = (event) => {
    setInputValue((prevState) => {
      return {...prevState, availability: event.target.value};
    })
  };

  return (
    <div className="SearchBar">
      {/* <p>{inputValue}</p> */}
      <input className="SearchBar-input" onChange={inputHandler}></input>
      <button className="SearchBar-button" onClick={clickHandler}>
        Search
      </button>
      <select
      onChange = {setInputLang}
      >
        {uniqueLangs.map((item, i) => {
          return <option key={i}> {item} </option>;
        })}
      </select>
      <select
      onChange={setInputCity}
      >
        {props.dummy.map((item, i) => {
          return <option key={i}> {item.location.city} </option>;
        })}
      </select>

      <select
      onChange={setInputSpec}
      >
        {props.dummy.map((item, i) => {
          return <option key={i}> {item.specialization} </option>;
        })}
      </select>
      <div>
        <label>Price range:</label>
        <select
        onChange={setInputPrice}
        >
          {props.dummy.map((item, i) => {
            return <option key={i}> {item.price} </option>;
          })}
        </select>
        <label>Rating:</label>
        <select
        onChange={setInputRating}
        >
          {props.dummy.map((item, i) => {
            return <option key={i}> {item.rating} </option>;
          })}
        </select>
      </div>
      <div>
        <label>Available in (hours):</label>
        <select
        onChange={setInputAvailability}
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
