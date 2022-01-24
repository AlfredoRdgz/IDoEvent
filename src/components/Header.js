import React, { useEffect, useState } from "react";

export function Header() {

  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setTransparent(window.pageYOffset < 50)
      );
    }
  }, []);

  return (
    <nav id="header" className={`${transparent ? "transparent" : ""}`}>
      <div className="row">
        <a href="#banner">
          <img
            className="header-logo"
            alt="DanielYCristi"
            src="http://danielycristi.com/images/web-boda-DanielyCristi-13.png"
          />
        </a>
        <div className="menu row">
          <a href="#banner">BODA</a>
          <a href="#itinerary">ITINERARIO</a>
          <a href="#dressCode">DRESS CODE</a>
          <a href="#wishlist">MESA DE REGALOS</a>
          <a href="#rsvp">RSVP</a>
          <a href="#gallery">GALERÍA</a>
        </div>
      </div>
    </nav>
  );
}
