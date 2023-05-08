import React from "react";
import "../../styles/PauYAndres.css";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Countdown } from "../../components/Countdown";
import { Itinerary } from "../../components/Itinerary";
import { DressCode } from "../../components/DressCode";
import { Wishlist } from "../../components/Wishlist";
import { RSVP } from "../../components/RSVP";
import { Gallery } from "../../components/Gallery";

export function PauAndres() {
  const bannerImage = "https://pauyandres.com/img/web-pau_andres-03.jpg";

  return (
    <div id="template">
    <div className="banner-container">
      <Header />
      <Banner bannerImage={bannerImage} />
    </div>
      <Countdown />
      <Itinerary />
      <DressCode />
      <Wishlist />
      <RSVP/>
      <h2 className="text-center">RECOMENDACIONES</h2>
      <Gallery />
    </div>
  );
}
