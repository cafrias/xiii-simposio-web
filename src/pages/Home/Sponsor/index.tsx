import React from "react";

import "./Sponsor.sass";

type SponsorProps = {
  logo: string;
  alt: string;
  small?: boolean;
};

function Sponsor({ logo, alt, small }: SponsorProps) {
  return (
    <li
      className={`sponsors__container ${
        small ? "sponsors__container--small" : ""
      }`}
    >
      <img className="sponsor__img" src={logo} alt={alt} />
    </li>
  );
}

export default Sponsor;
