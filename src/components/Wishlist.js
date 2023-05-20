import React from "react";

export function Wishlist({description, wishlistArray}) {

  return (
    <div id="wishlist" className="gray-background">
      <div className="container text-center">
        <h2 className="mb-4">MESA DE REGALOS</h2>
        <p>{description}</p>
        <img
          alt="Dress code"
          style={{ width: "50px", marginBottom: "20px" }}
          src="https://pauyandres.com/img/web-pau_andres-08.png"
        />
        <div className="row">
          {wishlistArray.map((wishlist) => {
            const className = "my-4 p-4 col-12 col-md-" + 12 / wishlistArray.length;

            return (
              <div
                key={wishlist.title}
                className={className}
              >
                <div className="wishlist-item">
                  <div className="p-4">
                    <img className="my-2" alt={wishlist.title} src={wishlist.image} />
                    <div className="container my-4">
                      <p className="my-2 wishlist-title">{wishlist.title}</p>
                      <p className="my-2">{wishlist.description}</p>
                    </div>
                  </div>
                  <div className="wishlist-btn-container">
                    <button className="wishlist-btn btn">
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
