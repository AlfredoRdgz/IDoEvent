import React from "react";
import "../../styles/PauYAndres.css";
import { Header } from "../../components/Header";
import { Countdown } from "../../components/Countdown";
import { Itinerary } from "../../components/Itinerary";
import { DressCode } from "../../components/DressCode";
import { Wishlist } from "../../components/Wishlist";
import { RSVP } from "../../components/RSVP";
import { Recommendations } from "../../components/Recommendations";
import { Description } from "../../components/Description";
import { Anchor } from "../../components/Anchor";
import { GlobalContext } from "../../app/context";
import { ParentsContainers } from "../../components/ParentsContainers";
import { EnglishProps, SpanishProps } from "../../db/pauyandres";
import SpanishStrings from "../../strings/strings_es.json";
import EnglishStrings from "../../strings/strings_en.json";
import { useParams } from "react-router-dom";

export function PauAndres() {

  const {lang} = useParams();
  const MasterContent = {
    LocalizedStrings: lang === "en" ? EnglishStrings : SpanishStrings,
    MasterProps: lang === "en" ?  EnglishProps : SpanishProps
  };

  const { LocalizedStrings } = MasterContent;
  const { title, recommendations } = MasterContent.MasterProps;

  return (
    <GlobalContext.Provider value={MasterContent}>
      <div id="template">
        <Header />
        <Anchor name="descriptionSection"/>
        <Description />
        <ParentsContainers/>
        <Countdown />
        <Anchor name="itinerarySection"/>
        <Itinerary />
        <Anchor name="dressCodeSection"/>
        <DressCode />
        <Anchor name="wishlistSection"/>
        <Wishlist />
        <Anchor name="rsvpSection"/>
        <RSVP />
        <h2 className="text-center mb-4" id="recommendations">{LocalizedStrings.RecommendationsTitle}</h2>
        <Anchor name="recommendationsSection"/>
        <Recommendations recommendationsObject={recommendations[0]} containerClassName="gray-background"/>
        <Recommendations recommendationsObject={recommendations[1]}/>
        <Recommendations recommendationsObject={recommendations[2]} containerClassName="gray-background"/>
        <Recommendations recommendationsObject={recommendations[3]}/>
        <div className="row w-100">
          <img className="img" src="https://pauyandres.com/img/web-pau_andres-40.png" aria-label={title}/>
        </div>
        <div className="row w-100 my-4 text-center">
          <p style={{ margin: "auto" }}> {LocalizedStrings.MadeByLabel} <a type="link" href="https://www.instagram.com/puntodoce.mx/" target="_blank" rel="noreferrer"><img className="punto-12-img" src="https://pauyandres.com/img/web-pau_andres-41.png" alt={LocalizedStrings.PuntoDoceLabel} aria-label={LocalizedStrings.PuntoDoceLabel}/></a></p>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
