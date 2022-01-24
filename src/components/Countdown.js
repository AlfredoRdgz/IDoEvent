import React, { useEffect, useState } from "react";
import "../App.css";

export function Countdown() {
  const date = new Date(2022, 11, 26);

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = date - now;

  // Time calculations for days, hours, minutes and seconds
  const [days, setDays] = useState(
    Math.floor(distance / (1000 * 60 * 60 * 24))
  );
  var [hours, setHours] = useState(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  var [minutes, setMinutes] = useState(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  var [seconds, setSeconds] = useState(
    Math.floor((distance % (1000 * 60)) / 1000)
  );

  setTimeout(() => {
    // Get today's date and time
    now = new Date().getTime();

    // Find the distance between now and the count down date
    distance = date - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <div id="countdown">
      <img
        alt="DanielYCristi"
        src="http://danielycristi.com/images/web-boda-DanielyCristi-14.png"
        style={{ width: "50px" }}
      />
      <h2>WE ARE GETTING MARRIED</h2>
      <p>Uniremos nuestras vidas en matrimonio</p>

      <div className="container">
        <div className="row w-100">
          <div className="col-12 col-md-3 my-4">
            <div className="countdown-time-container">
              <h2 className="time">{days}</h2>
              <p className="time-description">DÍAS</p>
            </div>
          </div>
          <div className="col-12 col-md-3 my-4">
            <div className="countdown-time-container">
              <h2 className="time">{hours}</h2>
              <p className="time-description">HORAS</p>
            </div>
          </div>
          <div className="col-12 col-md-3 my-4">
            <div className="countdown-time-container">
              <h2 className="time">{minutes}</h2>
              <p className="time-description">MINUTOS</p>
            </div>
          </div>
          <div className="col-12 col-md-3 my-4">
            <div className="countdown-time-container">
              <h2 className="time">{seconds}</h2>
              <p className="time-description">SEGUNDOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
