import React from "react";

const MyPortfolio = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">My Name is Somen Singha</h1>
          <p class="py-6">My Email: somensingha18@gmail.com</p>

          <h3 class="text-5xl font-bold">List of Technology I have Knows</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVAscript</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Firebase</li>
            <li>Node</li>
            <li>Mongodb</li>
          </ul>
          <h1 class="text-5xl font-bold">My Projects</h1>
          <br />
          <a href="https://warehouse-management-cbc94.web.app/">
            Warehouse Management
          </a>
          <br />
          <a href="https://inventory-9096b.web.app/">Inventory</a>
          <br />
          <a href="https://dentist-portfolio.web.app/">Tooth Doctor</a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
