import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const [deletingProduct, setdeletingProduct] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/product", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-5">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product._key}
                product={product}
                index={index}
                refetch={refetch}
                setDeletingProduct={setdeletingProduct}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <DeleteConfirmModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setdeletingProduct={setdeletingProduct}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProduct;
