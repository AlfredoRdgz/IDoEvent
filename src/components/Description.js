import React from "react";

export function Description({title, date, description}) {
  const imageUrl = "https://pauyandres.com/img/web-pau_andres-04.png";

  return (
    <div id="description">
      <div className="container my-4" style={{textAlign: 'center'}}>
        <img alt={title} src={imageUrl} style={{ width: '50px' }}/>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
