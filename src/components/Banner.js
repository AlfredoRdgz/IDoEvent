import React from "react";

export function Banner({ bannerImage }) {
  const title = "PAULINA & JORGE ANDRÉS'";
  const date = "28 de octubre del 2023";

  return (
    <div
      id="banner"
      style={{
        backgroundImage:
          "url('https://pauyandres.com/img/web-pau_andres-03.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "52%",
      }}
    >
    </div>
  );
}
