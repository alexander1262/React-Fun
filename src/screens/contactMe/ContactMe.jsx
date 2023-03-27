import React from 'react'
import './contactme.css'
import { navigationLinks } from '../../helpers/navigationlinks'

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
  return (
    <div className='contactMe__container' id='contact'>
      <div className='contactMe__data__links'>
        <div>
            <p>Pennsylvania</p>
            <p>Alexander Weiss</p>
            <p>weisssander@gmail.com</p>
        </div>
        <div>
            {createLinks()}
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>Copyright&copy;{new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
