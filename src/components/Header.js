import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav id="header" className="row">
      <img
        className="header-logo"
        alt="DanielYCristi"
        src="http://danielycristi.com/images/web-boda-DanielyCristi-13.png"
      />
      <div className="menu row">
        <a href="#banner">BODA</a>
        <a href="#itinerary">ITINERARIO</a>
        <a href="#dressCode">DRESS CODE</a>
        <a href="#wishlist">MESA DE REGALOS</a>
        <a href="#rsvp">RSVP</a>
        <a href="#gallery">GALERÍA</a>
      </div>
    </nav>
  );
}
