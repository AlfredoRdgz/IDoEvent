import React, { useContext } from "react";
import { GlobalContext } from "../app/context";

export function EventDescription({ event }) {
  const GlobalStrings = useContext(GlobalContext);
  const eventTitle = event.title;
  const eventLocationName = event.locationName;
  const eventAddress = event.locationAddress;
  const eventTime = event.time;
  const mapUrl = event.locationUrl ?
    event.locationUrl :
    "https://maps.google.com/maps?q=" + encodeURIComponent(eventAddress);

  return (
    <div className="event-description">
      <div>
        <p className="event-title">{eventTitle}</p>
        <p>{eventLocationName}</p>
        <p>{eventAddress}</p>
        <b className="cochin">{eventTime}</b>
      </div>
      <button className="btn itinerary-btn">
        <a href={mapUrl} rel="noreferrer" target="_blank">{GlobalStrings.MapButtonLabel}</a>
      </button>
    </div>
  );
}
