import React from 'react'
import DevIcon from 'devicon-react-svg';
import './project.css'

export default function Project({ item }) {
  return (
    <div className='project__container'>
            <h1 className='project__title'>{item.title}</h1>
      <img src={item.image} alt='project' className='project__image' />
        <div>
            <p className='descriptionTitle'>Description:</p>
            <p className='description'>{item.description}</p>
            <p className='technologiesTitle'>Technologies Used:</p>
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
  )
}
