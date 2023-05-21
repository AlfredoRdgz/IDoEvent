import React from "react";
import { GlobalContext } from "../app/context";
import { useContext } from "react";

export function DressCode({dressCodeDescription, dressCodeWomen, dressCodeMen, childrenAllowed}) {
  const GlobalStrings = useContext(GlobalContext);

  return (
    <div id="dressCode" className="container">
      <div className="row">
        <div
          className="col-12 text-center dress-code-description"
        >
          <div className="dress-code-description-container">
            <img
              alt="Dress code"
              className="dress-code-icon"
              src="https://pauyandres.com/img/web-pau_andres-07.png"
            />
            <h2>{GlobalStrings.DressCodeTitle}</h2>
            <p>{dressCodeDescription}</p>
            <b className="cochin">{GlobalStrings.WomenLabel}</b>
            <p>{dressCodeWomen}</p>
            <b className="cochin">{GlobalStrings.MenLabel}</b>
            <p>{dressCodeMen}</p>
            {childrenAllowed ? "" : <b className="cochin">{GlobalStrings.NoKidsLabel}</b>}
          </div>
        </div>
      </div>
    </div>
  );
}
