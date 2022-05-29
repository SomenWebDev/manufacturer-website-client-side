import React, { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <h1>xxsssfsdsafsaf</h1>
      {reviews.map((review) => (
        <ReviewDetails review={review} key={review._id}></ReviewDetails>
      ))}
    </div>
  );
};

export default Review;
