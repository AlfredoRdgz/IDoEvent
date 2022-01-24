import React from "react";
import "../App.css";

export function DressCode() {
  const dressCodeDescription = "RIGUROSO ETIQUETA";
  const dressCodeImg =
    "http://danielycristi.com/images/web-boda-Danielycristi-08_opt.jpg";
  const dressCodeWomen = "Vestido largo liso, NO blanco";
  const dressCodeMen = "Traje completo y corbata, negro, azul o gris";
  const childrenAllowed = false;
  const dressCodeImg1 =
    "http://danielycristi.com/images/web-boda-Danielycristi-09.png";
  const dressCodeImg2 =
    "http://danielycristi.com/images/web-boda-Danielycristi-10.png";
  const dressCodeImg3 =
    "http://danielycristi.com/images/web-boda-Danielycristi-11.png";
  const dressCodeImg4 =
    "http://danielycristi.com/images/web-boda-Danielycristi-12.png";

  return (
    <div id="dressCode" className="container">
      <div className="row">
        <div
          className="col-12 col-md-6 text-center dress-code-description"
          style={{ display: "flex" }}
        >
          <div className="dress-code-description-container">
            <img
              alt="Dress code"
              style={{ width: "75px" }}
              src="http://danielycristi.com/images/web-boda-DanielyCristi-18.png"
            />
            <h2>DRESS CODE</h2>
            <p>{dressCodeDescription}</p>
            <b>MUJERES:</b>
            <p>{dressCodeWomen}</p>
            <b>HOMBRES:</b>
            <p>{dressCodeMen}</p>
            {childrenAllowed ? "" : <b>NO NIÑOS</b>}
            <div className="row">
              <div className="col-3">
                <img
                  className="dress-code-description-image"
                  alt="DressCodeImg1"
                  src={dressCodeImg1}
                />
              </div>
              <div className="col-3">
                <img
                  className="dress-code-description-image"
                  alt="DressCodeImg2"
                  src={dressCodeImg2}
                />
              </div>
              <div className="col-3">
                <img
                  className="dress-code-description-image"
                  alt="DressCodeImg3"
                  src={dressCodeImg3}
                />
              </div>
              <div className="col-3">
                <img
                  className="dress-code-description-image"
                  alt="DressCodeImg4"
                  src={dressCodeImg4}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6" style={{ margin: "auto" }}>
          <img
            className="dress-code-img-large"
            alt="DanielYCristi"
            src={dressCodeImg}
          />
        </div>
      </div>
    </div>
  );
}
