import React, { useState } from "react";

export function RSVP() {

  const [isRequestPending, setIsRequestPending] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const rsvpQuestions = [
    {
      name: "attending",
      title: "¿Asistirás a nuestra boda? *",
      type: "yesNoQuestion",
      value: "Si"
    },
    {
      name: "name",
      placeholder: "Nombre *",
      type: "text"
    },
    {
      name: "phone",
      placeholder: "Teléfono *",
      type: "text"
    },
    {
      name: "guestCount",
      title: "¿Cuántos invitados asistirán a la boda? *",
      type: "selectCount",
      placeholder: "Referencia mostrada en la invitación previamente enviada",
      min: 0,
      max: 6
    },
    {
      name: "guestNames",
      title: "Nombre(s) de invitado(s) *",
      type: "textarea",
      placeholder: "Ingrese el nombre completo de todos los invitados que asistirán",
    },
    {
      name: "drinks",
      title: "¿Qué les gustaría tomar?",
      type: "option",
      options: [{ value: "Tequila", isChecked: false }, { value: "Ron", isChecked: false }, { value: "Vodka", isChecked: false }, { value: "Whiskey", isChecked: false }]
    }
  ];

  function createYesNoQuestion(inputData) {

    var yesInputId = inputData.title + "Yes";
    var noInputId = inputData.title + "No";

    return (
      <div className="container w-100 my-2">
        <p>{inputData.title}</p>
        <div className="text-center" style={{ display: "flex" }}>
          <div className="rsvp-input-container" style={{ margin: "auto" }}>
            <label htmlFor={yesInputId}>Si</label>
            <input
              id={yesInputId}
              type="radio"
              name={inputData.name}
              value={inputData.value === "Si"}
              required
              onClick={() => inputData.value = "Si"}
            />
            <label htmlFor={noInputId}>No</label>
            <input
              id={noInputId}
              type="radio"
              name={inputData.name}
              value={inputData.value === "No"}
              required
              onClick={() => inputData.value = "No"}
            />
          </div>
        </div>
      </div>
    );
  }

  function createShortInput(inputData) {
    return (
      <div className="container w-50 my-2">
        <input
          name={inputData.name}
          type={inputData.type}
          className="rsvp-input-gray w-100"
          placeholder={inputData.placeholder}
          required
          onChange={(event) => inputData.value = event.target.value}
          value={inputData.value}
        />
      </div>
    );
  }

  function createTextArea(inputData) {
    return (
      <div className="container w-100 my-2">
        <p>{inputData.title}</p>
        <textarea
          name={inputData.name}
          type={inputData.type}
          rows={2}
          className="rsvp-input-gray w-100"
          placeholder={inputData.placeholder}
          required
          onChange={(event) => inputData.value = event.target.value}
          value={inputData.value}
        />
      </div>
    );
  }

  function createSelectCount(inputData) {

    var range = [];

    for (var i = inputData.min; i < inputData.max; i++) {
      range.push(i);
    }

    return (
      <div className="container w-100 my-2">
        <p>{inputData.title}</p>
        <select
          name={inputData.name}
          className="rsvp-input-gray w-100"
          placeholder={inputData.placeholder}
          required
          onChange={(event) => inputData.value = event.target.value}
          value={inputData.value}>
          <option value="" selected disabled>{inputData.placeholder}</option>
          {range.map((number) => <option value={number} key={number}>{number}</option>)}
        </select>
      </div>
    );
  }

  function createOptionList(inputData) {
    return (
      <div className="container my-2">
        <p>{inputData.title}</p>
        <div className="text-center" style={{ display: "flex" }}>
          <div className="row" style={{ margin: "auto" }}>
            {inputData.options.map((option) =>
              <div key={option.value} className="p-2">
                <label htmlFor={option.value + "Option"} className="p-2">{option.value}</label>
                <input
                  className="p-2"
                  id={option.value + "Option"}
                  type="checkbox"
                  name={option.value}
                  value={option.isChecked}
                  onClick={() => option.isChecked = !option.isChecked}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }


  async function sendForm(event) {
    event.preventDefault();
    setIsRequestPending(true);

    var userAnswers = [];
    for (var i = 0; i < rsvpQuestions.length; i++) {
      var options = rsvpQuestions[i].options ? rsvpQuestions[i].options.filter((option) => option.isChecked).map((filteredOption) => filteredOption.value) : null;

      var answerObject = {
        title: rsvpQuestions[i].title || rsvpQuestions[i].placeholder,
        value: rsvpQuestions[i].value || JSON.stringify(options)
      }
      userAnswers.push(answerObject);
    }

    var requestContract = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ answers: userAnswers })
    }

    try {
      const response = await fetch(`https://i-do-backend.herokuapp.com/rsvp/confirmation`, requestContract);

      if (response.status === 200) {
        setFormSent(true);
      } else {
        alert("Error al enviar el formulario. Intente más tarde.");
      }
    } catch (err) {
      alert("Error en el servidor. Intente más tarde.");
    }

    setIsRequestPending(false);
  }

  return (
    <div id="rsvp" className="container">
      <div className={formSent ? "rsvp-form-container text-center hidden" : "rsvp-form-container text-center"}>
        <h2>CONFIRMA TU ASISTENCIA</h2>
        <p style={{ margin: "20px", fontSize: "12px" }}>
          ¡QUEREMOS COMPARTIR ESTE MOMENTO TAN ESPERADO CONTIGO! <br /> POR
          FAVOR AYÚDANOS CONFIRMANDO TU ASISTENCIA Y SE PARTE DE NUESTRO GRAN
          DÍA.
        </p>

        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={sendForm}>

          <div className="row">
            {
              rsvpQuestions.map((question) => {
                switch (question.type) {
                  case "text":
                  case "phone":
                    return createShortInput(question);
                  case "yesNoQuestion":
                    return createYesNoQuestion(question);
                  case "textarea":
                    return createTextArea(question);
                  case "selectCount":
                    return createSelectCount(question);
                  case "option":
                    return createOptionList(question);
                  default:
                    return null;
                }
              })
            }
          </div>
          <button className="btn btn-gray" disabled={isRequestPending}>ENVIAR CONFIRMACIÓN</button>
        </form>

        <p className="hashtag" style={{ margin: "20px 0px", fontSize: "12px" }}>
          NO OLVIDES USAR EL HASHTAG #DANIELYCRISTI
          #DANIELUGIVEHERALIFEFULLOFADVENTURES
        </p>
      </div>


      <div className={formSent ? "rsvp-form-container text-center" : "rsvp-form-container text-center hidden"}>
        <h2>HEMOS CONFIRMADO TU ASISTENCIA</h2>
        <p style={{ margin: "20px", fontSize: "12px" }}>
          Gracias por llenar el formulario. Hemos recibido el correo de confirmación de manera exitosa y se ha concluido con tu registro para la boda. ¡Te esperamos!
        </p>
      </div>

      <h2 className="cursive text-center"> Always and truly yours forever</h2>
    </div>
  );
}
