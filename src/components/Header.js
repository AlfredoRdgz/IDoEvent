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
        </div>
        <div className={showMobileMenu ? "navbar show p-0 m-0" : "navbar-collapse collapse"}>
          <div className="menu row">
            <a onClick={() => setShowMobileMenu(false)} href="#descriptionSection">BODA</a>
            <a onClick={() => setShowMobileMenu(false)} href="#itinerarySection">ITINERARIO</a>
            <a onClick={() => setShowMobileMenu(false)} href="#dressCodeSection">DRESS CODE</a>
            <a onClick={() => setShowMobileMenu(false)} href="#wishlistSection">MESA DE REGALOS</a>
            <a onClick={() => setShowMobileMenu(false)} href="#rsvpSection">RSVP</a>
            <a onClick={() => setShowMobileMenu(false)} href="#recommendationsSection">RECOMENDACIONES</a>
          </div>
        </div>
      </nav>

      <nav id="header" className={`${transparent ? "transparent" : ""}`}>
        <div className="row">
          <div className="menu row">
            <a href="#descriptionSection">BODA</a>
            <a href="#itinerarySection">ITINERARIO</a>
            <a href="#dressCodeSection">DRESS CODE</a>
            <a href="#wishlistSection">MESA DE REGALOS</a>
            <a href="#rsvpSection">RSVP</a>
            <a href="#recommendationsSection">RECOMENDACIONES</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
