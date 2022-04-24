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


  function sendForm() {
    
  }

  return (
    <div id="rsvp" className="container">
      <div className="rsvp-form-container text-center">
        <h2>CONFIRMA TU ASISTENCIA</h2>
        <p style={{ margin: "20px", fontSize: "12px" }}>
          ¡QUEREMOS COMPARTIR ESTE MOMENTO TAN ESPERADO CONTIGO! <br /> POR
          FAVOR AYÚDANOS CONFIRMANDO TU ASISTENCIA Y SE PARTE DE NUESTRO GRAN
          DÍA.
        </p>

        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={sendForm}>
          <p>¿Asistirás a nuestra boda? *</p>
          <div className="text-center my-2" style={{ display: "flex" }}>
            <div className="rsvp-input-container" style={{ margin: "auto" }}>
              <label htmlFor="attendingYes">Si</label>
              <input
                id="attendingYes"
                type="radio"
                name="attending"
                value={true}
                required
                onClick={() => setAttending(true)}
              />
              <label htmlFor="attendingNo">No</label>
              <input
                it="attendingNo"
                type="radio"
                name="attending"
                value={false}
                required
                onClick={() => setAttending(false)}
              />
            </div>
          </div>
          <div className="text-center my-2" style={{ display: "flex" }}>
            <div className="rsvp-input-container" style={{ margin: "auto" }}>
              <input
                type="text"
                className="rsvp-input-gray"
                placeholder="Nombre *"
                required
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <input
                type="phone"
                className="rsvp-input-gray"
                placeholder="Teléfono *"
                required
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="text-center my-2">
            <p>¿Cuántos invitados asistirán a la boda? *</p>
            <input
              className="rsvp-input-invisible w-100"
              type="number"
              placeholder="Referencia mostrada en la invitación previamente enviada"
              value={attendees}
              required
              min={0}
              onChange={(event) => setAttendees(event.target.value)}
            />
          </div>
          <div className="text-center my-2">
            <p>¿Qué te gustaría tomar?</p>
            <div className="text-center my-2" style={{ display: "flex", justifyContent: "center"}}>
              <div className="rsvp-checkbox-container">
                <input
                  id="tequila"
                  type="checkbox"
                  checked={wantsTequila}
                  onChange={() => setWantsTequila(!wantsTequila)}
                />
                <label htmlFor="tequila">Tequila</label>
              </div>
              <div className="rsvp-checkbox-container">
                <input
                  id="rum"
                  type="checkbox"
                  checked={wantsRum}
                  onChange={() => setWantsRum(!wantsRum)}
                />
                <label htmlFor="rum">Ron</label>
              </div>
              <div className="rsvp-checkbox-container">
                <input
                  id="vodka"
                  type="checkbox"
                  checked={wantsVodka}
                  onChange={() => setWantsVodka(!wantsVodka)}
                />
                <label htmlFor="vodka">Vodka</label>
              </div>
              <div className="rsvp-checkbox-container">
                <input
                  id="whiskey"
                  type="checkbox"
                  checked={wantsWhiskey}
                  onChange={() => setWantsWhiskey(!wantsWhiskey)}
                />
                <label htmlFor="whiskey">Whiskey</label>
              </div>
            </div>
          </div>
          <button className="btn btn-gray">ENVIAR CONFIRMACIÓN</button>
        </form>
        <p style={{ margin: "20px", fontSize: "12px" }}>
          NO OLVIDES USAR EL HASHTAG #DANIELYCRISTI
          #DANIELUGIVEHERALIFEFULLOFADVENTURES
        </p>
      </div>

      <h2 className="cursive text-center"> Always and truly yours forever</h2>
    </div>
  );
}
