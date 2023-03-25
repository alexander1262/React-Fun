import React from 'react'
import './aboutMe.css'
import person from '../../images/selfie.png'

export default function AboutMe() {
  return (
    <div className='about__container' id='about-me'>
      <div>
        <img src={person} alt="person icon" />
      </div>
      <div className='about__text'>
        <h1>ABOUT ME</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur voluptas minus. Aut earum voluptatem minus optio cupiditate. Illo pariatur nemo aliquid mollitia quos nam iusto possimus modi accusantium recusandae.</p>
      </div>
    </div>
  )
}
