import { DayObject } from "./DesktopTable";

export const timeEntries = [
  "11.00",
  "13.00",
  "18.00",
  "18.30",
  "20.30",
];

const activities: DayObject[] = [
  {
    weekday: "Miércoles",
    date: "25/11/2020",
    activities: {
      "18.00": "Acto de Apertura",
      "18.30": "Mesa de Decanos",
    }
  },
  {
    weekday: "Jueves",
    date: "26/11/2020",
    activities: {
      "11.00": "Disertantes Invitados: Eduardo Solís, Ricardo Barrera, Mauricio Lambertucci y Ricardo Frías",
      "13.00": "Disertantes Invitados: Heraclio Lanza, Claudia Clas, María del Carmen Rodríguez de Ramírez y Gustavo Montanini",
    }
  },
  {
    weekday: "Viernes",
    date: "27/11/2020",
    activities: {
      "11.00": "Disertantes Invitados: Hugo Arrghini, Héctor Chyrikins y Mariela Coletta",
      "18.30": "Disertantes Invitados: Hugo Luppi, Ana M. Campo y Roberto Vázquez",
      "20.30": "Acto de Cierre"
    }
  }
];

export default activities;
