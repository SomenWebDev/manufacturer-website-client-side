import React, { useEffect, useState } from "react";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // fetch("https://stormy-journey-50277.herokuapp.com/review")
    fetch("https://stormy-journey-50277.herokuapp.com/review")
      // fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className=" max-w-7xl mx-auto my-16">
      {/* {reviews.map((review) => (
        <ReviewDetail review={review}></ReviewDetail>
      ))} */}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewDetail review={review}></ReviewDetail>
        ))}
      </div>
    </div>
  );
};

export default Review;
