import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./app/context";
import SpanishStrings from "./strings/strings_es.json";

const GlobalStrings = SpanishStrings;

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext.Provider value={GlobalStrings}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
