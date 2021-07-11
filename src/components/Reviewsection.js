import React, { useState } from 'react';

import "./Reviewsection.css";

import Reviewslot from './Reviewslot';

const Reviewsection = (props) => {
  const infodata = props.info
  const [reviewslot, setreviewslot] = useState(insertdata(infodata))

  return (
    <div className="reviewSection">
      {reviewslot}
    </div>
  );
};

function insertdata(data) {
  let rslot = []
  for (let i=0; i<data.length; i++) {
    rslot.push(<Reviewslot id={data[i].id} key={data[i].id} info={data[i]}/>)
  }
  return rslot
}

export default Reviewsection;