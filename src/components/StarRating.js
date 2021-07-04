import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; //Gets the star icon from react-icons lib
import styles from "./StarRating.module.css";

const StarRating = (props) => {

  return (
    <div> 
        <div className={styles.StarRatingWrapper}>
            {[...Array(Number(props.numberOfStars))].map((star) => {//Displays the number of stars that you want to display. Just pass the number as props
           return <FaStar className={styles.StarRating}/>
        })}
        </div>
        {props.numberOfReviews?
          <div className={styles.NumberOfReviewsWrapper}>
              <p className={styles.NumberOfReviews}>Review: {props.numberOfReviews}</p>{/*Displays the number of reviews, pass it through props*/}
          </div>
        : null}
    </div>
  );
}

// Parts of the code are from https://www.youtube.com/watch?v=eDw46GYAIDQ&ab_channel=EricMurphy

export default StarRating;


