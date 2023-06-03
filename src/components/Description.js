import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../app/context";

export function Description() {
  const { MasterProps } = useContext(GlobalContext);
  const { title, date, description, descriptionIconUrl } = MasterProps;

  return (
    <div id="description">
      <div className="container my-4" style={{textAlign: 'center'}}>
        <img alt={title} src={descriptionIconUrl} style={{ width: '50px' }}/>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
