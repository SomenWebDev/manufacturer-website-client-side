import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { productId } = useParams();

  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState({});
  const { name, _id, minimum, available, img, price } = product;

  // useEffect(() => {
  //     fetch("data.json").then(res=>res.json()).then(data=>setProduct(data))

  // }, []}
  return (
    <div>
      <h1>Product:{productId}</h1>
      <p>{user.displayName}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Purchase;
