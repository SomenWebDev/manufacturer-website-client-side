import React, { useEffect, useState } from "react";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://stormy-journey-50277.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewDetail review={review}></ReviewDetail>
      ))}
    </div>
  );
};

export default Review;
