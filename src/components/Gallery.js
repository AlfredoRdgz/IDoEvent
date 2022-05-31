import React, { useState } from "react";
import "../App.css";

export function Gallery() {
  const title = "DANIEL & CRISTI";

  const [selectedImageIndex, setSelectedImageIndex] = useState();
  const [openPopup, setOpenPopup] = useState(false);


  function setSelectedImage(index) {
    setSelectedImageIndex(index);
    setOpenPopup(true);
  }

  function nextImage() {
    if (selectedImageIndex + 1 < galleryImages.length) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      setSelectedImageIndex(0);
    }
  }

  function backImage() {
    if (selectedImageIndex - 1 > -1) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(galleryImages.length - 1);
    }
  }

  const galleryImages = [
    "https://danielycristi.com/images/web-boda-Danielycristi-25.png",
    "https://danielycristi.com/images/web-boda-Danielycristi-29_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-32_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-33.png",
    "https://danielycristi.com/images/web-boda-Danielycristi-38_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-44_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-26_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-27_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-30.png",
    "https://danielycristi.com/images/web-boda-Danielycristi-34_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-37.png",
    "https://danielycristi.com/images/web-boda-Danielycristi-39_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-28.png",
    "https://danielycristi.com/images/web-boda-Danielycristi-31.png",
    "https://danielycristi.com/images/web-boda-Danielycristi-35_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-36_opt.jpg",
    "https://danielycristi.com/images/web-boda-Danielycristi-40.png",
  ];

  return (
    <div id="gallery">
      <div className="row p-4">
        <div className="col-12 col-md-4 p-2">
          <img className="gallery-image" alt={title} src={galleryImages[0]} onClick={() => setSelectedImage(0)} />
          <img className="gallery-image" alt={title} src={galleryImages[1]} onClick={() => setSelectedImage(1)} />
          <img className="gallery-image" alt={title} src={galleryImages[2]} onClick={() => setSelectedImage(2)} />
          <img className="gallery-image" alt={title} src={galleryImages[3]} onClick={() => setSelectedImage(3)} />
          <img className="gallery-image" alt={title} src={galleryImages[4]} onClick={() => setSelectedImage(4)} />
          <img className="gallery-image" alt={title} src={galleryImages[5]} onClick={() => setSelectedImage(5)} />
        </div>
        <div className="col-12 col-md-4 p-2">
          <img className="gallery-image" alt={title} src={galleryImages[6]} onClick={() => setSelectedImage(6)} />
          <img className="gallery-image" alt={title} src={galleryImages[7]} onClick={() => setSelectedImage(7)} />
          <img className="gallery-image" alt={title} src={galleryImages[8]} onClick={() => setSelectedImage(8)} />
          <img className="gallery-image" alt={title} src={galleryImages[9]} onClick={() => setSelectedImage(9)} />
          <img className="gallery-image" alt={title} src={galleryImages[10]} onClick={() => setSelectedImage(10)} />
          <img className="gallery-image" alt={title} src={galleryImages[11]} onClick={() => setSelectedImage(11)} />
        </div>
        <div className="col-12 col-md-4 p-2">
          <img className="gallery-image" alt={title} src={galleryImages[12]} onClick={() => setSelectedImage(12)} />
          <img className="gallery-image" alt={title} src={galleryImages[13]} onClick={() => setSelectedImage(13)} />
          <img className="gallery-image" alt={title} src={galleryImages[14]} onClick={() => setSelectedImage(14)} />
          <img className="gallery-image" alt={title} src={galleryImages[15]} onClick={() => setSelectedImage(15)} />
          <img className="gallery-image" alt={title} src={galleryImages[16]} onClick={() => setSelectedImage(16)} />
        </div>
      </div>
      <div className={openPopup ? "gallery-popup-container" : "hidden"}>
        <button className="btn gallery-popup-btn" onClick={() => setOpenPopup(false)}>X</button>
        <button className="btn gallery-popup-back" onClick={() => backImage()}>&lt;</button>
        <button className="btn gallery-popup-next" onClick={() => nextImage()}>&gt;</button>
        <div className="gallery-popup-image" alt={title} style={{ backgroundImage: selectedImageIndex !== undefined ? "url(" + galleryImages[selectedImageIndex] + ")" : "" }} />
      </div>
      <h2 className="cursive text-center">Daniel & Cristi</h2>
      <p className="text-center mb-4">2022 | DANIEL Y CRISTI | Made by <a type="link" href="https://www.instagram.com/puntodoce.mx/" target="_blank" rel="noreferrer">PuntoDoce.mx</a></p>
    </div>
  );
}
