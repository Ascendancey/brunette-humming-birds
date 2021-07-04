import React from "react";
import { useHistory } from 'react-router-dom';

import "./AbstractDoctorInfo.css"

import StarRating from "./StarRating";
import AvailabeTag from "./AvailableTag";

const AbstractDoctorInfo = (props) => {
  const history = useHistory();
  const infodata = props.info

  function detailpagedirect() {
    history.push({
      pathname: '/details',
      state: {info: infodata}
    })
  }

  return (
    <button className="abstactdoctor" onClick={detailpagedirect}>
      <div>
        <img className="propic" height="80" src={infodata.Propic} alt="ProfilePic" />
      </div>
      <div>
        <h2>{infodata.Name}</h2>        
        <div>
          <div>{infodata.Specialization}</div>
          <div>{infodata.Language}</div>
          <div>{infodata.Address.country}</div>
        </div>
      </div>
      <div className="ratingarea">
        <StarRating numberOfStars={infodata.Starnum} numberOfReviews={infodata.Reviewnum}/>
        <AvailabeTag status={props.info.Avastatus} />
      </div>
    </button>
  );
};

export default AbstractDoctorInfo;