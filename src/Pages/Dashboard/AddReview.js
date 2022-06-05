import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = "https://stormy-journey-50277.herokuapp.com/review";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">User Name:</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Comments:</span>
          </label>
          <input
            {...register("comments")}
            type="text"
            placeholder="Your Comments"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Reviews:</span>
          </label>
          <input
            {...register("ratings")}
            type="number"
            placeholder="Enter Your Ratings By 1 to 5"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" class="btn btn-outline btn-primary">
          Send Your Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
