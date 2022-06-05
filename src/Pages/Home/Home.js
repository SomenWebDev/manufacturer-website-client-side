import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Products from "./Products";

import Summary from "./Summary";
import GetIntouch from "./GetIntouch";
import Review from "./Review";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>

      <Summary></Summary>

      <Review></Review>

      <Contact></Contact>

      <GetIntouch></GetIntouch>
      <Footer></Footer>
    </div>
  );
};

export default Home;
