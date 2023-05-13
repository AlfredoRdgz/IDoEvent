import React from "react";

export function DressCode() {
  const dressCodeDescription = "RIGUROSO FORMAL";
  const dressCodeWomen = "Vestido midi o cocktail";
  const dressCodeMen = "Traje y corbata";
  const childrenAllowed = true;

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
            <h2>DRESS CODE</h2>
            <p>{dressCodeDescription}</p>
            <b className="cochin">MUJERES:</b>
            <p>{dressCodeWomen}</p>
            <b className="cochin">HOMBRES:</b>
            <p>{dressCodeMen}</p>
            {childrenAllowed ? "" : <b className="cochin">NO NIÑOS</b>}
          </div>
        </div>
      </div>
    </div>
  );
}
