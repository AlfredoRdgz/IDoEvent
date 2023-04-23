import React from "react";
import { Header } from "../../components/Header";
import { Countdown } from "../../components/Countdown";
import { Itinerary } from "../../components/Itinerary";
import { DressCode } from "../../components/DressCode";
import { Wishlist } from "../../components/Wishlist";
import { RSVP } from "../../components/RSVP";
import { Gallery } from "../../components/Gallery";

export function DanielCristi() {
  const bannerImage = "https://pauyandres.com/img/web-pau_andres-03.jpg";

  return (
    <div id="template">
      <div className="banner-container">
        <Header />
        <img src={bannerImage} alt="Pau & Andrés"/>
      </div>
      <Countdown />
      <Itinerary />
      <DressCode />
      <Wishlist />
      <RSVP/>
      <Gallery />
    </div>
  );
}
