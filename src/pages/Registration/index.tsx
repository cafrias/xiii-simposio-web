import React from "react";

import "./Registration.sass";

import Section from "../../components/Section";

const Registration: React.FunctionComponent = () => (
  <Section
    id="registration"
    name="Inscripción"
    className="background_white registration-container"
  >
    <article className="how-to mobile-pad">
      <h2>¿Cómo inscribirse?</h2>
      <p className="text-container">
        Llene el <a href="#subs_form">formulario de inscripción</a> y nos
        pondremos en contacto con usted a la brevedad.
      </p>
      <p className="text-container">
        Cualquier consulta puede ser dirigida a:{" "}
        <a href="mailto:ponencias.simposio@gmail.com">
          ponencias.simposio@gmail.com
        </a>
      </p>
    </article>
  </Section>
);

export default Registration;
