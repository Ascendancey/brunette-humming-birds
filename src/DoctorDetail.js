import React from 'react';

import "./DoctorDetail.css";

import DoctorInfo from './components/DoctorInfo';
import BookCalendar from './components/BookCalendar';

const DoctorDetail = (props) => {
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
        <h1>Doctor Detail Page</h1>
        <div>
          <DoctorInfo info={infodata} />
        </div>
        <div>
          <BookCalendar info={infodata} />
        </div>
    </div>
  );
};

export default DoctorDetail;