import React from "react";

const Product = ({ product }) => {
  const { name, img, description, minimum, available, price } = product;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>{minimum}</p>
        <p>{available}</p>
        <p>{price}</p>
        <div class="card-actions justify-center">
          <button class="btn btn-secondary">Buy Products</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
