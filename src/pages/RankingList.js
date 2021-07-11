import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import AbstractDoctorInfo from "../components/AbstractDoctorInfo";

const RankingList = (props) => {
  const location = useLocation();
  const [currentSearch, setcurrentSearch] = useState(location.state.currentSearch)
  
  const absdoctortemplate = [
    {
      "id": 1,
      "Name": "Dr. Oliver",
      "Propic": "image/DefaultDoctorProfileImage.jpg",
      "Specialization": "Cardiologists",
      "Language": "English, German",
      "Phone": "+49 56326987541",
      "Email": "droliver@g.com",
      "Address": {
        "country": "Germany",
        "city": "Munich",
        "street": "Kaufingerstr",
        "house": "1a",
      },
      "Selfintro": "Hello, I am Dr. Oliver. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx.",
      "Starnum": "4",
      "Reviewnum": "3",
      "Avastatus": 1
    },
    {
      "id": 2,
      "Name": "Dr. Harry",
      "Propic": "image/DefaultDoctorProfileImage.jpg",
      "Specialization": "Cardiologists",
      "Language": "English, German",
      "Phone": "+49 56326987541",
      "Email": "droliver@g.com",
      "Address": {
        "country": "Germany",
        "city": "Munich",
        "street": "Kaufingerstr",
        "house": "1a",
      },
      "Selfintro": "Hello, I am Dr. Harry. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx. Xxxxxxxxxxxxxxx. xxxxxxxxx.",
      "Starnum": "4",
      "Reviewnum": "3",
      "Avastatus": 0
    }
  ]

  const [ranklist, setranklist] = useState(absdoctortemplate)

  return (
    <div className="App-content">
        <SearchBar searchHandler={props.searchHandler} dummy={props.dummy}/>
      <div>
        {/* <h1>Ranking list</h1> */}
        <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
          {arrangelist(ranklist)}
        </div>
        
      </div>
    </div>
  );
};

function arrangelist(data) {
  let rlist = []
  for (let i=0; i<data.length; i++) {
    rlist.push(<AbstractDoctorInfo id={data[i].id} key={data[i].id} info={data[i]}/>)
  }
  return rlist
}

export default RankingList;