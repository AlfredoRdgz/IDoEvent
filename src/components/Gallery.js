import React, { useState } from "react";

export function Gallery() {
  const title = "PAU & ANDRÉS";

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
    "https://pauyandres.com/img/web-pau_andres-37.jpg",
    "https://pauyandres.com/img/web-pau_andres-38.jpg",
    "https://pauyandres.com/img/web-pau_andres-39.jpg"
  ];

  return (
    <div id="gallery">
      <div className="row p-4">
        <div className="col-12 col-md-4">
          <img className="gallery-image" alt={title} src={galleryImages[0]} onClick={() => setSelectedImage(0)} />
        </div>
        <div className="col-12 col-md-4">
          <img className="gallery-image" alt={title} src={galleryImages[1]} onClick={() => setSelectedImage(1)} />
        </div>
        <div className="col-12 col-md-4">
          <img className="gallery-image" alt={title} src={galleryImages[2]} onClick={() => setSelectedImage(2)} />
        </div>
      </div>
      <div className={openPopup ? "gallery-popup-container" : "hidden"}>
        <button className="btn gallery-popup-btn" onClick={() => setOpenPopup(false)}>X</button>
        <button className="btn gallery-popup-back" onClick={() => backImage()}>&lt;</button>
        <button className="btn gallery-popup-next" onClick={() => nextImage()}>&gt;</button>
        <div className="gallery-popup-image" alt={title} style={{ backgroundImage: selectedImageIndex !== undefined ? "url(" + galleryImages[selectedImageIndex] + ")" : "" }} />
    </div>
      <p className="text-center mb-4"> Pau & Andrés Made by <a type="link" href="https://www.instagram.com/puntodoce.mx/" target="_blank" rel="noreferrer">PuntoDoce.mx</a></p>
    </div>
  );
}
