// @flow
import React from 'react'
import './App.css'

import Navbar from './components/Navbar'

// PAGES _______________________________________________________________________

import Home from './pages/Home'
import About from './pages/About'
import Speakers from './pages/Speakers'
import Schedule from './pages/Schedule'
import Registration from './pages/Registration'
import Location from './pages/Location'

// APP COMPONENT _______________________________________________________________

const App = () =>
  <div className="App">
    <Navbar/>
    <main className="content-container">
      <Home/>
      <About/>
      <Speakers/>
      <Schedule/>
      <Registration/>
      <Location/>
    </main>
  </div>

export default App
