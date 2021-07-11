import React from 'react';

import "./DoctorInfo.css";

import StarRating from './StarRating';

const DoctorInfo = (props) => {
  const infodata = props.info
  const addstring = formataddress(infodata.Address)

  return (
    <div className="doctorInfo">
      <div className="infotoparea">
        <div>
          <img height="200" src={infodata.Propic} alt="ProfilePic" />
        </div>
        <div>
          <h2>{infodata.Name}</h2>        
          <div>
            <div>{infodata.Specialization}</div>
            <div>Language: {infodata.Language}</div>
            <div>Phone: {infodata.Phone}</div>
            <div>Email: {infodata.Email}</div>
            <div>Address: {addstring}</div>
          </div>
        </div>
        <div className="starratingarea">
          <StarRating numberOfStars={infodata.Starnum} numberOfReviews={infodata.Reviewnum}/>
        </div>
      </div>        
      <div>
         <p id="selfintro">{infodata.Selfintro}</p>
      </div>
    </div>
  );
};

function formataddress(address) {
  /*
  "Address": {
    "country": "Germany",
    "city": "Munich",
    "street": "Kaufingerstr",
    "house": "1a",
  }
  */
  let addstring = address.house + ", " + address.street + ", " + address.city + ", " + address.country
  return addstring
}

export default DoctorInfo;