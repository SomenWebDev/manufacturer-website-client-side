import React from "react";

import tool from "../../assets/image/tools.jpg";
const Banner = () => {
  const bannerBg = {
    background: `url(${tool})`,
    height: "300px",
  };

  return (
    <div class="hero min-h-screen" style={bannerBg}>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5 font-bold italic text-2xl">
            Welcome to Woodworkers.We are the trusted manufacturer of the
            carpentary tools for 2 decades
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
