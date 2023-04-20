import React, { useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import './portfolio.css';
import Project from "./Project";
import portfolioData from '../../helpers/porfolioData';
import 'bootstrap/dist/css/bootstrap.css';

function Portfolio() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div className='portfolio__main__container' id='portfolio'>
      <h1 className='portfolio__title'>Portfolio</h1>
      <div className='portfolio__small__container'>
        <Project item={portfolioData[0]} />
        <Project item={portfolioData[1]} />
        <Project item={portfolioData[2]} />
        <Project item={portfolioData[3]} />
        <Project item={portfolioData[4]} />
        <Project item={portfolioData[5]} />
      </div>
    </div>
  )
}

export default Portfolio