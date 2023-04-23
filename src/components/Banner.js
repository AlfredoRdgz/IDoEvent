import React from "react";
import "../App.css";

export function Banner({ bannerImage }) {
  const title = "PAULINA & JORGE ANDRÉS'";
  const date = "28 de octubre del 2023";

  return (
    <div
      id="banner"
      style={{
        backgroundImage:
          "url('https://pauyandres.com/img/web-pau_andres-03.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "60% 50%",
      }}
    >
      <div className="banner-title-container">
        <div style={{ margin: "auto" }}>
          <h1 style={{ color: "white" }}> {title} </h1>
          <hr className="banner-division" />
          <p>{date}</p>
          <img className="banner-logo" alt="Paulina & Jorge Andrés'" src={bannerImage} />
      </div>
      </div>
    </div>
  );
}
