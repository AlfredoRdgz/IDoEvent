import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../app/context";

export function Header() {
  const { MasterProps } = useContext(GlobalContext);
  const { navigationLinks } = MasterProps;

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setTransparent(window.pageYOffset < 50)
      );
    }
  }, []);

  return (
    <div>
      <nav id="headerMobile">
        <div className="navbar-header">
          <button type="button" className="menu-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className={showMobileMenu ? "navbar show p-0 m-0" : "navbar-collapse collapse"}>
          <div className="menu row">
            {navigationLinks.map((link, index) => {
              return <a key={"mobileHeader" + index} onClick={() => setShowMobileMenu(false)} href={link.href}>{link.label}</a>
            })}
          </div>
        </div>
      </nav>

      <nav id="header" className={`${transparent ? "transparent" : ""}`}>
        <div className="row">
          <div className="menu row">
            {navigationLinks.map((link, index) => {
              return <a key={"header" + index} href={link.href}>{link.label}</a>
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
