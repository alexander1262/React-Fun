import React from 'react'
import Typed from 'react-typed';
import './header.css'

export default function Header() {
  return (
    <div className="main-info">
      <h1 class='frontEndTitle'>Front End Developer</h1>
      <Typed
        strings={[
            'Who loves working with React',
            'Also CSS, SASS',
            'Learning PHP and Typescript aswell'
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
  )
}
