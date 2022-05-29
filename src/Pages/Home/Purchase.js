import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { productId } = useParams();

  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState({});
  const { name, _id, minimum, available, img, price, description } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleOrder = (event) => {
    event.preventDefault();
    const order = {
      orderId: _id,
      toolName: name,
      toolImage: img,
      toolPrice: price,
      user: user.displayName,
      email: user.email,
      quantity: event.target.quantity.value,
      address: event.target.address.value,
      mobile: event.target.mobile.value,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
      });
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={img} alt="tool" class="max-w-sm rounded-lg shadow-2xl" />
          <p>Available:{available}</p>
        </div>
        <div>
          <h1 class="text-5xl font-bold">Book Your Order</h1>
          <form onSubmit={handleOrder}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                class="input input-bordered w-full max-w-xs"
                readonly
                required
              />
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                name="customer"
                class="input input-bordered w-full max-w-xs"
                readonly
                required
              />
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                class="input input-bordered w-full max-w-xs"
                placeholder="Your Address"
                name="address"
              />
              <label class="label">
                <span class="label-text">Mobile</span>
              </label>
              <input
                type="text"
                class="input input-bordered w-full max-w-xs"
                placeholder="Mobile"
                name="mobile"
                required
              />
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input
                type="number"
                class="input input-bordered w-full max-w-xs"
                placeholder="Quantity"
                name="quantity"
                required
              />
              <button class="btn btn-primary my-2">Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
