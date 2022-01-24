import React from "react";
import { EventDescription } from "./EventDescription";

export function ItineraryEvent({ event, isLeft }) {
  return (
    <div style={{ margin: "20px 0" }}>
      {isLeft ? (
        <div className="row">
          <div className="itinerary-event event-left">
            <EventDescription event={event} />
          </div>
          <img className="event-icon" alt={event.title} src={event.icon} />
          <div
            className="event-image"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <p className="event-title">{event.title}</p>
            <img alt={event.title} src={event.image} />
          </div>
        </div>
      ) : (
        <div className="row">
          <div
            className="event-image"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img alt={event.title} src={event.image} />
            <p className="event-title">{event.title}</p>
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
