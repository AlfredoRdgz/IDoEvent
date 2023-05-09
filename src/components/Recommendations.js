import React from "react";

export function Recommendations({recommendationsObject, containerClassName}) {

  const title = recommendationsObject.title;
  const description = recommendationsObject.description;
  const locations = recommendationsObject.locations;

  return (
    <div id={title} className={containerClassName}>
      <div className="container text-center">
        <h3 className="recommendation-title">{title}</h3>
        { description ? <p>{description}</p> : null }
      </div>

      <div className="row my-4 p-2 recommendations-container">
        {
          locations.map((location, index) => {
            return (
              <div className="col-12 col-sm-4 col-lg-2">
                <div className="recommendation-container">
                    <img className="my-2 recommendation-img" src={location.imageUrl} aria-label={location.name} />
                    <p className="my-2 text-center">{location.name}</p>
                    <div className="recommendation-btn-container">
                    <div className="row w-100">

                    <button className="recommendation-btn btn my-2">
                      <a href={location.redirectUrl} rel="noreferrer" target="_blank">VER MAPA</a>
                    </button>
                    </div>
                    </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
