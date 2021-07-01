import React, { useState } from 'react';

import "./DoctorDetail.css";

import DoctorInfo from './components/DoctorInfo';
import BookCalendar from './components/BookCalendar';

const DoctorDetail = (props) => {

  return (
    <div className="">
        <h1>Doctor Detail Page</h1>
        <div>
          <DoctorInfo />
        </div>
        <div>
          <BookCalendar />
        </div>
    </div>
  );
};

export default DoctorDetail;