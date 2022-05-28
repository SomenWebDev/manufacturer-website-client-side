import React from "react";

const Summary = () => {
  return (
    <div>
      <div class="stats stats-vertical lg:stats-horizontal shadow text-center">
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
      <div class="stats  text-primary-content max-w-full mx-auto">
        <div class="stat">
          <div class="stat-title">
            <h1 className="text-green-500 text-2xl font-bold">
              Have any question about us or get a products request
            </h1>
          </div>
          <div>
            <h3>Dont hesitate to contact us.</h3>
          </div>
        </div>

        <div class="stat">
          <div class="stat-actions ">
            <button class="btn btn-success mr-2">Request For Quote</button>
            <button class="btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
