// @flow
import React from 'react'
import {Link} from 'react-scroll'

import './Navbar.css'
import logo from './logo.svg'

const options = [
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

type HamburgerProps = {
  active: boolean,
  handler: () => void
}

const Hamburger = ({active, handler}: HamburgerProps) =>
  <button className={`button navbar-burger is-white ${active ? 'is-active' : ''}`}
    onClick={handler}>
    <span/>
    <span/>
    <span/>
  </button>

const Menu = () =>
  <React.Fragment>
    {
      options.map((opt, idx) => 
        <Link key={idx} className="navbar-item menu__opt"
          spy={true} activeClass="menu__opt--active" duration={500}
          smooth={true} to={opt.id} offset={-100}>
          {opt.label}
        </Link>
      )
    }
  </React.Fragment>

type NavbarProps = {||}
type NavbarState = {
  active: boolean
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleActive() {
    this.setState(Object.assign({}, this.state, {
      active: !this.state.active
    }))
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link spy={false} duration={500} smooth={true} to="home"
              className="navbar-item">
              <img src={logo} alt="Logo Simposio"/>
            </Link>
            <Hamburger active={this.state.active} handler={this.toggleActive.bind(this)}/>
          </div>
          <div className={`navbar-menu ${this.state.active ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Menu/>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link spy={false} duration={500} smooth={true} to="subs_form"
                  offset={-50} className="button is-primary">
                  Incribirse
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
