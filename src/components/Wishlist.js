import React from "react";
import "../App.css";

export function Wishlist() {
  const whishlistDescription =
    "SU PRESENCIA ES NUESTRO MEJOR REGALO. SI DESEAS DARNOS UN OBSEQUIO LES COMPARTIMOS NUESTRA MESA DE REGALOS.";
  const wishlistArray = [
    {
      image: "http://danielycristi.com/images/web-boda-DanielyCristi-20.png",
      title: "Daniel Romo y Ana Cristina González Carballo",
      description: "Número de evento: 50481006",
      url: "",
    },
    {
      image: "http://danielycristi.com/images/web-boda-DanielyCristi-21.png",
      title: "Daniel y Cristi",
      description:
        "Da clic en el botón de ver mesa y luego ingresa el CP 60201, Evanston para verificar disponibilidad de productos",
      url: "",
    },
  ];

  return (
    <div id="wishlist">
      <div className="container text-center">
        <h2>MESA DE REGALOS</h2>
        <img
          alt="Dress code"
          style={{ width: "75px" }}
          src="http://danielycristi.com/images/web-boda-DanielyCristi-19.png"
        />
        <p>{whishlistDescription}</p>
        <div className="row">
          {wishlistArray.map((wishlist) => {
            const className = "my-4 col-12 col-md-" + 12 / wishlistArray.length;

            return (
              <div
                key={wishlist.title}
                className={className}
                style={{ display: "flex" }}
              >
                <div className="wishlist-item">
                  <img alt={wishlist.title} src={wishlist.image} />
                  <div>
                    <p className="my-2">{wishlist.title}</p>
                    <p className="my-2">{wishlist.description}</p>
                    <button className="btn my-2">
                      <a href={wishlist.url} rel="noreferrer" target="_blank">VER MESA</a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
