import React from "react";
import { DanielCristi } from "./templates/DanielCristi";

export function Landing() {
  const templateId = 1; 

  return (
    <div id="masterPage">
      {
        templateId === 1 ?
          <DanielCristi />
          : null
      }
    </div>
  );
}

