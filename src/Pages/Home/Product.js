import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, description, minimum, available, price } = product;
  const navigate = useNavigate();
  const handlePurchase = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img class="object-cover w-full" src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-red-400">{name}</h2>
        <p className="text-red-400 font-bold">{description}</p>
        <p className="text-red-400  font-bold">Minimum Order:{minimum}Pc</p>
        <p className="text-red-400  font-bold">
          Available in stock:{available} Pc
        </p>
        <p className="text-red-400  font-bold">Price:BDT{price}</p>
        <div class="card-actions justify-center">
          <button
            onClick={() => handlePurchase(_id)}
            class="btn btn-secondary  w-full"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
