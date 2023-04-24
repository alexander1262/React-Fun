import React from 'react'
import './contactme.css'
// import { ReactComponent as Footerlinkedin} from '../../images/footerlinkedin.svg'
// import { ReactComponent as Footergithub } from '../../images/footergithub.svg'
import footerlinkedin from '../../images/footerlinkedin.svg'
import footergithub from '../../images/footergithub.svg'

function ContactMe() {
  return (
    <div className='contactMe__container' id='contact' style= {{ backgroundColor: `var(--nav-back)`, color: `var(--text-color)` }}>
        <div className='logo__wrapper'>
            {/* <Footerlinkedin className='footer__linkedin__logo'/>
            <Footergithub className='footer__github__logo' /> */}
            <a href='https://www.linkedin.com/in/alexander-nathaniel-weiss/' target='_blank' rel="noreferrer"><img src={footerlinkedin} className='footer__linkedin__logo' /></a>
            <a href='https://github.com/alexander1262' target='_blank' rel="noreferrer"><img src={footergithub} className='footer__github__logo'/></a>
        </div>
      <div className='contactMe__data__links'>
        {/* <div className='contactMe__personal'>
            <p>Pennsylvania</p>
            <p>weisssander@gmail.com</p>
            <p>Alexander Weiss</p>
        </div> */}
      </div>
      <div style={{ textAlign: 'center' }}>Copyright&copy;{new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
