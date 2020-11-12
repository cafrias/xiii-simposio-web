import { DayObject } from "./DesktopTable";

export const timeEntries = [
  "11.00",
  "18.30",
];

const activities: DayObject[] = [
  {
    weekday: "Miércoles",
    date: "25/11/2020",
    activities: {
      "18.30": "Transmisión en vivo",
    }
  },
  {
    weekday: "Jueves",
    date: "26/11/2020",
    activities: {
      "11.00": "Transmisión en vivo",
      "18.30": "Transmisión en vivo",
    }
  },
  {
    weekday: "Viernes",
    date: "27/11/2020",
    activities: {
      "11.00": "Transmisión en vivo",
      "18.30": "Transmisión en vivo",
    }
  }
];

export default activities;
