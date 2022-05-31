import React from "react";
import "../App.css";

export function Banner({ bannerImage }) {
  const title = "DANIEL & CRISTI";
  const date = "26 NOVIEMBRE 2022";

  return (
    <div
      id="banner"
      style={{
        backgroundImage:
          "url('https://danielycristi.com/images/web-boda-Danielycristi-03_opt.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-title-container">
        <div style={{ margin: "auto" }}>
          <h1 style={{ color: "white" }}> {title} </h1>
          <hr className="banner-division" />
          <p>{date}</p>
          <img className="banner-logo" alt="DanielYCristi" src={bannerImage} />
        </div>
      </div>
    </div>
  );
}
