// @flow
import React from 'react'
import './App.css'

// PAGES _______________________________________________________________________

import Home from './pages/Home'
import About from './pages/About'
import Subscribe from './pages/Subscribe'
import Speakers from './pages/Speakers'
import Schedule from './pages/Schedule'
import Registration from './pages/Registration'
import Location from './pages/Location'

// APP COMPONENT _______________________________________________________________

const App = () =>
  <div className="App">
    <main className="content-container">
      <Home/>
      <About/>
      <Speakers/>
      <Schedule/>
      <Subscribe/>
      <Registration/>
      <Location/>
    </main>
  </div>

export default App
