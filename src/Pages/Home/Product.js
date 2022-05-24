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
        <img class="object-cover h-56  w-full ..." src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>{minimum}</p>
        <p>{available}</p>
        <p>{price}</p>
        <div class="card-actions justify-center">
          <button onClick={() => handlePurchase(_id)} class="btn btn-secondary">
            Buy Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
