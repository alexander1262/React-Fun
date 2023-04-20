import React from 'react'
import DevIcon from 'devicon-react-svg';
import './project.css'
import { useState } from 'react';

export default function Project({ item }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  }

  const handleMouseOut = () => {
    setHovered(false);
  }
  return (
    <div className='project__container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={item.image} alt='project' className='project__image' />
      {hovered && (
      <div className='hover-text'>
        <div className='text__wrapper'>
        <h1 className='project__title'>{item.title}</h1>
        <p className='description'>{item.description}</p>
        <p className='technologies'>{item.technologies}</p>
            <div className="custom-pagination"></div>
            <span className='website__links'>
                <a target='_blank' href={item.repo} rel="noreferrer">
                    <DevIcon className='github__icon' icon='github_badge' />
                </a>
                <a target='_blank' href={item.deployed} rel="noreferrer">
                    <DevIcon className='deployed__icon' icon='ie' />
                </a>
            </span>
        </div>
        </div>
        )}
      </div>
  )
}
