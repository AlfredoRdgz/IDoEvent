import React from "react";

export function EventDescription({ event }) {
  const eventTitle = event.title;
  const eventLocationName = event.locationName;
  const eventAddress = event.locationAddress;
  const eventTime = event.time;
  const mapUrl =
    "https://maps.google.com/maps?q=" + encodeURIComponent(eventAddress);

  return (
    <div className="event-description">
      <div>
        <p className="display-mobile">{eventTitle}</p>
        <p>{eventLocationName}</p>
        <p>{eventAddress}</p>
        <b>{eventTime}</b>
      </div>
      <button className="btn">
        <a href={mapUrl} rel="noreferrer" target="_blank">VER MAPA</a>
      </button>
    </div>
  );
}
