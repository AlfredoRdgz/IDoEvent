import React, { useState } from "react";

export function Countdown() {
  const date = new Date('2023-10-28T00:00:00').getTime();

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
      <div className="container w-100" style={{ padding: "0" }}>
        <div className="countdown-container">
          <div className="col-6 col-md-3 my-4" style={{ padding: "0px 5px" }}>
            <div className="countdown-time-container">
              <div style={{ margin: "auto" }}>
                <h2 className="time">{days}</h2>
                <p className="time-description">DÍAS</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-4" style={{ padding: "0px 5px" }}>
            <div className="countdown-time-container">
              <div style={{ margin: "auto" }}>
                <h2 className="time">{hours}</h2>
                <p className="time-description">HORAS</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-4" style={{ padding: "0px 5px" }}>
            <div className="countdown-time-container">
              <div style={{ margin: "auto" }}>
                <h2 className="time">{minutes}</h2>
                <p className="time-description">MINUTOS</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-4" style={{ padding: "0px 5px" }}>
            <div className="countdown-time-container">
              <div style={{ margin: "auto" }}>
                <h2 className="time">{seconds}</h2>
                <p className="time-description">SEGUNDOS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
