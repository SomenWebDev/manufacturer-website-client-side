import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="flex-auto">
      <div>
        <h1>{user.displayName}</h1>
        <h1>{user.email}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Education:</span>
          </label>
          <input
            {...register("education")}
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Location:</span>
          </label>
          <input
            {...register("location")}
            type="text"
            placeholder="Your Comments"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Phone Number:</span>
          </label>
          <input
            {...register("phone")}
            type="number"
            placeholder="Phone Number"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" class="btn btn-outline btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
