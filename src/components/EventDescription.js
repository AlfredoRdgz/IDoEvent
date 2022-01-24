import React from "react";
import { Link } from "react-router-dom";

export function EventDescription({ event }) {
  const eventName = event.locationName;
  const eventAddress = event.locationAddress;
  const eventTime = event.time;
  const mapUrl =
    "http://maps.google.com/maps?q=" + encodeURIComponent(eventAddress);

  return (
    <div className="event-description">
      <div>
        <p>{eventName}</p>
        <p>{eventAddress}</p>
        <b>{eventTime}</b>
      </div>
      <button className="btn">
        <Link to={mapUrl}>VER MAPA</Link>
      </button>
    </div>
  );
}
