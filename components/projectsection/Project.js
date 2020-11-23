import React from "react";

const Project = () => {
  return (
    <div
      style={{
        width: "18rem",
        height: "auto",

        margin: "24px 24px 24px 24px",

        boxShadow: "-3px -3px 5px #5ce1e6, 3px 3px 15px #5ce1e6",
      }}
    >
      <div className="card">
        <div>
          <img src="/foodhub.png" height="200px" width="100%" />
          <div className="card-body">
            <h3 className="card-title">The Weather Report</h3>
            <h6 className="card-text">
              This is a progressive weather app that gives you fiveday forecast
              of any location around the globe.
            </h6>
          </div>
          <div>
            <button className="btn">Live Site</button>
            <button className="btn">Git Repo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
