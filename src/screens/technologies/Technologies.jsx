import React from 'react'
import './technologies.css'
import DevIcon from 'devicon-react-svg';
import {techs} from '../../helpers/techs'

function Technologies() {
  return (
    <div className='technologies__container' id='technologies' style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}>
        <div>
            <h1 className='tech__title'>Technologies</h1>
        </div>
        <div className='tech__cards__container'>
            {techs.map((e, idx) => {
                return (
                    <div key={idx} className='tech__card'>
                        <DevIcon className='tech_icons' icon={e.iconName} />
                        <span style={{ margin: '5px', fontSize: '1.5rem' }}>{e.name}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Technologies
