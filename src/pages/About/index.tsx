import React from "react";

import "./About.sass";

// PICTURES ____________________________________________________________________

import img01_900 from "./assets/about-pic@900.jpg";
import img01_1200 from "./assets/about-pic@1200.jpg";

import img02_900 from "./assets/about-pic-2@900.jpg";
import img02_1200 from "./assets/about-pic-2@1200.jpg";
import img02_1700 from "./assets/about-pic-2@1700.jpg";
import img02_2160 from "./assets/about-pic-2@2160.jpg";
import img02_2400 from "./assets/about-pic-2@2400.jpg";

// COMPONENTS __________________________________________________________________

import Section from "../../components/Section";

function About() {
  return (
    <Section
      id="about"
      name="¿Qué es el Simposio?"
      className="background_white about-container"
    >
      <div className="intro-container">
        <div className="about__portrait">
          <div className="about__pic-container">
            <img
              src={img01_900}
              srcSet={`
                ${img01_1200} 1200w
              `}
              className="about__pic"
              alt="participantes del simposio"
            />
          </div>
          <div className="about__pic-container about__pic-container--back">
            <img
              src={img02_900}
              srcSet={`
                ${img02_1200} 1200w,
                ${img02_1700} 1700w,
                ${img02_2160} 2160w,
                ${img02_2400} 2400w
              `}
              className="about__pic about__pic--back"
              alt="participantes del simposio"
            />
          </div>
        </div>
        <article className="introduction mobile-pad">
          <h2>Sobre el Simposio</h2>
          <div className="text-container">
            <p>
              El{" "}
              <strong>
                Simposio de Contabilidad y Auditoría del Extremo Sur
              </strong>
              , desde sus inicios en 2007, se propuso aprovechar el inspirador
              contexto que propone la ciudad de Ushuaia, con sus grandes
              atractivos naturales, para generar un espacio de debate y
              reflexión sobre temas de actualidad en las disciplinas que
              conforman el eje central del evento. De esta manera, los
              Profesores de la UBA, Ricardo Pahlen Acuña y Héctor Chyrikins,
              propusieron su creación a un grupo de docentes locales, los que
              decidieron otorgar todo su apoyo y brindar el máximo esfuerzo para
              la concreción de aquella primera edición y posterior consolidación
              a lo largo de los 10 años posteriores, con una frecuencia anual de
              encuentros durante la segunda quincena del mes de mayo.
            </p>
            <p>
              Desde aquel momento y hasta la presente edición, se han compartido
              brillantes conferencias, a cargo de prestigiosos profesionales y
              docentes del ámbito nacional e internacional, y se han presentado
              y expuesto un importante número de trabajos fruto de las
              investigaciones e indagaciones de los autores.
            </p>
            <p>
              El Simposio que se origina en la{" "}
              <em>
                Facultad de Ciencias Económicas de la Universidad Nacional de la
                Patagonia San Juan Bosco
              </em>
              , y que adoptara a partir de 2013 el Instituto de Desarrollo
              Económico e Innovación de la Universidad Nacional de Tierra del
              Fuego, Antártida e Islas del Atlántico Sur, se encuentra en el
              cronograma de eventos académicos de la Contabilidad y Auditoría a
              nivel nacional.
            </p>
            <p>
              Incrementar el alcance de los trabajos presentados en el Simposio,
              a través de la publicación de los mismos en formato digital, es
              uno de los objetivos estratégicos que se esperan concretar, junto
              con el incremento de la participación de estudiantes y docentes
              locales.
            </p>
            <p>
              Los premios que se otorgan a los mejores trabajos, constituyen un
              importante incentivo para generar una creciente calidad en la
              producción académico científica de los participantes.
            </p>
            <p>
              Es por todo esto que se invita a estudiantes, docentes e
              investigadores vinculados a la Contabilidad y la Auditoría y al
              público en general, a participar de este importante evento.
            </p>
          </div>
        </article>
      </div>
      <div className="intro-container">
        <article className="introduction mobile-pad">
          <h2>Sobre las Jornadas Universitarias de Contabilidad</h2>
          <div className="text-container">
            <p>
              Las <strong>Jornadas Universitarias de Contabilidad</strong> es el
              evento académico de la disciplina Contable y Auditoría más antiguo
              en el ámbito nacional.
            </p>
            <p>
              A lo largo de sus cuarenta ediciones anuales, las JUC itineraron
              por diferentes instituciones universitarias de todo el país,
              constituyéndose así en una expresión federal de la difusión de los
              temas de actualidad que hacen a la temática.
            </p>
            <p>
              La gran participación de docentes y estudiantes universitarios, le
              ha otorgado un reconocimiento y apropiación del evento a un gran
              número de seguidores que esperan anualmente su realización para
              compartir enriquecedoras experiencias en torno a las
              especialidades que aborda.
            </p>
            <p>
              El marco académico generado por los reconocidos expositores
              invitados, brindan la oportunidad a docentes y estudiantes para
              presentar sus trabajos académicos y vinculados a proyectos de
              investigación para ser validados ante la comunidad universitaria
              que participa de los eventos.
            </p>
            <p>
              Es así que este tradicional evento académico abre sus puestas con
              el apoyo de la universidad anfitriona para fomentar la excelencia
              académica en el ámbito de la Contabilidad y la Auditoría.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}

export default About;
