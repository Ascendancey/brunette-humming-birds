import React from 'react';

import "./DoctorInfo.css";

const DoctorInfo = (props) => {
  const infodata = props.info

  return (
    <div>
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
            <div>Address: {infodata.Address}</div>            
          </div>
        </div>
        <div>
          Star Rating component
        </div>
      </div>        
      <div>
         <p>{infodata.Selfintro}</p>
      </div>
    </div>
  );
};

export default DoctorInfo;