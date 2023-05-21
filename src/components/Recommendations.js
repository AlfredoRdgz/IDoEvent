import React, { useContext } from "react";
import { GlobalContext } from "../app/context";

export function Recommendations({recommendationsObject, containerClassName}) {
  const GlobalStrings = useContext(GlobalContext);

  const title = recommendationsObject.title;
  const iconUrl = recommendationsObject.iconUrl;
  const description = recommendationsObject.description;
  const locations = recommendationsObject.locations;

  return (
    <div id={title} className={containerClassName + " recommendation-section"}>
      <div className="container text-center my-4">
        <img src={iconUrl} className="icon-img" alt={title}/>
        <h3 className="recommendation-title">{title}</h3>
        { description ? <p>{description}</p> : null }
      </div>

      <div className="row mb-4 p-2 recommendations-container">
        {
          locations.map((location, index) => {
            return (
              <div className="col-12 col-sm-4 col-lg-2" key={title + index}>
                <div className="recommendation-container">
                    <img className="my-2 recommendation-img" src={location.imageUrl} aria-label={location.name} />
                    <p className="my-2 text-center">{location.name}</p>
                    <div className="recommendation-btn-container">
                    <div className="row w-100">

                    <button className="recommendation-btn btn my-2">
                      <a href={location.redirectUrl} rel="noreferrer" target="_blank">{GlobalStrings.MapButtonLabel}</a>
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
