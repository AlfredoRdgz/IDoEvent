import React, { useContext } from "react";
import { GlobalContext } from "../app/context";
import { ItineraryEvent } from "./ItineraryEvent";

export function Itinerary() {
  const { LocalizedStrings, MasterProps } = useContext(GlobalContext);
  const { events } = MasterProps;

  return (
    <div id="itinerary" className="text-center">
      <h2>{LocalizedStrings.ItineraryTitle}</h2>
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
