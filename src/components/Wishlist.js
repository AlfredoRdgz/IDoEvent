import React from "react";

export function Wishlist() {

  const wishlistArray = [
    {
      image: "https://pauyandres.com/img/web-pau_andres-09.png",
      title: "Paulina Valencia Jiménes y Jorge Andrés Villa del Sordo",
      description: "Número de evento: 50481006",
      url: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/50481006",
    },
    {
      image: "https://pauyandres.com/img/web-pau_andres-10.png",
      title: "Pau y Andrés",
      description:
      "Da click en el botón de ver mesa y luego ingresa el CP 60201, Evanston para verificar disponibilidad de productos",
      url: "https://www.amazon.com.mx/wedding/share/danielycristi",
    },
    {
      image: "https://pauyandres.com/img/web-pau_andres-11.png",
      title: "Paulina Valencia Jiménes",
      description:
        "Número de cuenta: 1545521269. Cuenta CLABE:012180015455212692",
      url: "https://www.amazon.com.mx/wedding/share/danielycristi",
    },
  ];

  return (
    <div id="wishlist">
      <div className="container text-center">
        <h2>MESA DE REGALOS</h2>
        <p>Su presencia es nuestro mejor regalo, si deseas darnos un obsequio les compartimos nuestra mesa de regalos.</p>
        <img
          alt="Dress code"
          style={{ width: "50px", marginBottom: "20px" }}
          src="https://pauyandres.com/img/web-pau_andres-08.png"
        />
        <div className="row">
          {wishlistArray.map((wishlist) => {
            const className = "my-4 col-12 col-md-" + 12 / wishlistArray.length;

            return (
              <div
                key={wishlist.title}
                className={className}
              >
                <div className="wishlist-item">
                  <img alt={wishlist.title} src={wishlist.image} />
                  <div>
                    <p className="my-2 wishlist-title">{wishlist.title}</p>
                    <p className="my-2">{wishlist.description}</p>
                    <button className="wishlist-btn btn my-2">
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
