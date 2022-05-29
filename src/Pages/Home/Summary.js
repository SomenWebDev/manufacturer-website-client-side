import React from "react";

const Summary = () => {
  return (
    <div className="my-5">
      <div class="stats stats-vertical lg:stats-horizontal shadow text-center w-full">
        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">
            <h1 className="text-3xl">72</h1>
          </div>
          <div class="stat-desc">
            <h3 className="text-xl text-green-400">Countries</h3>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">
            <h1 className="text-3xl">535</h1>
          </div>
          <div class="stat-desc">
            <h3 className="text-xl text-green-400">Project</h3>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">
            <h1>273+</h1>
          </div>
          <div class="stat-desc">
            <h3 className="text-xl text-green-400">Happy Clients</h3>
          </div>
        </div>
        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">
            <h1>432+</h1>
          </div>
          <div class="stat-desc">
            <h3 className="text-xl text-green-400">Feedbacks</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
