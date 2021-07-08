import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// import "./DoctorDetail.css";

import DoctorInfo from "../components/DoctorInfo";
import BookCalendar from "../components/BookCalendar";
import Reviewsection from "../components/Reviewsection";

const DoctorDetail = (props) => {
  const location = useLocation();
  const [infodata, setinfodata] = useState(location.state.info);

  const infodatatemplate = {
    Name: "Dr. Oliver",
    Propic: "image/DefaultDoctorProfileImage.jpg",
    Specialization: "Cardiologists",
    Language: "English, German",
    Phone: "+49 56326987541",
    Email: "droliver@g.com",
    Address: {
      country: "Germany",
      city: "Munich",
      street: "Kaufingerstr",
      house: "1a",
    },
    Selfintro:
      "Hello, I am Dr. Oliver. xxxxxxxxxx. xxxxxxxxxxxxxx. xxxxxxxxxxxxxxx. xxxxxxxxx.",
    Starnum: "4",
    Reviewnum: "3",
  };

  const reviewdatatemplate = [
    {
      id: 1,
      Name: "Brunette",
      Propic: "image/caticon.png",
      Title: "Title of review",
      KnowledgeStarnum: "4",
      HelpfulnessStarnum: "5",
      Content: "Content of Review",
    },
  ];

  let randomreview = generatereview(infodata.Reviewnum);

  return (
    <div className="App-content">
      <DoctorInfo info={infodata} />
      <BookCalendar info={infodata} />
      {/* <h2>Review</h2> */}
      <Reviewsection info={randomreview} />
    </div>
  );
};

function generatereview(reviewnum) {
  const contenttemplate = [
    "The services that I receive from doctor is excellent. doctor and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.",
    "Doctor did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly.",
    "Wonderful experience. Doctor was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up.",
    "Doctor is incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment.",
    "Great medical office, wonderful and warm experience from start to finish. Appreciate doctor taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.",
  ];
  const reviewtitle = [
    "Very Good Doctor",
    "Wonderful Experience",
    "Helpful and Kind",
    "Recommended",
    "Excellent Service",
  ];
  let reviewdata = [];
  for (let i = 0; i < reviewnum; i++) {
    let knum = 3 + Math.floor(Math.random() * 2);
    let hnum = 3 + Math.floor(Math.random() * 2);
    reviewdata.push({
      id: i,
      Name: "Brunette",
      Propic: "image/caticon.png",
      Title: reviewtitle[Math.floor(Math.random() * 4)],
      KnowledgeStarnum: knum.toString(),
      HelpfulnessStarnum: hnum.toString(),
      Content: contenttemplate[Math.floor(Math.random() * 4)],
    });
  }
  return reviewdata;
}

export default DoctorDetail;
