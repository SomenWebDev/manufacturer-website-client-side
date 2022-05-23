import React from "react";
import notfound from "../../assets/image/404.jpg";
const NotFound = () => {
  return (
    <div className="flex h-screen">
      <div className="mx-auto mt-6">
        <h1 className="text-3xl text-center text-red-700 my-2">
          Page Not Found
        </h1>
        <img src={notfound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
