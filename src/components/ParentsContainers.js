import React from "react";

export function ParentsContainers({wed1Name1, wed1Name2, wed2Name1, wed2Name2}) {

  return (
    <div className="parents-row">
      <div className="parents-container">
        <p>{wed1Name1}<br/>{wed1Name2}</p>
      </div>
      <div className="parents-container">
        <p>{wed2Name1}<br/>{wed2Name2}</p>
      </div>
    </div>
  );
}
