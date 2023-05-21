import React, { useContext } from "react";
import { GlobalContext } from "../app/context";
import { ItineraryEvent } from "./ItineraryEvent";

export function Itinerary() {
  const GlobalStrings = useContext(GlobalContext);
  const events = [
    {
      title: "Ceremonia",
      icon: "https://pauyandres.com/img/web-pau_andres-05.png",
      image:
        "https://pauyandres.com/img/web-pau_andres-45.jpg",
      locationName: "Parroquia San Juan Macías",
      locationAddress:
        "Av. Acueducto #5451 Puerta de Hierro 45116, Zapopan, Jalisco",
      locationUrl: "https://goo.gl/maps/HEUQH9CHhoCngzcq7",
      time: "2:00 PM",
    },
    {
      title: "Recepción",
      icon: "https://pauyandres.com/img/web-pau_andres-06.png",
      image:
        "https://pauyandres.com/img/web-pau_andres-46.jpg",
      locationName: "Lago del Rey",
      locationAddress:
        "Av Ramón Corona #5243, 45201 Guadalajara, Jalisco",
      locationUrl: "https://goo.gl/maps/6euDA6mM2s9PBJZ1A",
      time: "3:30 PM",
    }
  ];

  return (
    <div id="itinerary" className="text-center">
      <h2>{GlobalStrings.ItineraryTitle}</h2>
      <div className="timeline">
        {events.map((event, index) => {
          return (
            <ItineraryEvent
              key={event.title}
              event={event}
              isLeft={(index + 1) % 2}
            />
          );
        })}
      </div>
    </div>
  );
}
