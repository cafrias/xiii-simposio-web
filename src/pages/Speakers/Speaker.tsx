import React from "react";

import "./Speaker.sass";

type SpeakerProps = {
  pic?: string;
  name: string;
  inst?: string;
};

function Speaker({ pic, name, inst }: SpeakerProps) {
  return (
    <li className="speaker">
      {pic ? (
        <img className="speaker__pic" src={pic} alt={`${name} portrait`} />
      ) : null}
      <h2 className="speaker__name">{name}</h2>
      {inst ? <p className="speaker__inst">{inst}</p> : null}
    </li>
  );
}

export default Speaker;
