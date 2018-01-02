// @flow

import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Subscribe from './pages/Subscribe'

const App = () =>
  <div className="App">
    <main className="content-container">
      <Home/>
      <About/>
      <Subscribe/>
    </main>
  </div>

export default App
