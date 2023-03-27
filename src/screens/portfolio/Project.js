import React from 'react'
import './project.css'

export default function Project({ item }) {
  return (
    <div className='project__container'>
            <h1 className='project__title'>{item.title}</h1>
      <img src={item.image} alt='project' className='project__image' />
        <div>
            <p className='description'>{item.description}</p>
            <p className='technologies'>{item.technologies}</p>
            <span>
                <a target='_blank' href={item.repo} rel="noreferrer">
                    <i class='fa-solid fa-code-fork'></i>
                </a>
                <a target='_blank' href={item.deployed} rel="noreferrer">
                    <i class='fa-light fa-browser'></i>
                </a>
            </span>
        </div>
    </div>
  )
}
