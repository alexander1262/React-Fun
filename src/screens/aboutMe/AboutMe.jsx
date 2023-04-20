import React from 'react'
import './aboutMe.css'
import person from '../../images/selfie.png'
import resume from '../../helpers/resume.pdf'

export default function AboutMe() {
  return (
    <div className='about__container' id='about-me' style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}>
      <div>
        <img src={person} alt="person icon" />
      </div>
      <div className='about__text'>
        <h1 className='about__title'>About Me</h1>
        <p>As a former tennis coach I have always loved working as efficiently as possible as well as working with teams. Creative problem solving, high attention to detail, and communication are all traits I had to maximize in my 12 years of coaching. Video games have been prevalent in my free time since a young age and have helped me develop some basic computer navigation skills. I also enjoy reading, yoga, meditation, and walking my dog in my free time.</p>
        <div className='resume__wrapper'>
            <a className='resume__link' href={resume} target='_blank' rel="noreferrer">
              Resume
            </a>
        </div>
      </div>
    </div>
  )
}
