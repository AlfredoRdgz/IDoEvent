import React from "react";
import { PauAndres } from "./templates/PauAndres";

export function Landing() {
  const templateId = 1; 

  return (
    <div id="masterPage">
      {
        templateId === 1 ?
          <PauAndres />
          : null
      }
    </div>
  );
}

