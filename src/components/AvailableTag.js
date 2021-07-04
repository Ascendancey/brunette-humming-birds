import React, { useState } from "react";

const AvailabeTag = (props) => {
  const [status, setstatus] = useState(props.status) // 1: available now, 0: not available now

  return (
    <div className="availabletag">
      {status === 1?
        <img height="50" src={"image/availabletag.png"} alt="Aavailable Now" />
      : null}
    </div>
  );
};

export default AvailabeTag;
