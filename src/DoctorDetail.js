import React, { useState } from 'react';

import "./DoctorDetail.css";

import DoctorInfo from './components/DoctorInfo';

const DoctorDetail = (props) => {

  return (
    <div className="">
        <h1>Doctor Detail Page</h1>
        <div>
          <DoctorInfo />
        </div>
    </div>
  );
};

export default DoctorDetail;