import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationlinks'

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

export default function NavigationBar() {
  return (
    <div id="home">
      <Navbar expand='md'>
      <Navbar.Brand href="#home">Alexander Weiss</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
        {createLinks()}
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
