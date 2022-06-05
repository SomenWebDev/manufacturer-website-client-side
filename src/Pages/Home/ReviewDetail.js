import React from "react";

const ReviewDetail = ({ review }) => {
  const { name, ratings, comments } = review;
  console.log(review);
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-xl">Name: {name}</h2>
        <p className="text-xl font-bold">{comments}</p>
        <p className="text-xl  font-bold">Rating:{ratings}</p>
      </div>
    </div>
  );
};

export default ReviewDetail;
