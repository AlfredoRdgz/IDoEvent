import React, { useState, useContext } from "react";
import { GlobalContext } from "../app/context";

export function RSVP({rsvpQuestions}) {
  const GlobalStrings = useContext(GlobalContext);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [formSent, setFormSent] = useState(false);

  function createYesNoQuestion(inputData) {

    var yesInputId = inputData.title + GlobalStrings.YesLabel;
    var noInputId = inputData.title + GlobalStrings.NoLabel;

    return (
      <div className="container w-100 my-2" key={"yesno" + inputData.title}>
        <p>{inputData.title}</p>
        <div className="text-center" style={{ display: "flex" }}>
          <div className="rsvp-input-container" style={{ margin: "auto" }}>
            <label htmlFor={yesInputId}>{ GlobalStrings.YesLabel }</label>
            <input
              id={yesInputId}
              type="radio"
              name={inputData.name}
              value={inputData.value === GlobalStrings.YesLabel }
              required
              onClick={() => inputData.value = GlobalStrings.YesLabel }
            />
            <label htmlFor={noInputId}>{ GlobalStrings.NoLabel }</label>
            <input
              id={noInputId}
              type="radio"
              name={inputData.name}
              value={inputData.value === GlobalStrings.NoLabel}
              required
              onClick={() => inputData.value = GlobalStrings.NoLabel}
            />
          </div>
        </div>
      </div>
    );
  }

  function createShortInput(inputData) {
    return (
      <div className="container w-50 my-2" key={"input" + inputData.name}>
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
      <div className="container w-100 my-2" key={"textarea" + inputData.title}>
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
      <div className="container w-100 my-2" key={"select" + inputData.title}>
        <p>{inputData.title}</p>
        <select
          name={inputData.name}
          className="rsvp-input-gray w-100"
          placeholder={inputData.placeholder}
          required
          onChange={(event) => inputData.value = event.target.value}
          value={inputData.value}
          defaultValue="">
          <option value="" disabled>{inputData.placeholder}</option>
          {range.map((number) => <option value={number} key={inputData.name + number}>{number}</option>)}
        </select>
      </div>
    );
  }

  function createOptionList(inputData) {
    return (
      <div className="container my-2" key={"options" + inputData.title}>
        <p>{inputData.title}</p>
        <div className="text-center" style={{ display: "flex" }}>
          <div className="row" style={{ margin: "auto", justifyContent: "center" }}>
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
      const response = await fetch(`https://i-do-backend.onrender.com/rsvp/confirmation`, requestContract);

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
        <h2>{GlobalStrings.RsvpTitle}</h2>
        <p style={{ margin: "20px", fontSize: "12px" }}>
          {GlobalStrings.RsvpSubtitle}<br/>{GlobalStrings.RsvpDescription}
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
          <button className="btn rsvp-btn" disabled={isRequestPending}>{GlobalStrings.RsvpButtonLabel}</button>
        </form>
      </div>


      <div className={formSent ? "rsvp-form-container text-center" : "rsvp-form-container text-center hidden"}>
        <h2>{GlobalStrings.RsvpConfirmationTitle}</h2>
        <p style={{ margin: "20px", fontSize: "12px" }}>
          {GlobalStrings.RsvpConfirmationDescription}
        </p>
      </div>
    </div>
  );
}
