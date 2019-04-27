type TemaType = {
  tema: string;
  subtemas?: Array<string>;
};

export type AreaType = {
  areaName: string;
  topics: Array<TemaType>;
};

type TemarioType = Array<AreaType>;

/*
Describes information for each area that the paper can be focused on.
*/
const temario: TemarioType = [
  {
    areaName: "contable",
    topics: [
      {
        tema: "Información Contable:",
        subtemas: [
          "Elaboración de informes orientados al cambio de paradigma propuesto por la economía azul (blue economy).",
          "Elaboración de variables e indicadores para la Contabilidad Ambiental y Social."
        ]
      },
      {
        tema:
          "Rol del Profesional y cumplimiento de los requisitos de la Información Contable:",
        subtemas: [
          "Relaciones de la RT 36 en la elaboración de informes bajo los principios de la economía azul (blue economy).",
          "Participación en equipos interdisciplinarios para el desarrollo e implementación de SIC para la Contabilidad Ambiental y Social."
        ]
      },
      {
        tema:
          "Unidad de Medida. Variables a considerar en el ambiente interno y externo de las organizaciones."
      },
      {
        tema: "Contabilidad Gubernamental, la rendición de cuentas:",
        subtemas: [
          "Basada en los principio propuestos por la economía azul (blue economy).",
          "Orientada a la inclusión de recursos naturales y variables sociales."
        ]
      },
      {
        tema: "La Información Contable de los EPEQ:",
        subtemas: [
          "El registro contable vinculado a los nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "La inclusión de la Contabilidad Ambiental y Social."
        ]
      },
      {
        tema:
          "Los Usuarios de la Información Contable y los grupos de interés relacionados a la economía azul (blue economy)."
      },
      {
        tema:
          "Información Contable para la Gestión bajo los principios propuestos por la economía azul (blue economy)."
      },
      {
        tema: "La Contabilidad de Gestión orientada:",
        subtemas: [
          "Al proceso de toma de decisiones como generador de la huella ambiental.",
          "A la inclusión de variables ambientales y sociales en la Contabilidad."
        ]
      },
      {
        tema:
          "Técnicas contables de medición para el reconocimiento y registro:",
        subtemas: [
          "De transacciones vinculadas a los nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "De variables ambientales y sociales."
        ]
      }
    ]
  },
  {
    areaName: "auditoría",
    topics: [
      {
        tema: "El accionar del auditor en:",
        subtemas: [
          "Nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema: "El riesgo y el enfoque de la auditoría en:",
        subtemas: [
          "Nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema: "Las acciones interdisciplinarias en la auditoría en:",
        subtemas: [
          "Nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema:
          "La Auditoría y el Control Interno, en grupos económicos, adaptación a:",
        subtemas: [
          "Nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "Inclusión de variables de ambientales y sociales en la Contabilidad."
        ]
      },
      {
        tema: "La Contabilidad Gubernamental y el Control en:",
        subtemas: [
          "Nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "Ambientes de alto impacto ambiental y social."
        ]
      },
      {
        tema:
          "Técnicas de Auditoría específicas para el desarrollo de auditorías en:",
        subtemas: [
          "Nuevos tipo de negocios en el marco de la economía azul (blue economy).",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema:
          "La auditoría auxiliar para los subsistemas de información que colaboran con la definición de la huella ambiental de las organizaciones."
      },
      {
        tema:
          "Técnicas de auditoría específicas para el examen de nuevos negocios en cumplimiento a los principios propuestos por la economía azul (blue economy).",
        subtemas: [
          "La Auditoría y sus acciones en nuevos tipo de negocios en el marco de la economía azul (blue economy)"
        ]
      }
    ]
  },
  {
    areaName: "investigación",
    topics: [
      {
        tema:
          "La Contabilidad y la Auditoría orientada al cambio paradigmático propuesto por la economía azul (blue economy)."
      },
      {
        tema:
          "Los nuevos tipos de relaciones económicas que surgen de la economía azul (blue economy)."
      },
      {
        tema:
          "Marco Normativo de la Contabilidad y Auditoría, para la contabilidad azul."
      },
      {
        tema:
          "La Contabilidad Social y Ambiental aportando al proceso de cambio propuesto por la economía azul (blue economy)."
      }
    ]
  }
];

export default temario;
