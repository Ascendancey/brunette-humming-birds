import React, { useState } from 'react';

import "./DoctorInfo.css";

const DoctorInfo = (props) => {
  const infodata = {
    "Name": "Dr. Oliver",
    "Propic": "image/DefaultDoctorProfileImage.jpg",
    "Specialization": "Cardiologists",
    "Language": "English, German",
    "Phone": "+49 56326987541",
    "Email": "droliver@g.com",
    "Address": "xxxxxxxxxxx, xxxxxxxxxx, xxxx, Germany",
    "Selfintro": "Hello, I am Dr. Oliver. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx."
  }

  return (
    <div className="">
        <div>
          <img src={infodata.Propic} alt="ProfilePic" />
        </div>
        <div>
          <h2>{infodata.Name}</h2>
        </div>
        <div>
          <div>{infodata.Specialization}</div>
          <div>Language: {infodata.Language}</div>
          <div>Phone: {infodata.Phone}</div>
          <div>Email: {infodata.Email}</div>
          <div>Address: {infodata.Address}</div>
          <p>{infodata.Selfintro}</p>
        </div>
        <div>
          Star Rating component
        </div>
    </div>
  );
};

export default DoctorInfo;