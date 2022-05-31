import React, { useEffect, useState } from "react";

export function Header() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setTransparent(window.pageYOffset < 50)
      );
    }
  }, []);

  return (
    <div>
      <nav id="headerMobile">
        <div className="navbar-header">
          <button type="button" className="menu-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#banner">
            <img
              className="header-logo"
              alt="DanielYCristi"
              src="https://danielycristi.com/images/web-boda-DanielyCristi-13.png"
            />
          </a>
        </div>
        <div className={showMobileMenu ? "navbar show p-0 m-0" : "navbar-collapse collapse"}>
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

      <nav id="header" className={`${transparent ? "transparent" : ""}`}>
        <div className="row">
          <a href="#banner">
            <img
              className="header-logo"
              alt="DanielYCristi"
              src="https://danielycristi.com/images/web-boda-DanielyCristi-13.png"
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
    </div>
  );
}
