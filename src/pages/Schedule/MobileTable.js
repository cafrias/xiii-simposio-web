// @flow
import React from 'react'

// DATA ________________________________________________________________________
import {timeEntries} from './data'

// TYPES _______________________________________________________________________
type MobileTableProps = {
  weekday: string,
  date: string,
  activities: {}
}

function MobileTable({weekday, date, activities}: MobileTableProps) {
  return (
    <table className="table mobile-table">
      <thead>
        <tr>
          <th style={{opacity: 0}}>Hora</th>
          <th className="table__date">
            <span className="table__weekday">{weekday}</span>
            {date}
          </th>
        </tr>
      </thead>
      <tbody>
        {
          timeEntries.map((time, i) => (
            <tr className="activity-row" key={i}>
              <td className="activity__time">{time}</td>
              <td className="activity__name">
                {
                  activities.hasOwnProperty(time)
                    ? activities[time]
                    : '–'
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default MobileTable
