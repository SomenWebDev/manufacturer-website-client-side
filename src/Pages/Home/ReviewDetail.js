import React from "react";

const ReviewDetail = ({ review }) => {
  const { name, comments, ratings } = review;
  console.log(review);
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p></p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
