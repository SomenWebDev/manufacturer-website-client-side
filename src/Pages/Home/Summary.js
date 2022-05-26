import React from "react";

const Summary = () => {
  return (
    <div className=" text-center my-5">
      <div class="stats stats-vertical lg:stats-horizontal  w-full">
        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">35</div>
          <div class="stat-desc"> Countries</div>
        </div>

        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">535+</div>
          <div class="stat-desc">Complete Project</div>
        </div>

        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">273+</div>
          <div class="stat-desc">Happy Clients</div>
        </div>
        <div class="stat">
          <div class="stat-title"></div>
          <div class="stat-value">432+</div>
          <div class="stat-desc">Feedbacks</div>
        </div>
      </div>
      <div class="stats shadow-2xl w-full">
        <div class="stat">
          <div class="stat-title">Account balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title">Current balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm">Withdrawal</button>
            <button class="btn btn-sm">deposit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
