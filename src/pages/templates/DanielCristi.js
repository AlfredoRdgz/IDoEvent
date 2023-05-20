import React from "react";
import "../../styles/DanielCristi.css";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Countdown } from "../../components/Countdown";
import { Itinerary } from "../../components/Itinerary";
import { DressCode } from "../../components/DressCode";
import { Wishlist } from "../../components/Wishlist";
import { RSVP } from "../../components/RSVP";
import { Gallery } from "../../components/Gallery";
import { ParentsContainers } from "../../components/ParentsContainers";
import { Description } from "../../components/Description";

export function DanielCristi() {
  const bannerImage =
    "https://danielycristi.com/images/web-boda-DanielyCristi-13.png";
  const backgroundImage1 =
    "url('https://danielycristi.com/images/web-boda-Danielycristi-04_opt.jpg')";

  return (
    <div id="template">
      <div className="banner-container">
        <Header />
        <Banner bannerImage={bannerImage} />
      </div>
      <Description/>
      <Countdown />
      <ParentsContainers/>
      <div style={{ backgroundImage: backgroundImage1 }} className="intermediate-banner"></div>
      <Itinerary />
      <DressCode />
      <Wishlist />
      <RSVP/>
      <Gallery />
    </div>
  );
}