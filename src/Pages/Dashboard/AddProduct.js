import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/product").then((res) => res.json())
  );

  const imageStorageKey = "5dab6e8f78b78ad5ff45b92b33ccd812";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            minimum: data.minimum,
            available: data.available,
            price: data.price,
            img: img,
          };
          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product Added Successfully");
              } else {
                toast.error("Failed to add the product");
              }
            });
          reset();
        }
        console.log("imgbb", result);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-10">
      <h2 className="text-2xl">Add Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Product</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description"
            class="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="available"
            class="input input-bordered w-full max-w-xs"
            {...register("available", {
              required: {
                value: true,
                message: "Quantity is Required",
              },
            })}
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Minimum Quantity</span>
          </label>
          <input
            type="number"
            placeholder="minimum"
            class="input input-bordered w-full max-w-xs"
            {...register("minimum", {
              required: {
                value: true,
                message: "Quantity is Required",
              },
            })}
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            class="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Available Quantity"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Quantity is Required",
              },
            })}
          />
        </div>

        <input
          className="btn w-full max-w-xs mt-2 "
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
