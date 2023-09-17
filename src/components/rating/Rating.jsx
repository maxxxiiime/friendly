import React from "react";
import starFull from "../../assets/star-full.svg";
import starGrey from "../../assets/star-inactive.svg";
import './rating.scss'

export default function rating(props) {
  const stars = [];
  const ratingValue = props.ratingValue;
  // console.log(ratingValue);

  for (let i = 0; i < 5; i++) {
    if (i < ratingValue) 
    stars.push(
    <img src={starFull} 
    alt="Stars rating full" 
    key={i}
    />);
    else 
    stars.push(
    <img src={starGrey} 
    alt="Stars rating grey" 
    key={i}
    />);
  }

  return(
    <div className="stars-rating">
        {stars}
    </div>
  )
}
