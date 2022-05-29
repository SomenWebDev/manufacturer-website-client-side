import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Products from "./Products";
import Review from "./Review";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>

      <Summary></Summary>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
