// @flow
import React from 'react'
import './App.css'

// PAGES _______________________________________________________________________

import Home from './pages/Home'
import About from './pages/About'
import Subscribe from './pages/Subscribe'
import Speakers from './pages/Speakers'


// APP COMPONENT _______________________________________________________________

const App = () =>
  <div className="App">
    <main className="content-container">
      <Home/>
      <About/>
      <Speakers/>
      <Subscribe/>
    </main>
  </div>

export default App
