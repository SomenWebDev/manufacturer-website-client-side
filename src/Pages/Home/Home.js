import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Products from "./Products";

import Summary from "./Summary";
import GetIntouch from "./GetIntouch";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>

      <Summary></Summary>

      <Review></Review>

      <GetIntouch></GetIntouch>
      <Footer></Footer>
    </div>
  );
};

export default Home;
