import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Products from "./Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>

      <Summary></Summary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
