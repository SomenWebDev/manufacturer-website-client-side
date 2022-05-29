import React from "react";

const ReviewDetails = ({ review }) => {
  const { name, comments, ratings } = review;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{comments}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">{ratings}</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
