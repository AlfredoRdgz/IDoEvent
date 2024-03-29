import React from "react";
import "../App.css";
import { ItineraryEvent } from "./ItineraryEvent";

export function Itinerary({ bannerImage }) {
  const events = [
    {
      title: "CEREMONIA",
      icon: "https://danielycristi.com/images/web-boda-DanielyCristi-15.png",
      image:
        "https://danielycristi.com/images/web-boda-Danielycristi-05_opt.jpg",
      locationName: "Parroquia San Juan Macías",
      locationAddress:
        "Av. Acueducto #5451 Puerta de Hierro 45116, Zapopan, Jalisco",
      time: "8:00 PM",
    },
    {
      title: "RECEPCIÓN",
      icon: "https://danielycristi.com/images/web-boda-DanielyCristi-17.png",
      image:
        "https://danielycristi.com/images/web-boda-Danielycristi-06_opt.jpg",
      locationName: "La Bendita Espacio Eventos",
      locationAddress:
        "Av.Circunvalación del Bosque #2001 Col. El Bajío, Zapopan, Jalisco",
      locationUrl: "https://goo.gl/maps/2K9Ruoo8Uq86jkqi8",
      time: "9:30 PM",
    },
    {
      title: "DESVELADOS",
      icon: "https://danielycristi.com/images/web-boda-DanielyCristi-16.png",
      image:
        "https://danielycristi.com/images/web-boda-Danielycristi-07_opt.jpg",
      locationName: "La Bendita Espacio Eventos",
      locationAddress:
        "Av.Circunvalación del Bosque #2001 Col. El Bajío, Zapopan, Jalisco",
      locationUrl: "https://goo.gl/maps/2K9Ruoo8Uq86jkqi8",
      time: "3:00 AM",
    },
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
