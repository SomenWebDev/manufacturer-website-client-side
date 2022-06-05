import React, { useEffect, useState } from "react";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  //   useEffect(() => {
  //     fetch("https://stormy-journey-50277.herokuapp.com/order", {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         console.log("res", res);
  //         if (res.status === 401 || res.status === 403) {
  //           signOut(auth);
  //           localStorage.removeItem("accessToken");
  //           navigate("/");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setOrders(data);
  //       });
  //   }, []);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index}</th>
                <td>{order.toolName}</td>
                <td>{order.quantity}</td>
                <td>
                  <button type="submit" class="btn">
                    Paid
                  </button>
                </td>
                <td>
                  <button type="submit" class="btn">
                    Delete Product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
