import React from "react";
import "../App.css";

export function Wishlist() {

  const wishlistArray = [
    {
      image: "https://danielycristi.com/images/web-boda-DanielyCristi-20.png",
      title: "Daniel Romo y Ana Cristina González Carballo",
      description: "Número de evento: 50819677",
      url: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/50819677",
    },
    {
      image: "https://danielycristi.com/images/web-boda-DanielyCristi-21.png",
      title: "Daniel y Cristi",
      description:
        "No olvides dar clic en la dirección de Ana Cristina González Carballo Chávez: Paseo de los laureles 229, el palomar secc bosques, Tlajomulco de Zúñiga, Jalisco, 45643",
      url: "https://www.amazon.com.mx/wedding/share/danielycristi",
    },
  ];

  return (
    <div id="wishlist">
      <div className="container text-center">
        <h2>MESA DE REGALOS</h2>
        <img
          alt="Dress code"
          style={{ width: "75px", marginBottom: "20px" }}
          src="https://danielycristi.com/images/web-boda-DanielyCristi-19.png"
        />
        <p>SU PRESENCIA ES NUESTRO MEJOR REGALO.<br /> SI DESEAS DARNOS UN OBSEQUIO LES COMPARTIMOS NUESTRA MESA DE REGALOS.</p>
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
        <p>Agradecemos que nos notifiquen si nos hacen llegar un regalo de Liverpool. Como sabrán, en ocasiones no entregan completo lo que ustedes con mucho cariño nos hicieron favor de regalarnos y nos gustaría agradecerles personalmente.</p>
      </div>
    </div>
  );
}
