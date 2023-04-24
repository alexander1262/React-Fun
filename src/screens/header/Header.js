import React from 'react'
import Typed from 'react-typed';
import './header.css'

export default function Header() {
  return (
    <div className="main-info" style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}>
      <h2 className='frontEndName'>Alexander Weiss</h2>
      <h1 className='frontEndTitle'>Front End Developer</h1>
      <Typed
        strings={[
            'Who loves working with React',
            'Also CSS, SASS',
            'Learning Java and Typescript aswell'
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
  )
}
