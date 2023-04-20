import React, { useState } from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationlinks'
import { ReactComponent as MoonIcon } from '../../images/moon.svg';
import { ReactComponent as SunIcon } from '../../images/sun.svg';

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref} style= {{ backgroundColor: `var(--nav-back)`, color: `var(--text-color)` }}>{e.name}</Nav.Link>
    ))
}

export default function NavigationBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };
  return (
    <div id="home">
      <Navbar className="navigation__container" style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%', backgroundColor: `var(--nav-back)`, color: `var(--text-color)` }}
      collapseOnSelect
      expand='md'>
      <Navbar.Brand style={{ marginLeft: '1rem', backgroundColor: `var(--nav-back)`, color: `var(--text-color)` }} href="#home">Alexander Weiss</Navbar.Brand>
      <button className='darklightbutton' onClick={toggleMode}>
        {isDarkMode ? <SunIcon className='sunsvg'/> : <MoonIcon />}
      </button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
        <Nav className='links' style={{ margin: '0 1rem' }}>
        {createLinks()}
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
