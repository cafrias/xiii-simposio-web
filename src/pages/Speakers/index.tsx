import React from "react";

import "./Speakers.sass";

// COMPONENTS __________________________________________________________________
import Section from "../../components/Section";
import Speaker from "./Speaker";

// DATA ________________________________________________________________________
import speakers from "./data";

// componentDidMount() {
//   window.addEventListener('scroll', (e) => {
//     const should = this.refs._grid.getBoundingClientRect().top < (window.innerHeight/2)
//
//     if(should && !this.state.shouldAppear) {
//       console.log('triggered')
//       this.setState({
//         shouldAppear: true
//       })
//     }
//   })
// }

function Speakers() {
  return (
    <Section
      id="speakers"
      name="Disertantes"
      className="background_orange speakers"
    >
      <ul className="speakers__grid">
        {speakers.map((speaker, i) => (
          <Speaker key={i} {...speaker} />
        ))}
      </ul>
    </Section>
  );
}

export default Speakers;
