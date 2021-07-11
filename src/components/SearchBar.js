import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import "./SearchBar.css";

const SearchBar = (props) => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState({
    text: "",
    language: "English",
    city: "Munich",
    specialization: "Cardiologist",
    price: 100,
    rating: 4.5,
    availability: 2,
  });
  const inputHandler = (event) => {
    setInputValue((prevState) => {
      return { ...prevState, text: event.target.value };
    });
  };

  const clickHandler = (event) => {
    console.log(inputValue);
    props.searchHandler(inputValue);
    history.push({
      pathname: "/rankinglist",
      state: { currentSearch: inputValue },
    });
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
      return { ...prevState, language: event.target.value };
    });
  };

  const setInputCity = (event) => {
    setInputValue((prevState) => {
      return { ...prevState, city: event.target.value };
    });
  };

  const setInputSpec = (event) => {
    setInputValue((prevState) => {
      return { ...prevState, specialization: event.target.value };
    });
  };

  const setInputPrice = (event) => {
    setInputValue((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  };

  const setInputRating = (event) => {
    setInputValue((prevState) => {
      return { ...prevState, rating: event.target.value };
    });
  };

  const setInputAvailability = (event) => {
    setInputValue((prevState) => {
      return { ...prevState, availability: event.target.value };
    });
  };

  const [isFilters, setFilters] = useState(false);

  const showFilters = () => {
    setFilters(true);
  };

  const hideFilters = () => {
    setFilters(false);
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const useStylesInput = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "80%",
      },
    },
  }));

  const classesInput = useStylesInput();

  return (
    <div className="SearchBar">
      <div className="bigreak" />
      <div className="SearchField">
        <TextField
          className="SearchBar-input"
          id="standard-basic"
          label="What are you looking for?"
          onChange={inputHandler}
        />

        <button className="SearchBar-button" onClick={clickHandler}>
          Search
        </button>
      </div>

      <div className="bigreak" />

      {!isFilters && (
        <img
          className="showFilters"
          onClick={showFilters}
          src="../image/expand_blue.png"
        />
      )}
      {isFilters && (
        <div className="SearchBar-filters">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={inputValue.language}
              onChange={setInputLang}
              label="Language"
            >
              {uniqueLangs.map((item, i) => {
                return (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={inputValue.city}
              onChange={setInputCity}
              label="City"
            >
              {props.dummy.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.location.city}>
                    {item.location.city}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Specialization
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={inputValue.specialization}
              onChange={setInputSpec}
              label="Specialization"
            >
              {props.dummy.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.specialization}>
                    {item.specialization}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <div className="break" />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Price
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={inputValue.price}
              onChange={setInputPrice}
              label="City"
            >
              {props.dummy.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.price}>
                    {item.price}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Rating
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={inputValue.rating}
              onChange={setInputRating}
              label="Rating"
            >
              {props.dummy.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.rating}>
                    {item.rating}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Available in
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={inputValue.availability}
              onChange={setInputAvailability}
              label="Available in"
            >
              {props.dummy.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.availablein}>
                    {item.availablein}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {/* </div> */}
          <div className="break" />
          <img
            className="showFilters"
            onClick={hideFilters}
            src="../image/expand_blue_upsidedown.png"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
