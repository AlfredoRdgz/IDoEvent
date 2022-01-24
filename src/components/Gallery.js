import React from "react";
import "../App.css";

export function Gallery() {
  const title = "DANIEL & CRISTI";

  const galleryImages = [
    "http://danielycristi.com/images/web-boda-Danielycristi-25.png",
    "http://danielycristi.com/images/web-boda-Danielycristi-29_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-32_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-33.png",
    "http://danielycristi.com/images/web-boda-Danielycristi-38_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-44_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-26_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-27_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-30.png",
    "http://danielycristi.com/images/web-boda-Danielycristi-34_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-37.png",
    "http://danielycristi.com/images/web-boda-Danielycristi-39_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-28.png",
    "http://danielycristi.com/images/web-boda-Danielycristi-31.png",
    "http://danielycristi.com/images/web-boda-Danielycristi-35_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-36_opt.jpg",
    "http://danielycristi.com/images/web-boda-Danielycristi-40.png",
  ];

  return (
    <div id="gallery">
      <div className="row p-4">
        <div className="col-12 col-md-4 p-2">
          <img className="gallery-image" alt={title} src={galleryImages[0]} />
          <img className="gallery-image" alt={title} src={galleryImages[1]} />
          <img className="gallery-image" alt={title} src={galleryImages[2]} />
          <img className="gallery-image" alt={title} src={galleryImages[3]} />
          <img className="gallery-image" alt={title} src={galleryImages[4]} />
          <img className="gallery-image" alt={title} src={galleryImages[5]} />
        </div>
        <div className="col-12 col-md-4 p-2">
          <img className="gallery-image" alt={title} src={galleryImages[6]} />
          <img className="gallery-image" alt={title} src={galleryImages[7]} />
          <img className="gallery-image" alt={title} src={galleryImages[8]} />
          <img className="gallery-image" alt={title} src={galleryImages[9]} />
          <img className="gallery-image" alt={title} src={galleryImages[10]} />
          <img className="gallery-image" alt={title} src={galleryImages[11]} />
        </div>
        <div className="col-12 col-md-4 p-2">
          <img className="gallery-image" alt={title} src={galleryImages[12]} />
          <img className="gallery-image" alt={title} src={galleryImages[13]} />
          <img className="gallery-image" alt={title} src={galleryImages[14]} />
          <img className="gallery-image" alt={title} src={galleryImages[15]} />
          <img className="gallery-image" alt={title} src={galleryImages[16]} />
        </div>
      </div>
      <h2 className="cursive text-center">Daniel & Cristi</h2>
      <p className="text-center mb-4">2022 | DANIEL Y CRISTI | Made by IDoEvent</p>
    </div>
  );
}
