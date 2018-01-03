// @flow
import React from 'react'

// DATA ________________________________________________________________________
import {timeEntries} from './data'

type DayObject = {
  activities: {
    time: string
  },
  weekday: string,
  date: string
}

type DesktopTableProps = {
  days: DayObject[]
}

function DesktopTable({days}: DesktopTableProps) {
  return (
    <table className="schedule-table desktop-table">
      <thead>
        <tr>
          <th style={{opacity: 0}}>Hora</th>
          {
            days.map(({weekday, date}, i) => (
              <th key={i} className="table__date">
                <span className="table__weekday">{weekday}</span>
                {date}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          timeEntries.map((time, i) => (
            <tr className="activity-row" key={i}>
              <td className="activity__time">{time}</td>
              {
                days.map(({activities}, i) => (
                  <td key={i} className="activity__name">
                    {
                      activities.hasOwnProperty(time) ?
                        activities[time] :
                        '–'
                    }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default DesktopTable
