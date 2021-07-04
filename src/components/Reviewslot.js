import React from 'react';

import "./Reviewslot.css";

import StarRating from './StarRating';


const Reviewslot = (props) => {
  const infodata = props.info

  return (
    <div className="slotarea">
      <div className="propicarea">
        <img height="80" src={infodata.Propic} alt="ProfilePic" />
        <div className="name">{infodata.Name}</div>
      </div>
      <div className="stararea">
        <div className="title">{infodata.Title}</div>
        <div className="knowledgestar">
          <div>Knowledge</div>
          <StarRating numberOfStars={infodata.KnowledgeStarnum}/>
        </div>
        <div className="helpfulnessstar">
          <div>Helpfulness</div>
          <StarRating numberOfStars={infodata.HelpfulnessStarnum}/>
        </div>
        <div className="content">{infodata.Content}</div>
      </div>      
    </div>
  );
};

export default Reviewslot;