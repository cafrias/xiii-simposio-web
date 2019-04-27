import { DayObject } from "./DesktopTable";

export const timeEntries = [
  "15.00",
  "17.00",
  "17.30",
  "19.00",
  "19.30",
  "21.00",
  "22.30"
];

const activities: DayObject[] = [
  {
    weekday: "Miércoles",
    date: "15/05/2019",
    activities: {
      "15.00": "Acreditaciones",
      "17.00": "Acto de Apertura",
      "17.30": "Trabajo en comisiones",
      "19.00": "Coffee Break",
      "19.30": "Conferencias",
      "21.00": "Cóctel de bienvenida (tarjeta requerida)"
    }
  },
  {
    weekday: "Jueves",
    date: "16/05/2019",
    activities: {
      "17.00": "Trabajo en comisiones",
      "17.30": "Trabajo en comisiones",
      "19.00": "Coffee Break",
      "19.30": "Conferencia",
      "21.00": "Cena libre"
    }
  },
  {
    weekday: "Viernes",
    date: "17/05/2019",
    activities: {
      "17.00": "Trabajo en comisiones",
      "17.30": "Trabajo en comisiones",
      "19.00": "Coffee Break",
      "19.30": "Conferencia",
      "21.00": "Acto de clausura",
      "22.30": "Cena de camaradería (tarjeta requerida)"
    }
  }
];

export default activities;
