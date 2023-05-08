import React from "react";
import { ItineraryEvent } from "./ItineraryEvent";

export function Itinerary() {
  const events = [
    {
      title: "Ceremonia",
      icon: "https://pauyandres.com/img/web-pau_andres-05.png",
      image:
        "https://danielycristi.com/images/web-boda-Danielycristi-05_opt.jpg",
      locationName: "Parroquia San Juan Macías",
      locationAddress:
        "Av. Acueducto #5451 Puerta de Hierro 45116, Zapopan, Jalisco",
      time: "2:00 PM",
    },
    {
      title: "Recepción",
      icon: "https://pauyandres.com/img/web-pau_andres-06.png",
      image:
        "https://danielycristi.com/images/web-boda-Danielycristi-06_opt.jpg",
      locationName: "Lago del Rey",
      locationAddress:
        "Av Ramón Corona #5243, 45201 Guadalajara, Jalisco",
      locationUrl: "https://goo.gl/maps/2K9Ruoo8Uq86jkqi8",
      time: "3:30 PM",
    }
  ];

  return (
    <div id="itinerary" className="text-center">
      <h2> ITINERARIO</h2>
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
