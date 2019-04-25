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
          "Elaboración de variables e indicadores en procesos robotizados.",
          "Elaboración de variables e indicadores para la Contabilidad Ambiental y Social."
        ]
      },
      {
        tema:
          "Rol del Profesional y cumplimiento de los requisitos de la Información Contable:",
        subtemas: [
          "En el desarrollo e implementación de programas informáticos frente a las NCPA y las NIIF.",
          "En el desarrollo e implementación de programas informáticos para la Contabilidad Ambiental y Social."
        ]
      },
      {
        tema:
          "Unidad de Medida. Variables a considerar en el ambiente interno y externo de las organizaciones."
      },
      {
        tema: "Contabilidad Gubernamental, la rendición de cuentas:",
        subtemas: [
          "Basada en programas informáticos de gestión presupuestaria.",
          "Orientada a la inclusión de recursos naturales y variables sociales."
        ]
      },
      {
        tema: "La Información Contable de los EPEQ:",
        subtemas: [
          "Efectos de la utilización de programas informáticos de autogestión.",
          "La inclusión de la Contabilidad Ambiental y Social."
        ]
      },
      {
        tema:
          "Los Usuarios de la Información Contable y el acceso digital a bases de datos."
      },
      {
        tema:
          "Información Contable para la Gestión en ambientes informatizados y/o robotizados."
      },
      {
        tema: "La Contabilidad de Gestión orientada:",
        subtemas: [
          "Al proceso de toma de decisiones en ambientes automatizados y robotizados.",
          "A la inclusión de variables ambientales y sociales en la Contabilidad."
        ]
      },
      {
        tema:
          "Técnicas contables de medición para el reconocimiento y registro:",
        subtemas: [
          "De transacciones en procesos automatizados y robotizados",
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
          "Contextos automatizados y robotizados.",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema: "El riesgo y el enfoque de la auditoría en:",
        subtemas: [
          "Contextos automatizados y robotizados.",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema: "Las acciones interdisciplinarias en la auditoría en:",
        subtemas: [
          "Contextos automatizados y robotizados.",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema:
          "La Auditoría y el Control Interno, en grupos económicos, adaptación a:",
        subtemas: [
          "Ambientes automatizados, robotizados y con complejidad asociada.",
          "Inclusión de variables de ambientales y sociales en la Contabilidad."
        ]
      },
      {
        tema: "La Contabilidad Gubernamental y el Control en:",
        subtemas: [
          "Ambientes con tendencias a la robotización y automatización.",
          "Ambientes de alto impacto ambiental y social."
        ]
      },
      {
        tema:
          "Técnicas de Auditoría específicas para el desarrollo de auditorías en:",
        subtemas: [
          "Contextos automatizados y robotizados.",
          "Contextos de alto impacto ambiental y social."
        ]
      },
      {
        tema: "La auditoría auxiliar de soportes de datos en la nube."
      },
      {
        tema:
          "Técnicas de auditoría específicas para el examen de nuevos negocios en contextos automatizados y robotizados."
      },
      {
        tema:
          "La Auditoría y sus acciones en contextos automatizados y robotizados."
      }
    ]
  },
  {
    areaName: "investigación",
    topics: [
      {
        tema:
          "La Contabilidad y la Auditoría en ambientes automatizados y robotizados."
      },
      {
        tema:
          "Los nuevos tipos de relaciones económicas que surgen de la automatización y robotización, su contabilización y auditoría."
      },
      {
        tema:
          "Marco Normativo de la Contabilidad y Auditoría, criterios a adoptar frente a la automatización y robotización."
      },
      {
        tema:
          "La Contabilidad Social y Ambiental dentro de la automatización y robotización de procesos comerciales y administrativos."
      }
    ]
  }
];

export default temario;
