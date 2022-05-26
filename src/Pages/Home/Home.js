import React from "react";
import Footer from "../Shared/Footer";
import Products from "./Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Products></Products>
      <Summary></Summary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
