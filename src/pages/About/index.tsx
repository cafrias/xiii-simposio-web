import React from "react";

import "./About.sass";

// PICTURES ____________________________________________________________________

import img01_900 from "./assets/about-pic@900.jpg";
import img01_1200 from "./assets/about-pic@1200.jpg";
import img01_1700 from "./assets/about-pic@1700.jpg";
import img01_2160 from "./assets/about-pic@2160.jpg";
import img01_2400 from "./assets/about-pic@2400.jpg";

import img02_900 from "./assets/about-pic-2@900.jpg";
import img02_1200 from "./assets/about-pic-2@1200.jpg";
import img02_1700 from "./assets/about-pic-2@1700.jpg";
import img02_2160 from "./assets/about-pic-2@2160.jpg";
import img02_2400 from "./assets/about-pic-2@2400.jpg";

// COMPONENTS __________________________________________________________________

import Section from "../../components/Section";
import Temario from "./Temario";

// DATA ________________________________________________________________________

import areas from "./areas";

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
                ${img01_1200} 1200w,
                ${img01_1700} 1700w,
                ${img01_2160} 2160w,
                ${img01_2400} 2400w
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
          <h2>Introducción</h2>
          <div className="text-container">
            <p>
              El Simposio de Contabilidad y Auditoría del Extremos Sur, desde
              sus inicios en 2007, se propuso aprovechar el inspirador contexto
              que propone la ciudad de Ushuaia, con sus grandes atractivos
              naturales, para generar un espacio de debate y reflexión sobre
              temas de actualidad en las disciplinas que conforman el eje
              central del evento. De esta manera, los Profesores de la UBA,
              Ricardo Pahlen Acuña y Héctor Chyrikins, propusieron su creación a
              un grupo de docentes locales, los que decidieron otorgar todo su
              apoyo y brindar el máximo esfuerzo para la concreción de aquella
              primera edición y posterior consolidación a lo largo de los 10
              años posteriores, con una frecuencia anual de encuentros durante
              la segunda quincena del mes de mayo.
            </p>
            <p>
              Desde aquel momento y hasta la presente edición, se han compartido
              brillantes conferencias, a cargo de prestigiosos profesionales y
              docentes del ámbito nacional e internacional, y se han presentado
              y expuesto un importante número de trabajos fruto de las
              investigaciones e indagaciones de los autores.
            </p>
            <p>
              El Simposio que se origina en la Facultad de Ciencias Económicas
              de la Universidad Nacional de la Patagonia San Juan Bosco, y que
              adoptara a partir de 2013 el Instituto de Desarrollo Económico e
              Innovación de la Universidad Nacional de Tierra del Fuego,
              Antártida e Islas del Atlántico Sur, se encuentra en el cronograma
              de eventos académicos de la Contabilidad y Auditoría a nivel
              nacional.
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
            {/* <p className="download-disclaimer">
              La publicación con todos los trabajos presentados en la presente edición del Simposio,
              titulada <em>Memorias del XI° Simposio de Contabilidad y Auditoría del Extremo Sur</em>, {' '}
              está disponible para descargar{' '}
              <a target="_blank" rel="noopener noreferrer"
                href="https://drive.google.com/open?id=0B7VKVU2ob_G2bUZCZ3V3TXdiTkk">
                Aquí
              </a>.
            </p> */}
            <footer className="about__more-info">
              <small>
                Más información:{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/open?id=17Z5EQhUtKSbZFGCrkhd4tDnoP6J3tFMG"
                >
                  Aquí
                </a>
              </small>
            </footer>
          </div>
        </article>
      </div>
      <hr />
      {/* <article className="about__old">
        <h2>Material XI Simposio</h2>
        <p>
          Puede descargar las <strong>ponencias</strong>,{" "}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/0B7VKVU2ob_G2bUZCZ3V3TXdiTkk/view"
          >
            aquí
          </a>
          .
        </p>
        <p>
          Puede descargar las <strong>diapositivas</strong> de las
          presentaciones,{" "}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/drive/folders/1gNoJfmoyBbtOuZ4ruKAM8KDZq_j0hPpe"
          >
            aquí
          </a>
          .
        </p>
      </article>
      <hr /> */}
      <div className="about__content">
        <article className="temario">
          <h2>Temario</h2>
          <div className="temario-grid">
            {areas.map((area, i) => (
              <Temario key={i} {...area} />
            ))}
          </div>
        </article>
        <article className="prizes">
          <h2>Constitución de Premios</h2>
          <div className="text-container">
            <p>
              Deseando reconocer el esfuerzo de los ponentes, y resaltar la
              calidad académica de las presentaciones realizadas, hemos
              constituido los siguientes premios:
            </p>
            <ul>
              <li>Premio Simposio Area Contabilidad</li>
              <li>Premio Simposio Area Auditoria</li>
              <li>
                Premio Profesor Hector Chyrikins (auditoria en el área
                gubernamental)
              </li>
              <li>
                Premio Profesor Ricardo Pahlen Acuña (contabilidad ambiental y
                social)
              </li>
              <li>Premio Señor Rector UNTDF (mejor trabajo de estudiantes)</li>
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}

export default About;
