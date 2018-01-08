// @flow

import React from 'react'

import './Schedule.css'

// COMPONENTS __________________________________________________________________
import Section from '../../components/Section'
import MobileTable from './MobileTable'
import DesktopTable from './DesktopTable'

// DATA ________________________________________________________________________
import days from './data'

function Schedule() {
  return(
    <Section id="schedule" name="Cronograma" className="background_white schedule">
      <div className="mobile-content mobile-pad text-container">
        {
          days.map((day, i) => (
            <MobileTable key={i} {...day}/>
          ))
        }
      </div>
      <div className="desktop-content">
        <DesktopTable days={days}/>
      </div>
    </Section>
  )
}

export default Schedule
