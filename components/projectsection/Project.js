import React from "react";

const Project = ({ article }) => {
  return (
    <div
      style={{
        width: "18rem",
        height: "auto",
        margin: "24px 24px 24px 24px",

        boxShadow: "-3px -3px 5px #ff0000, 3px 3px 15px #ff0000",
      }}
    >
      <div className="card" key={article.name}>
        <div>
          <img src="/foodhub.png" height="200px" width="100%" />
          <div className="card-body">
            <h3 className="card-title">{article.title}</h3>
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
