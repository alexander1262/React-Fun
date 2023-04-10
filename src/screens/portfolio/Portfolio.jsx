import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './portfolio.css';
import Project from "./Project";
import portfolioData from '../../helpers/porfolioData';
import 'bootstrap/dist/css/bootstrap.css';

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='portfolio__main__container' id='portfolio'>
      <h1>Portfolio</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} showControl touch={true}s>
        <Carousel.Item>
          <Project item={portfolioData[0]} />
        </Carousel.Item>
        <Carousel.Item>
          <Project item={portfolioData[1]} />
        </Carousel.Item>
        <Carousel.Item>
          <Project item={portfolioData[2]} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Portfolio