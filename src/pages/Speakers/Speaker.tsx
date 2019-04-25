import React from "react";

import "./Speaker.sass";

type SpeakerProps = {
  pic: string;
  name: string;
  inst: string;
};

function Speaker({ pic, name, inst }: SpeakerProps) {
  return (
    <li className="speaker">
      <img className="speaker__pic" src={pic} alt={`${name} portrait`} />
      <h2 className="speaker__name">{name}</h2>
      <p className="speaker__inst">{inst}</p>
    </li>
  );
}

export default Speaker;
