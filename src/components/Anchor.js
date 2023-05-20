import React from "react";

/** This class helps the navigation bar respect a margin that separates the menu and the div. */
export function Anchor({ name }) {
  return (
    <div className="container">
      <a className="anchor" name={name}/>
    </div>
  );
}