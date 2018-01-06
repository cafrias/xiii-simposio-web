// @flow
import React from 'react'
import {Link} from 'react-scroll'

import './Navbar.css'

const options = [
  {
    id: '',
    label: 'Inicio'
  },
  {
    id: 'about',
    label: '¿Qué es el Simposio?'
  },
  {
    id: 'speakers',
    label: 'Disertantes'
  },
  {
    id: 'schedule',
    label: 'Cronograma'
  },
  {
    id: 'registration',
    label: 'Inscripción'
  },
  {
    id: 'location',
    label: 'Ubicación'
  }
]

const Menu = () =>
  <ul className="menu">
    {
      options.map((opt, idx) => 
        <Link key={idx} className="menu__opt"
          spy={true} activeClass="menu__opt--active" duration={500}
          smooth={true} to={opt.id} offset={-100}>
          {opt.label}
        </Link>
      )
    }
  </ul>

const Navbar = () =>
  <nav className="navbar">
    <Menu/>
  </nav>

export default Navbar
