import React, { useState } from "react";

export function RSVP() {
  const [attending, setAttending] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendees, setAttendees] = useState("");
  const [wantsTequila, setWantsTequila] = useState(false);
  const [wantsRum, setWantsRum] = useState(false);
  const [wantsVodka, setWantsVodka] = useState(false);
  const [wantsWhiskey, setWantsWhiskey] = useState(false);

  return (
    <div id="rsvp" className="container">
      <div className="rsvp-form-container text-center">
        <h2>CONFIRMA TU ASISTENCIA</h2>
        <p>
          {" "}
          ¡QUEREMOS COMPARTIR ESTE MOMENTO TAN ESPERADO CONTIGO! <br /> POR
          FAVOR AYÚDANOS CONFIRMANDO TU ASISTENCIA Y SE PARTE DE NUESTRO GRAN
          DÍA.
        </p>

        <form style={{ display: "flex", flexDirection: "column" }}>
          <p>¿Asistirás a nuestra boda?</p>
          <div className="row text-center my-2">
            <label for="attendingYes">Si</label>
            <input
              id="attendingYes"
              type="radio"
              name="attending"
              value={true}
              onClick={() => setAttending(true)}
            />
            <label for="attendingNo">No</label>
            <input
              it="attendingNo"
              type="radio"
              name="attending"
              value={false}
              onClick={() => setAttending(false)}
            />
          </div>
          <div className="row text-center my-2">
            <input
              type="text"
              placeholder="Nombre"
              required
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <input
              type="phone"
              placeholder="Teléfono"
              required
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
            />
          </div>
          <div className="text-center my-2">
            <p>¿Cuántos invitados asistirán a la boda?</p>
            <input
            className="w-100"
              type="number"
              placeholder="La cantidad de invitados se muestra en la invitación previamente enviada"
              value={attendees}
              required
              onChange={(event) => setAttendees(event.target.value)}
            />
          </div>
          <div className="text-center my-2">
            <p>¿Qué te gustaría tomar?</p>
            <div className="row text-center my-2">
              <div className="rsvp-checkbox-container col-12 col-md-3">
                <input
                  id="tequila"
                  type="checkbox"
                  checked={wantsTequila}
                  onChange={() => setWantsTequila(!wantsTequila)}
                />
                <label for="tequila">Tequila</label>
              </div>
              <div className="rsvp-checkbox-container col-12 col-md-3">
                <input
                  id="rum"
                  type="checkbox"
                  checked={wantsRum}
                  onChange={() => setWantsRum(!wantsRum)}
                />
                <label for="rum">Ron</label>
              </div>
              <div className="rsvp-checkbox-container col-12 col-md-3">
                <input
                  id="vodka"
                  type="checkbox"
                  checked={wantsVodka}
                  onChange={() => setWantsVodka(!wantsVodka)}
                />
                <label for="vodka">Vodka</label>
              </div>
              <div className="rsvp-checkbox-container col-12 col-md-3">
                <input
                  id="whiskey"
                  type="checkbox"
                  checked={wantsWhiskey}
                  onChange={() => setWantsWhiskey(!wantsWhiskey)}
                />
                <label for="whiskey">Whiskey</label>
              </div>
            </div>
          </div>
          <button className="btn">ENVIAR CONFIRMACIÓN</button>
        </form>
        <p className="mt-4">
          NO OLVIDES USAR EL HASHTAG #DANIELYCRISTI
          #DANIELUGIVEHERALIFEFULLOFADVENTURES
        </p>
      </div>

      <h2 className="cursive text-center"> Always and truly yours forever</h2>
    </div>
  );
}
