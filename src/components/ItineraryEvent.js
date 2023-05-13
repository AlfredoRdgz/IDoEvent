import React from "react";
import { EventDescription } from "./EventDescription";

export function ItineraryEvent({ event, isLeft }) {
  return (
    <div style={{ margin: "20px 0" }}>
      {isLeft ? (
        <div className="row">
          <img className="event-icon display-mobile" alt={event.title} src={event.icon} />
          <div className="itinerary-event event-left">
            <EventDescription event={event} />
          </div>

          <div className="itinerary-event-extras">
            <img className="event-icon" alt={event.title} src={event.icon} />
            <div
              className="event-image"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img alt={event.title} src={event.image} />
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="itinerary-event-extras">
            <div
              className="event-image"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img alt={event.title} src={event.image} />
            </div>
          </div>
          <img className="event-icon" alt={event.title} src={event.icon} />
          <div className="itinerary-event event-right">
            <EventDescription event={event} />
          </div>
        </div>
      )}
    </div>
  );
}
