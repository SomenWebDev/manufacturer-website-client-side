import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const user = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?customer=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <h2>My Orders:{orders?.length}</h2>
    </div>
  );
};

export default MyOrders;
